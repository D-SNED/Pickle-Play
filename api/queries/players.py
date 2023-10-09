from pydantic import BaseModel, SecretStr, HttpUrl
from queries.pool import pool
from typing import List, Union, Optional
from datetime import datetime
# from jwtdown_fastapi.authentication import Token


class DuplicateUserError(ValueError):
    pass


class Error(BaseModel):
    message: str


class PlayerIn(BaseModel):
    username: str
    password: SecretStr
    email: str
    first_name: Optional[str]
    last_name: Optional[str]
    phone_number: Optional[str]
    profile_picture: Optional[str]
    birthdate: Optional[datetime]
    gender: Optional[str]
    skill_level_singles: Optional[float]
    skill_level_doubles: Optional[float]
    is_admin: Optional[bool]
    emergency_contact_fullname: Optional[str]
    emergency_contact_phone_number: Optional[str]


class PlayerUpdate(BaseModel):
    username: Optional[str]
    password: Optional[SecretStr]
    email: Optional[str]
    first_name: Optional[str]
    last_name: Optional[str]
    phone_number: Optional[str]
    profile_picture: Optional[Union[HttpUrl, None]]
    birthdate: Optional[datetime]
    gender: Optional[str]
    skill_level_singles: Optional[float]
    skill_level_doubles: Optional[float]
    is_admin: Optional[bool]
    emergency_contact_fullname: Optional[str]
    emergency_contact_phone_number: Optional[str]


class PlayerOut(BaseModel):
    id: int
    username: str
    email: str
    first_name: Optional[str]
    last_name: Optional[str]
    phone_number: Optional[str]
    profile_picture: Optional[str]
    birthdate: Optional[datetime]
    gender: Optional[str]
    skill_level_singles: Optional[float]
    skill_level_doubles: Optional[float]
    is_admin: Optional[bool]
    emergency_contact_fullname: Optional[str]
    emergency_contact_phone_number: Optional[str]
    verified: bool


class PlayerOutWithPassword(PlayerOut):
    hashed_password: str


# class PlayerAuthorizedViewOut(BaseModel):
#     id :int
#     username: str
#     email: str
#     first_name: Optional[str]
#     last_name: Optional[str]
#     phone_number: Optional[str]
#     profile_picture: Optional[str]
#     birthdate: Optional[datetime]
#     gender: Optional[str]
#     skill_level_singles: Optional[float]
#     skill_level_doubles: Optional[float]
#     is_admin: Optional[bool]
#     emergency_contact_fullname: Optional[str]
#     emergency_contact_phone_number: Optional[str]
#     verified: bool


# class PlayerViewOut(BaseModel):
#     id:int
#     username: str
#     email: str
#     profile_picture: Optional[str]
#     skill_level_singles: Optional[float]
#     skill_level_doubles: Optional[float]


class PlayerListOut(BaseModel):
    players: list[PlayerOut]


# class HttpError(BaseModel):
#     detail:str

# class AccountToken(Token):
#     account: PlayerOut


class PlayerRepository:
    def get_all(self) -> Union[Error, List[PlayerOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT *
                        FROM Players
                        ORDER BY id;
                        """
                    )
                    return [
                        PlayerOut(
                            id=record[0],
                            username=record[1],
                            password=record[2],
                            email=record[3],
                            first_name=record[4],
                            last_name=record[5],
                            phone_number=record[6],
                            profile_picture=record[7],
                            birthdate=record[8],
                            gender=record[9],
                            skill_level_singles=record[10],
                            skill_level_doubles=record[11],
                            is_admin=record[12],
                            emergency_contact_fullname=record[13],
                            emergency_contact_phone_number=record[14],
                        )
                        for record in db
                    ]

        except Exception:
            return {"message": "Could not get all Players"}

    # def player_in_to_out(self, id: int, player: PlayerIn):
    #     old_data = player.dict()
    #     return PlayerOut(id=id, **old_data)

    # def record_to_player_out(self, record):
    #     return PlayerOut(
    #         id = record[0],
    #             username=record[1],
    #             password=record[2],
    #             email=record[3],
    #             first_name=record[4],
    #             last_name=record[5],
    #             phone_number=record[6],
    #             profile_picture=record[7],
    #             birthdate=record[8],
    #             gender=record[9],
    #             skill_level_singles=record[10],
    #             skill_level_doubles=record[11],
    #             is_admin=record[12],
    #             emergency_contact_fullname=record[13],
    #             emergency_contact_phone_number=record[14],
    #     )
