from fastapi import APIRouter, Depends
from typing import Union, List
from queries.tournaments import (
    TournamentIn,
    TournamentOut,
    TournamentRepository,
    Error,
)


router = APIRouter()


@router.post("/api/tournaments", response_model=Union[TournamentOut, Error])
def create_tournament(
    tournament: TournamentIn,
    repo: TournamentRepository = Depends(),
):
    return repo.create(tournament)


@router.get(
    "/api/tournaments", response_model=Union[List[TournamentOut], Error]
)
def get_all(
    repo: TournamentRepository = Depends(),
):
    return repo.get_all()
