from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID
## User Class
class User(BaseModel):
    name: str
    email: EmailStr
    age: int
