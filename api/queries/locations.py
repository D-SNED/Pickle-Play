from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union


class DuplicateLocationError(ValueError):
    pass


class Error(BaseModel):
    message: str


class LocationIn(BaseModel):
    name: str
    address: str
    phone_number: str
    description: str
    number_indoor_courts: int
    number_outdoor_courts: int
    surface: str
    picture_url: str
    locker_rooms: bool
    restrooms: bool
    water: bool
    lighted_courts: bool
    wheelchair_accessible: bool


class LocationOut(BaseModel):
    id: int
    name: str
    address: str
    phone_number: str
    description: str
    number_indoor_courts: int
    number_outdoor_courts: int
    surface: str
    picture_url: str
    locker_rooms: bool
    restrooms: bool
    water: bool
    lighted_courts: bool
    wheelchair_accessible: bool


class LocationRepository:
    def get_all(self) -> Union[Error, List[LocationOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT *
                        FROM Locations
                        ORDER BY id;
                        """
                    )
                    return [
                        LocationOut(
                            id=record[0],
                            name=record[1],
                            address=record[2],
                            phone_number=record[3],
                            description=record[4],
                            number_indoor_courts=record[5],
                            number_outdoor_courts=record[6],
                            surface=record[7],
                            picture_url=record[8],
                            locker_rooms=record[9],
                            restrooms=record[10],
                            water=record[11],
                            lighted_courts=record[12],
                            wheelchair_accessible=record[13],
                        )
                        for record in db
                    ]
        except Exception:
            return {"message": "Could not get all Locations"}
