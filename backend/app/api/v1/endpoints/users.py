from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from uuid import UUID, uuid4
from app.firebase.firebase_app import firestore_db

from app.models.user import User

router = APIRouter()

@router.get("/users/", response_model=List[User])
def read_users():
    docs = firestore_db.collection("users").stream()
    return [doc.to_dict() for doc in docs]

@router.post("/users/", response_model=User)
def create_user(user: User):
    user_data = user.dict()
    firestore_db.collection("users").document(str(user.email)).set(user_data)
    return user, {"message": f"User {user.email} created successfully"}

@router.get("/users/{user_email}", response_model=User)
def read_profile(user_email: str):
    doc_ref = firestore_db.collection("users").document(user_email)
    doc = doc_ref.get()
    
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    data = doc.to_dict()
    return data



@router.put("/users/{user_email}", response_model=User)
def update_user(user_email: EmailStr, user: User):
    doc_ref = firestore_db.collection("users").document(user_email)

    # Optional: check if the document exists before updating
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="User not found")
    if user_email != user.email:
        raise HTTPException(status_code=403, detail="Changing email is not allowed")
    else:
        user.email = str(user.email)
        # Overwrite the existing document
        doc_ref.set(user.dict())
    return user, {"message": f"User {user_email} updated successfully"}

@router.delete("/users/{user_email}")
def delete_user(user_email: EmailStr):
    doc_ref = firestore_db.collection("users").document(user_email)

    # Optional: check if the document exists before updating
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="User not found")
    
    doc_ref.delete()

    return {"message": "User deleted successfully"}