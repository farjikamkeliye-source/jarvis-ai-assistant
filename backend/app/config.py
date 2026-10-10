from dotenv import load_dotenv
from pydantic_settings import BaseSettings

load_dotenv()


class Settings(BaseSettings):
    OPENAI_API_KEY: str = ""
    MODEL_NAME: str = "gpt-4o-mini"
    BACKEND_PORT: int = 8000

    class Config:
        env_file = ".env"


settings = Settings()
