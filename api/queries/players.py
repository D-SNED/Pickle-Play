from pydantic import BaseModel
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


class PlayerOutOther(BaseModel):
    id: int
    username: str
    email: str
    first_name: Optional[str]
    last_name: Optional[str]
    profile_picture: Optional[str]
    gender: Optional[str]
    skill_level_singles: Optional[str]
    skill_level_doubles: Optional[str]


class PlayerOutSelf(BaseModel):
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


class PlayerRepository:
    def delete(self, player_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM players
                        WHERE id = %s
                        """,
                        [player_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def get_one_self(self, player_id: int) -> Optional[PlayerOutSelf]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , username
                            , email
                            , birthdate
                            , first_name
                            , last_name
                            , phone_number
                            , profile_picture
                            , gender
                            , skill_level_singles
                            , skill_level_doubles
                            , is_admin
                            , emergency_contact_fullname
                            , emergency_contact_phone_number
                        FROM players
                        WHERE id = %s
                        """,
                        [player_id],
                    )
                    player = result.fetchone()
                    return PlayerOutSelf(
                        id=player[0],
                        username=player[1],
                        email=player[2],
                        birthdate=str(player[3]),
                        first_name=player[4],
                        last_name=player[5],
                        phone_number=player[6],
                        profile_picture=player[7],
                        gender=player[8],
                        skill_level_singles=player[9],
                        skill_level_doubles=player[10],
                        is_admin=player[11],
                        emergency_contact_fullname=player[12],
                        emergency_contact_phone_number=player[13],
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not get player information"}

    def get_one(self, player_id: int) -> Optional[PlayerOutOther]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , username
                            , email
                            , first_name
                            , last_name
                            , profile_picture
                            , gender
                            , skill_level_singles
                            , skill_level_doubles
                        FROM players
                        WHERE id = %s
                        """,
                        [player_id],
                    )
                    player = result.fetchone()
                    return PlayerOutOther(
                        id=player[0],
                        username=player[1],
                        email=player[2],
                        first_name=player[3],
                        last_name=player[4],
                        profile_picture=player[5],
                        gender=player[6],
                        skill_level_singles=player[7],
                        skill_level_doubles=player[8],
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not get that player"}

    def update_player(
        self, player_id: int, player: PlayerIn, hashed_password: str
    ) -> Union[PlayerOutWithPassword, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE players
                        SET username = %s
                            , hashed_password = %s
                            , email = %s
                            , birthdate = %s
                            , first_name = %s
                            , last_name = %s
                            , phone_number = %s
                            , profile_picture = %s
                            , gender = %s
                            , skill_level_singles = %s
                            , skill_level_doubles = %s
                            , is_admin = %s
                            , emergency_contact_fullname = %s
                            , emergency_contact_phone_number = %s
                        WHERE id = %s
                        RETURNING *
                        """,
                        [
                            player.username,
                            hashed_password,
                            player.email,
                            player.birthdate,
                            player.first_name,
                            player.last_name,
                            player.phone_number,
                            player.profile_picture,
                            player.gender,
                            player.skill_level_singles,
                            player.skill_level_doubles,
                            player.is_admin,
                            player.emergency_contact_fullname,
                            player.emergency_contact_phone_number,
                            player_id,
                        ],
                    )
                    updated_player = db.fetchone()
                    return PlayerOut(
                        id=updated_player[0],
                        username=updated_player[1],
                        hashed_password=updated_player[2],
                        email=updated_player[3],
                        birthdate=str(updated_player[4]),
                        first_name=updated_player[5],
                        last_name=updated_player[6],
                        phone_number=updated_player[7],
                        profile_picture=updated_player[8],
                        gender=updated_player[9],
                        skill_level_singles=updated_player[10],
                        skill_level_doubles=updated_player[11],
                        is_admin=updated_player[12],
                        emergency_contact_fullname=updated_player[13],
                        emergency_contact_phone_number=updated_player[14],
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not update player"}

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
                                birthdate,
                                first_name,
                                last_name,
                                phone_number,
                                profile_picture,
                                gender,
                                skill_level_singles,
                                skill_level_doubles,
                                is_admin,
                                emergency_contact_fullname,
                                emergency_contact_phone_number
                            )
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s,
                            %s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            info.username,
                            hashed_password,
                            info.email,
                            info.birthdate,
                            info.first_name,
                            info.last_name,
                            info.phone_number,
                            info.profile_picture,
                            info.gender,
                            info.skill_level_singles,
                            info.skill_level_doubles,
                            False,  # is_admin
                            info.emergency_contact_fullname,
                            info.emergency_contact_phone_number,
                        ],
                    )
                    id = result.fetchone()[0]
                    old_data = info.dict()
                    old_data["hashed_password"] = old_data["password"]
                    del old_data["password"]
                    old_data["birthdate"] = str(old_data["birthdate"])
                    old_data["is_admin"] = False
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
