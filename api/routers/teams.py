from fastapi import APIRouter, Depends, HTTPException, status
from queries.teams import (
    TeamRepository,
    Error,
    TeamIn,
    AllTeamsOut,
    TeamOut,
    SpecificTeamOut
)
from authenticator import authenticator
from typing import List, Union
from pydantic import BaseModel


class HttpError(BaseModel):
    detail: str


router = APIRouter()


# GET all teams
@router.get("/api/teams", response_model=Union[List[AllTeamsOut], Error])
def get_all(
    repo: TeamRepository = Depends(),
):
    return repo.get_all()


# POST (create) a team
@router.post("/api/teams", response_model=Union[TeamOut, Error])
def create_team(
    team: TeamIn,
    repo: TeamRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    return repo.create_team(team)


# PUT (update) a location
@router.put("/api/teams/{team_id}", response_model=Union[TeamOut, Error])
def update_team(
    team_id: int,
    team: TeamIn,
    repo: TeamRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
) -> Union[TeamOut, Error]:

    t = repo.get_one(team_id)

    if t is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Team not found"
        )
    else:
        t_dict = t.dict()

    if (account_data["id"] == t_dict["player_id_1"]["id"] or
            (t_dict["player_id_2"] is not None
                and account_data["id"] == t_dict["player_id_2"]["id"])):
        return repo.update_team(team_id, team)
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot update that team"
        )


# GET specific team
@router.get("/api/teams/{team_id}", response_model=SpecificTeamOut | HttpError)
def get_one_team(
    team_id: int,
    repo: TeamRepository = Depends(),
) -> SpecificTeamOut:
    team = repo.get_one(team_id)
    if team is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot get that team"
        )
    return team


# DELETE specific team
@router.delete("/api/teams/{team_id}", response_model=bool | HttpError)
def delete_team(
    team_id: int,
    repo: TeamRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
) -> bool:

    team = repo.get_one(team_id)

    if team is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Team not found"
        )
    else:
        team_dict = team.dict()

    if (account_data["id"] == team_dict["player_id_1"]["id"] or
            (team_dict["player_id_2"] is not None and
                account_data["id"] == team_dict["player_id_2"]["id"])):
        return repo.delete(team_id)
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot delete that team"
        )
