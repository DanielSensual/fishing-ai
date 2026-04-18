import UIKit
import Capacitor
import WebKit

/// Custom CAPBridgeViewController with performance optimizations for
/// heavy CSS backdrop-filter blur, WebGL (MapLibre GL), and CSS animations.
class FishingAIViewController: CAPBridgeViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        configureWebView()
        injectPerformanceScripts()
    }

    // MARK: - WKWebView Configuration

    private func configureWebView() {
        guard let webView = self.webView else { return }

        // --- GPU / rendering ---
        webView.configuration.preferences.setValue(true, forKey: "acceleratedDrawingEnabled")
        webView.configuration.preferences.javaScriptCanOpenWindowsAutomatically = false

        // --- Scroll view ---
        webView.scrollView.decelerationRate = .normal
        webView.scrollView.bounces = false
        webView.scrollView.contentInsetAdjustmentBehavior = .always

        // --- Dark theme background (#060d18) ---
        let bgColor = UIColor(red: 6/255, green: 13/255, blue: 24/255, alpha: 1)
        webView.isOpaque = false
        webView.backgroundColor = bgColor
        webView.scrollView.backgroundColor = bgColor

        // --- Interaction ---
        webView.allowsLinkPreview = false
    }

    // MARK: - Performance Script Injection

    private func injectPerformanceScripts() {
        guard let webView = self.webView else { return }

        let smoothScrollCSS = """
        (function() {
            var style = document.createElement('style');
            style.textContent = [
                'html, body {',
                '  -webkit-overflow-scrolling: touch;',
                '  scroll-behavior: smooth;',
                '}',
                '* { -webkit-tap-highlight-color: transparent; }',
                '.signal-card, .spot-card, .species-card, .detail-card {',
                '  transform: translateZ(0);',
                '  will-change: transform;',
                '  -webkit-backface-visibility: hidden;',
                '  backface-visibility: hidden;',
                '}'
            ].join('\\n');
            document.head.appendChild(style);
        })();
        """

        let suppressCalloutCSS = """
        (function() {
            var style = document.createElement('style');
            style.textContent = '* { -webkit-touch-callout: none; }';
            document.head.appendChild(style);
        })();
        """

        let scrollScript = WKUserScript(
            source: smoothScrollCSS,
            injectionTime: .atDocumentEnd,
            forMainFrameOnly: true
        )
        let calloutScript = WKUserScript(
            source: suppressCalloutCSS,
            injectionTime: .atDocumentEnd,
            forMainFrameOnly: true
        )

        webView.configuration.userContentController.addUserScript(scrollScript)
        webView.configuration.userContentController.addUserScript(calloutScript)
    }

    // MARK: - Status Bar

    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }
}
