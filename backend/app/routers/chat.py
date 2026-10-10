from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class ChatMessage(BaseModel):
    message: str


@router.post("/chat")
def chat_with_assistant(payload: ChatMessage):
    text = payload.message.strip()
    if not text:
        return {"reply": "I’m ready. What would you like me to do?"}

    lowered = text.lower()
    if "open" in lowered and "github" in lowered:
        reply = "I can help open GitHub. In a real desktop deployment, I would launch the browser or your repository UI here."
    elif "start" in lowered and ("server" in lowered or "app" in lowered):
        reply = "I can start the relevant service. In this starter project, the assistant is ready for integration with your actual runtime commands."
    elif "hello" in lowered or "hi" in lowered:
        reply = "Hello! I’m your Jarvis-style assistant. I can help with planning, coding, automation, and task execution."
    else:
        reply = (
            f"I received: '{text}'. This starter assistant is ready for an AI backend connection and can be extended to run tools, browser actions, and desktop automation."
        )

    return {"reply": reply}
