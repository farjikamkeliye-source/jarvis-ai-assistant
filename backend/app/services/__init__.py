from app.services.assistant import JarvisAssistant


class ToolRegistry:
    def __init__(self):
        self.assistant = JarvisAssistant()

    def run(self, user_message: str) -> str:
        return self.assistant.handle(user_message)
