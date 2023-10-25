from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import Union, List
from authenticator import authenticator
from queries.tournaments import (
    TournamentIn,
    TournamentOut,
    TournamentOutWithLocation,
    TournamentRepository,
    Error,
)


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.post("/api/tournaments", response_model=TournamentOut | HttpError)
def create_tournament(
    tournament: TournamentIn,
    repo: TournamentRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data["is_admin"] is True:
        return repo.create(tournament)
    else:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Cannot create tournament"
        )


@router.get(
    "/api/tournaments",
    response_model=Union[List[TournamentOutWithLocation], Error],
)
def get_all(
    repo: TournamentRepository = Depends(),
):
    return repo.get_all()


@router.put(
    "/api/tournaments/{tournament_id}",
    response_model=TournamentOut | HttpError,
)
def update_tournament(
    tournament_id: int,
    tournament: TournamentIn,
    repo: TournamentRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
) -> TournamentOut | Error:

    if account_data["is_admin"] is True:
        return repo.update(tournament_id, tournament)
    else:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Cannot update tournament"
        )


@router.get(
    "/api/tournaments/{tournament_id}",
    response_model=Union[TournamentOutWithLocation, Error],
)
def get_specific_tournament(
    tournament_id: int,
    repo: TournamentRepository = Depends(),
) -> TournamentOutWithLocation:
    return repo.get_specific(tournament_id)


@router.delete(
    "/api/tournaments/{tournament_id}",
    response_model=bool | HttpError,
)
def delete_tournament(
    tournament_id: int,
    repo: TournamentRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
) -> bool | HttpError:

    if account_data["is_admin"] is True:
        return repo.delete_tournament(tournament_id)
    else:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Cannot delete tournament"
        )
