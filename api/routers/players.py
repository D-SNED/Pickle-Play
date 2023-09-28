from fastapi import APIRouter, Depends
from typing import List, Union
from queries.players import PlayerRepository, PlayerOut, Error


router = APIRouter()  # we hook up our router to the main.py


@router.get("/api/players/", response_model=Union[List[PlayerOut], Error])
def get_all(
    repo: PlayerRepository = Depends(),
):
    return repo.get_all()
