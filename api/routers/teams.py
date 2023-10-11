from fastapi import APIRouter, Depends
from queries.teams import TeamRepository, Error, TeamIn, AllTeamsOut
from typing import List, Union


router = APIRouter()


# GET all teams
@router.get("/api/teams/", response_model=Union[List[AllTeamsOut], Error])
def get_all(
    repo: TeamRepository = Depends(),
):
    return repo.get_all()


# POST (create) a team
@router.post("/api/teams/")
def create_team(
    team: TeamIn,
    repo: TeamRepository = Depends()
):
    return repo.create_team(team)
