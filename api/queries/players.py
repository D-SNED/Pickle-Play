from pydantic import BaseModel, HttpUrl
from queries.pool import pool
from typing import List, Union, Optional
from datetime import date


class DuplicateAccountError(BaseModel):
    message: str


class Error(BaseModel):
    message: str


class PlayerIn(BaseModel):
    username: str
    password: str
    email: str
    birthdate: date
    first_name: Optional[str]
    last_name: Optional[str]
    phone_number: Optional[str]
    profile_picture: Optional[str]
    gender: Optional[str]
    skill_level_singles: Optional[float]
    skill_level_doubles: Optional[float]
    is_admin: Optional[bool]
    emergency_contact_fullname: Optional[str]
    emergency_contact_phone_number: Optional[str]


class PlayerUpdate(BaseModel):
    username: Optional[str]
    password: Optional[str]
    email: Optional[str]
    birthdate: Optional[date]
    first_name: Optional[str]
    last_name: Optional[str]
    phone_number: Optional[str]
    profile_picture: Optional[Union[HttpUrl, None]]
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
    birthdate: str
    first_name: Optional[str]
    last_name: Optional[str]
    phone_number: Optional[str]
    profile_picture: Optional[str]
    gender: Optional[str]
    skill_level_singles: Optional[float]
    skill_level_doubles: Optional[float]
    is_admin: Optional[bool]
    emergency_contact_fullname: Optional[str]
    emergency_contact_phone_number: Optional[str]


class PlayerOutWithPassword(PlayerOut):
    hashed_password: str


class PlayerRepository:
    def get(self, username: str) -> PlayerOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT *
                        FROM players
                        WHERE username = %s
                        """,
                        [username],
                    )

                    player = result.fetchone()

                    return PlayerOutWithPassword(
                        id=player[0],
                        username=player[1],
                        hashed_password=player[2],
                        email=player[3],
                        birthdate=str(player[4]),
                        first_name=player[5],
                        last_name=player[6],
                        phone_number=player[7],
                        profile_picture=player[8],
                        gender=player[9],
                        skill_level_singles=player[10],
                        skill_level_doubles=player[11],
                        is_admin=player[12],
                        emergency_contact_fullname=player[13],
                        emergency_contact_phone_number=player[14],
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not get that player"}

    def create(
        self, info: PlayerIn, hashed_password: str
    ) -> PlayerOutWithPassword | Error:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO players
                            (
                                username,
                                hashed_password,
                                email,
                                birthdate
                            )
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            info.username,
                            hashed_password,
                            info.email,
                            info.birthdate,
                        ],
                    )
                    id = result.fetchone()[0]
                    old_data = info.dict()
                    old_data["hashed_password"] = old_data["password"]
                    del old_data["password"]
                    old_data["birthdate"] = str(old_data["birthdate"])
                    return PlayerOutWithPassword(id=id, **old_data)

        except Exception as e:
            print(e)
            return {"Error": "Could not create account"}

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
                            email=record[3],
                            birthdate=str(record[4]),
                            first_name=record[5],
                            last_name=record[6],
                            phone_number=record[7],
                            profile_picture=record[8],
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
