"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "captain";
  text: string;
  sources?: Array<{ title: string; url: string }>;
  searchQueries?: string[];
}

const SUGGESTED_QUESTIONS = [
  "Should I fish today?",
  "Best spot right now?",
  "What's biting at Jetty Park?",
  "Plan my trip this week",
  "Is the surf fishable?",
  "Snook or pompano today?",
];

export default function CaptainChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  async function sendMessage(question: string) {
    if (!question.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: question.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/captain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      const captainMessage: Message = {
        role: "captain",
        text: data.text,
        sources: data.sources,
        searchQueries: data.searchQueries,
      };
      setMessages((prev) => [...prev, captainMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "captain",
          text: "Lost connection to the feed. Try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        className="captain-fab"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Captain" : "Ask Captain"}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4 7l-3 3-3-3c-2-1.5-4-4-4-7a7 7 0 0 1 7-7z" />
            <circle cx="12" cy="9" r="2.5" fill="currentColor" stroke="none" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div className={`captain-panel ${isOpen ? "captain-panel--open" : ""}`}>
        <div className="captain-panel__header">
          <div>
            <span className="captain-panel__dot" />
            <strong>Captain</strong>
            <span className="captain-panel__sub">AI Fishing Advisor</span>
          </div>
          <span className="eyebrow" style={{ color: "var(--tidal-teal)" }}>
            Gemini + Live NOAA
          </span>
        </div>

        <div className="captain-panel__messages">
          {messages.length === 0 && (
            <div className="captain-panel__welcome">
              <p>
                Ask me anything about fishing Cape Canaveral right now.
                I have live NOAA conditions and Google Search access.
              </p>
              <div className="captain-panel__suggestions">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    disabled={isLoading}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`captain-msg ${
                msg.role === "user" ? "captain-msg--user" : "captain-msg--ai"
              }`}
            >
              {msg.role === "captain" && (
                <span className="captain-msg__badge">🎯 Captain</span>
              )}
              <div className="captain-msg__text">
                {msg.text.split("\n").map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
              {msg.sources && msg.sources.length > 0 && (
                <div className="captain-msg__sources">
                  <span className="eyebrow">Sources</span>
                  {msg.sources.slice(0, 4).map((src, j) => (
                    <a key={j} href={src.url} target="_blank" rel="noreferrer">
                      {src.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="captain-msg captain-msg--ai">
              <span className="captain-msg__badge">🎯 Captain</span>
              <div className="captain-msg__loading">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="captain-panel__input" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Captain anything..."
            disabled={isLoading}
            maxLength={500}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
