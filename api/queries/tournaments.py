from pydantic import BaseModel
from datetime import date
from queries.pool import pool
from fastapi.responses import JSONResponse
from typing import List, Union


class LocationOut(BaseModel):
    id: int
    name: str


class TournamentIn(BaseModel):
    name: str
    start_date: date
    end_date: date
    category: str
    location_id: int
    description: str
    max_teams: int
    reached_max: bool = False


class TournamentOut(BaseModel):
    id: int
    name: str
    start_date: date
    end_date: date
    category: str
    location_id: int
    description: str
    max_teams: int
    reached_max: bool = False


class TournamentOutWithLocation(BaseModel):
    id: int
    name: str
    start_date: date
    end_date: date
    category: str
    location: LocationOut
    description: str
    max_teams: int
    reached_max: bool = False


class Error(BaseModel):
    message: str


class TournamentRepository:
    def update(
        self, tournament_id: int, tournament: TournamentIn
    ) -> Union[TournamentOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE tournaments
                        SET name = %s
                         , start_date = %s
                         , end_date = %s
                         , category = %s
                         , location_id = %s
                         , description  = %s
                         , max_teams = %s
                         , reached_max = %s
                        WHERE id = %s
                        RETURNING *
                        """,
                        [
                            tournament.name,
                            tournament.start_date,
                            tournament.end_date,
                            tournament.category,
                            tournament.location_id,
                            tournament.description,
                            tournament.max_teams,
                            tournament.reached_max,
                            tournament_id,
                        ],
                    )
                    updated_tour = db.fetchone()
                    return TournamentOut(
                        id=updated_tour[0],
                        name=updated_tour[1],
                        start_date=updated_tour[2],
                        end_date=updated_tour[3],
                        category=updated_tour[4],
                        location_id=updated_tour[5],
                        description=updated_tour[6],
                        max_teams=updated_tour[7],
                        reached_max=updated_tour[8],
                    )
        except Exception as e:
            print(e)
            response = JSONResponse(
                status_code=400,
                content={"message": "could not update tournament"},
            )
            return response

    def get_all(self) -> Union[List[TournamentOutWithLocation], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT
                        t.id,
                        t.name,
                        t.start_date,
                        t.end_date,
                        t.category,
                        t.location_id,
                        t.description,
                        t.max_teams,
                        t.reached_max,
                        l.name
                        FROM tournaments as t
                        INNER JOIN locations as l
                        ON t.location_id = l.id
                        ORDER BY id;
                        """
                    )
                    return [
                        TournamentOutWithLocation(
                            id=record[0],
                            name=record[1],
                            start_date=record[2],
                            end_date=record[3],
                            category=record[4],
                            location=LocationOut(
                                id=record[5],
                                name=record[9],
                            ),
                            description=record[6],
                            max_teams=record[7],
                            reached_max=record[8],
                        )
                        for record in db
                    ]

        except Exception as e:
            print(e)
            response = JSONResponse(
                status_code=400,
                content={"message": "could not return tournaments"},
            )
            return response

    def create(self, tournament: TournamentIn) -> TournamentOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO tournaments
                            (
                                name,
                                start_date,
                                end_date,
                                category,
                                location_id,
                                description,
                                max_teams,
                                reached_max
                            )
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            tournament.name,
                            tournament.start_date,
                            tournament.end_date,
                            tournament.category,
                            tournament.location_id,
                            tournament.description,
                            tournament.max_teams,
                            tournament.reached_max,
                        ],
                    )
                    id = result.fetchone()[0]
                    return self.tournament_in_to_out(id, tournament)

        except Exception as e:
            print(e)
            response = JSONResponse(
                status_code=400,
                content={"message": "could not create tournament"},
            )
            return response

    def tournament_in_to_out(self, id: int, tournament: TournamentIn):
        old_data = tournament.dict()
        return TournamentOut(id=id, **old_data)

    def get_specific(
        self, tournament_id: int
    ) -> Union[TournamentOutWithLocation, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                        t.id,
                        t.name,
                        t.start_date,
                        t.end_date,
                        t.category,
                        t.location_id,
                        t.description,
                        t.max_teams,
                        t.reached_max,
                        l.name
                        FROM tournaments as t
                        INNER JOIN locations as l
                        ON t.location_id = l.id
                        WHERE t.id = %s
                        ORDER BY t.id;
                        """,
                        [tournament_id],
                    )
                    record = result.fetchone()
                    print(record)
                    return TournamentOutWithLocation(
                        id=record[0],
                        name=record[1],
                        start_date=record[2],
                        end_date=record[3],
                        category=record[4],
                        location=LocationOut(
                            id=record[5],
                            name=record[9],
                        ),
                        description=record[6],
                        max_teams=record[7],
                        reached_max=record[8],
                    )
        except Exception as e:
            print(e)
            response = JSONResponse(
                status_code=400,
                content={"message": "could not find tournament"},
            )
            return response

    def delete_tournament(self, tournament_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM tournaments
                        WHERE id = %s
                        """,
                        [tournament_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False
