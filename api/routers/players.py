from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
    Response,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator

from pydantic import BaseModel
from typing import List, Union

from queries.players import (
    PlayerIn,
    PlayerOut,
    PlayerOutOther,
    PlayerOutSelf,
    PlayerRepository,
    DuplicateAccountError,
    Error,
)


class PlayerForm(BaseModel):
    username: str
    password: str


class PlayerToken(Token):
    account: PlayerOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()  # we hook up our router to the main.py


@router.get("/token", response_model=PlayerToken | None)
async def get_token(
    request: Request,
    account: PlayerOut = Depends(authenticator.try_get_current_account_data),
) -> PlayerToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.delete("/api/players/{player_id}")
def delete_player(
    player_id: int,
    repo: PlayerRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
) -> bool:
    if player_id == account_data["id"]:
        return repo.delete(player_id)
    elif player_id != account_data["id"]:
        raise HTTPException(
            status_code=status.HTTP_405_METHOD_NOT_ALLOWED,
            detail="Cannot delete that user",
        )


@router.get(
    "/api/players/{player_id}",
    response_model=PlayerOutSelf | PlayerOutOther | HttpError,
)
async def get_one(
    player_id: int,
    repo: PlayerRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> PlayerOutSelf | PlayerOutOther:
    if player_id == account_data["id"]:
        player = repo.get_one_self(player_id)
    elif player_id != account_data["id"]:
        player = repo.get_one(player_id)
    else:
        raise HTTPException(
            status_code=status.HTTP_404_BAD_REQUEST,
            detail="Player does not exist",
        )
    return player


@router.put("/api/players/{player_id}", response_model=PlayerOut | HttpError)
async def update_player(
    player_id: int,
    player: PlayerIn,
    repo: PlayerRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> PlayerOut:
    if account_data["id"] != player_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot update that user",
        )
    hashed_password = authenticator.hash_password(player.password)
    updated_player = repo.update_player(player_id, player, hashed_password)

    return updated_player


@router.post("/api/players", response_model=PlayerToken | HttpError)
async def create_player(
    info: PlayerIn,
    request: Request,
    response: Response,
    repo: PlayerRepository = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)

    try:
        account = repo.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = PlayerForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return PlayerToken(account=account, **token.dict())


@router.get("/api/players/", response_model=Union[List[PlayerOut], Error])
def get_all(
    repo: PlayerRepository = Depends(),
):
    return repo.get_all()
