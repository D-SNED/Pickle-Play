from pydantic import BaseModel
from datetime import date
from queries.pool import pool


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
            return {"message": "invalid input!"}
