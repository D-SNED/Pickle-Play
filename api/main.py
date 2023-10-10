from fastapi import FastAPI
from routers import players, locations
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()  # This app variable contains our FastAPI application

app.include_router(players.router)
# this references the router variable within routers/players.py

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00",
        }
    }
