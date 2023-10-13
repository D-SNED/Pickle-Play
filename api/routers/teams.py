from fastapi import APIRouter, Depends, Response
from queries.teams import TeamRepository, Error, TeamIn, AllTeamsOut, TeamOut
from typing import List, Union


router = APIRouter()


# GET all teams
@router.get("/api/teams/", response_model=Union[List[AllTeamsOut], Error])
def get_all(
    repo: TeamRepository = Depends(),
):
    return repo.get_all()


# POST (create) a team
@router.post("/api/teams/", response_model=Union[TeamOut, Error])
def create_team(
    team: TeamIn, response: Response, repo: TeamRepository = Depends()
):
    # COMMENTED OUT 'response.status_code = 400 BELOW BUT
    # CAN ADD FOR STATUS CODE IF NEEDED
    # REWATCH "FastAPI - Response Models" video for clarification
    # response.status_code = 400
    return repo.create_team(team)


# PUT (update) a location
@router.put("/api/teams/{team_id}", response_model=Union[TeamOut, Error])
def update_team(
    team_id: int,
    team: TeamIn,
    repo: TeamRepository = Depends(),
) -> Union[TeamOut, Error]:
    return repo.update_team(team_id, team)


# WILL NEED TO CREATE AN IF STATEMENT like below:
# if player_id_2 is not null
# player_id: int,
#
