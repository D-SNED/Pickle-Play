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
    def update_location(
        self, location_id: int, location: LocationIn
    ) -> Union[LocationOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE locations
                        SET name = %s
                            , address = %s
                            , phone_number = %s
                            , description = %s
                            , number_indoor_courts = %s
                            , number_outdoor_courts = %s
                            , surface = %s
                            , picture_url = %s
                            , locker_rooms = %s
                            , restrooms = %s
                            , water = %s
                            , lighted_courts = %s
                            , wheelchair_accessible = %s
                        WHERE id = %s
                        RETURNING *
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
                            location_id,
                        ],
                    )
                    updated_location = db.fetchone()
                    return LocationOut(
                        id=updated_location[0],
                        name=updated_location[1],
                        address=updated_location[2],
                        phone_number=updated_location[3],
                        description=updated_location[4],
                        number_indoor_courts=updated_location[5],
                        number_outdoor_courts=updated_location[6],
                        surface=updated_location[7],
                        picture_url=updated_location[8],
                        locker_rooms=updated_location[9],
                        restrooms=updated_location[10],
                        water=updated_location[11],
                        lighted_courts=updated_location[12],
                        wheelchair_accessible=updated_location[13]
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not update that location"}

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

    def location_in_to_out(self, id: int, location: LocationIn):
        old_data = location.dict()
        return LocationOut(id=id, **old_data)

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
