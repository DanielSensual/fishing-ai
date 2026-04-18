import SwiftUI

struct ContentView: View {
    @State private var prompt: String = ""
    @State private var response: String = ""
    @State private var isLoading = false
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
            VStack(spacing: 16) {
                TextField("Ask Gemini something...", text: $prompt, axis: .vertical)
                    .textFieldStyle(.roundedBorder)
                    .padding(.top)

                HStack {
                    Spacer()
                    Button(action: runPrompt) {
                        if isLoading { ProgressView() } else { Text("Ask") }
                    }
                    .buttonStyle(.borderedProminent)
                    .disabled(prompt.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty || isLoading)
                }

                GroupBox("Response") {
                    ScrollView {
                        Text(response.isEmpty ? "No response yet." : response)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .padding(.vertical, 4)
                    }
                    .frame(maxHeight: 300)
                }

                if let errorMessage {
                    Text(errorMessage)
                        .foregroundStyle(.red)
                        .font(.footnote)
                        .frame(maxWidth: .infinity, alignment: .leading)
                }

                Spacer()
            }
            .padding()
            .navigationTitle("Gemini Demo")
        }
    }

    private func runPrompt() {
        Task { @MainActor in
            isLoading = true
            errorMessage = nil
            defer { isLoading = false }
            do {
                let text = try await GeminiService.shared.generateText(for: prompt)
                response = text
            } catch {
                errorMessage = error.localizedDescription
            }
        }
    }
}

#Preview {
    ContentView()
}
