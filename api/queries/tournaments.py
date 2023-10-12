from pydantic import BaseModel
from datetime import date
from queries.pool import pool
from fastapi.responses import JSONResponse
from typing import List, Union


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


class Error(BaseModel):
    message: str


class TournamentRepository:
    def get_all(self) -> Union[List[TournamentOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT * FROM tournaments
                        ORDER BY id;
                        """
                    )
                    return [
                        TournamentOut(
                            id=record[0],
                            name=record[1],
                            start_date=record[2],
                            end_date=record[3],
                            category=record[4],
                            location_id=record[5],
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
                    old_data = tournament.dict()
                    return TournamentOut(id=id, **old_data)
        except Exception:
            response = JSONResponse(
                status_code=400,
                content={"message": "could not create tournament"},
            )
            return response
