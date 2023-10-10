from fastapi import APIRouter, Depends
from queries.teams import TeamOut, TeamRepository, Error
from typing import List, Union


router = APIRouter()


@router.get("/api/teams/", response_model=Union[List[TeamOut], Error])
def get_all(
    repo: TeamRepository = Depends(),
):
    return repo.get_all()
