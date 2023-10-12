from fastapi import FastAPI
from routers import players, locations, teams, tournaments
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
import os

app = FastAPI()  # This app variable contains our FastAPI application

app.include_router(players.router)
app.include_router(authenticator.router)
app.include_router(tournaments.router)
# this references the router variable within routers/players.py
app.include_router(locations.router)
# CMB - this references the router variable in routers/locations.py
app.include_router(teams.router)
# JG - this references router variable in routers/teams.py


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
