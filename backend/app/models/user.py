from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID
## User Class
class User(BaseModel):
    id: Optional[UUID] = None
    name: str
    email: EmailStr
    age: int
