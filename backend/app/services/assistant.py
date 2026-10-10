class JarvisAssistant:
    def __init__(self):
        self.name = "Jarvis"

    def handle(self, user_message: str) -> str:
        text = user_message.strip()
        if not text:
            return "I’m listening. Tell me what to do."

        if "code" in text.lower() or "build" in text.lower():
            return "I can help scaffold and validate the project. The assistant core is ready for tool integrations."
        if "voice" in text.lower() or "speech" in text.lower():
            return "Voice integration can be plugged in through Whisper and a TTS layer for a richer assistant experience."
        if "desktop" in text.lower():
            return "Desktop automation can be connected to file, terminal, browser, and system APIs."
        if "mobile" in text.lower():
            return "Mobile actions can route through the app UI and a central backend API."

        return "I understand the request and can continue with planning, API calls, or automation integrations."
