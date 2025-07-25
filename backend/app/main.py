from fastapi import FastAPI
from .api.v1.endpoints import users
from fastapi.middleware.cors import CORSMiddleware 

app = FastAPI()

app.include_router(users.router)

# Allow frontend origin
origins = [
    "http://localhost:3000",  # React dev server
    "http://127.0.0.1:3000",
    # Add your production frontend URL here when deploying
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # Whitelist frontends
    allow_credentials=True,
    allow_methods=["*"],            # GET, POST, PUT, etc.
    allow_headers=["*"],
)
