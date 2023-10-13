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


class AllLocationsOut(BaseModel):
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

    def create_location(self, location: LocationIn) -> LocationOut:
        # connect to database
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO locations
                        (
                            name,
                            address,
                            phone_number,
                            description,
                            number_indoor_courts,
                            number_outdoor_courts,
                            surface,
                            picture_url,
                            locker_rooms,
                            restrooms,
                            water,
                            lighted_courts,
                            wheelchair_accessible
                        )
                    VALUES
                        (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        location.name,
                        location.address,
                        location.phone_number,
                        location.description,
                        location.number_indoor_courts,
                        location.number_outdoor_courts,
                        location.surface,
                        location.picture_url,
                        location.locker_rooms,
                        location.restrooms,
                        location.water,
                        location.lighted_courts,
                        location.wheelchair_accessible,
                    ],
                )
                id = result.fetchone()[0]
                old_data = location.dict()
                return LocationOut(id=id, **old_data)
