from fastapi import APIRouter, FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from uuid import UUID, uuid4

users = []

## User Class
class User(BaseModel):
    id: Optional[UUID] = None
    name: str
    email: str
    age: int

router = APIRouter()

@router.get("/users", response_model=List[User])
def read_users():
    return users

@router.post("/users/", response_model=User)
def create_user(user: User):
    user.id = uuid4()
    users.append(user)
    return user

@router.put("/users/{userid}", response_model=User)
def update_user(user_id: UUID, user_update: User):
    for idx, user in enumerate(users):
        if user.id == user_id:
            updated_user = user.copy(update=user_update.dict(exclude_unset=True))
            users[idx] = updated_user
            return updated_user
        
    raise HTTPException(status_code=404, detail="Task not found")