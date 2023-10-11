from pydantic import BaseModel
from queries.pool import pool
from typing import Optional, List, Union


class DuplicateUserError(ValueError):
    pass


class Error(BaseModel):
    message: str


class TeamIn(BaseModel):
    category: str
    age_bracket: str
    team_name: str
    number_of_players: int
    player_id_1: int
    player_id_2: Optional[int]
    tournament_id: Optional[int]


class TeamOut(BaseModel):
    id: int
    category: str
    age_bracket: str
    team_name: str
    # number_of_players: int
    # player_id_1: int
    # player_id_2: Optional[int]
    # tournament_id: Optional[int]


class TeamRepository:
    def get_all(self) -> Union[Error, List[TeamOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT *
                        FROM Teams
                        ORDER BY id;
                        """
                    )
                    return [
                        TeamOut(
                            id=record[0],
                            category=record[1],
                            age_bracket=record[2],
                            team_name=record[3],
                            number_of_players=record[4],
                            player_id_1=record[5],
                            player_id_2=record[6],
                            tournament_id=record[7],
                        )
                        for record in db
                    ]

        except Exception:
            return {"message": "Could not get all Teams"}
