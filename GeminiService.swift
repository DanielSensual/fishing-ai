import Foundation

enum GeminiError: LocalizedError {
    case missingAPIKey
    case invalidURL
    case badResponse

    var errorDescription: String? {
        switch self {
        case .missingAPIKey: return "Missing Gemini API key. Add it to Secrets.plist."
        case .invalidURL: return "Failed to build the request URL."
        case .badResponse: return "Unexpected response from the server."
        }
    }
}

struct GeminiGenerateRequest: Encodable {
    struct Content: Encodable {
        struct Part: Encodable { let text: String }
        let role: String? = nil
        let parts: [Part]
    }
    let contents: [Content]
}

struct GeminiGenerateResponse: Decodable {
    struct Candidate: Decodable {
        struct Content: Decodable {
            struct Part: Decodable { let text: String? }
            let parts: [Part]
        }
        let content: Content
    }
    let candidates: [Candidate]?
}

final class GeminiService {
    static let shared = GeminiService()
    private init() {}

    private let model = "gemini-1.5-flash"

    func generateText(for prompt: String) async throws -> String {
        let apiKey = try Self.loadAPIKey()
        guard var components = URLComponents(string: "https://generativelanguage.googleapis.com/v1beta/models/\(model):generateContent") else {
            throw GeminiError.invalidURL
        }
        components.queryItems = [URLQueryItem(name: "key", value: apiKey)]
        guard let url = components.url else { throw GeminiError.invalidURL }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let payload = GeminiGenerateRequest(contents: [
            .init(parts: [.init(text: prompt)])
        ])
        request.httpBody = try JSONEncoder().encode(payload)

        let (data, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse, (200..<300).contains(http.statusCode) else {
            if let body = String(data: data, encoding: .utf8) {
                throw NSError(domain: "GeminiService", code: (response as? HTTPURLResponse)?.statusCode ?? -1, userInfo: [NSLocalizedDescriptionKey: body])
            }
            throw GeminiError.badResponse
        }

        let decoded = try JSONDecoder().decode(GeminiGenerateResponse.self, from: data)
        if let text = decoded.candidates?.first?.content.parts.compactMap({ $0.text }).joined(), !text.isEmpty {
            return text
        }
        return "(No text in response)"
    }

    private static func loadAPIKey() throws -> String {
        // Look for Secrets.plist bundled in the app.
        guard let url = Bundle.main.url(forResource: "Secrets", withExtension: "plist"),
              let data = try? Data(contentsOf: url),
              let dict = try? PropertyListSerialization.propertyList(from: data, options: [], format: nil) as? [String: Any],
              let key = dict["GEMINI_API_KEY"] as? String,
              !key.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
            throw GeminiError.missingAPIKey
        }
        return key
    }
}
