from fastapi import APIRouter, Depends
from typing import Union
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
