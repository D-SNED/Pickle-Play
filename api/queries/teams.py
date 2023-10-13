from pydantic import BaseModel
from queries.pool import pool
from typing import Optional, List, Union

# from jwtdown_fastapi.authentication import Token
# from datetime import date


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


class AllTeamsOut(BaseModel):
    id: int
    category: str
    age_bracket: str
    team_name: str


# ADDING PlayerInfo Class to TeamOut to get proper shape
# class PlayerOut(BaseModel):
#     id: int
#     first_name: str
#     last_name: str
#     birthdate: date


class TeamOut(BaseModel):
    id: int
    category: str
    age_bracket: str
    team_name: str
    number_of_players: int
    player_id_1: int
    player_id_2: Optional[int]
    tournament_id: Optional[int]


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

    def create_team(self, team: TeamIn) -> TeamOut:
        try:
            # connect to the database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our INSERT statement
                    result = db.execute(
                        """
                        INSERT INTO teams
                            (
                                category,
                                age_bracket,
                                team_name,
                                number_of_players,
                                player_id_1,
                                player_id_2,
                                tournament_id
                            )
                        VALUES
                        (%s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            team.category,
                            team.age_bracket,
                            team.team_name,
                            team.number_of_players,
                            team.player_id_1,
                            team.player_id_2,
                            team.tournament_id,
                        ],
                    )
                    id = result.fetchone()[0]
                    return self.team_in_to_out(id, team)
        except Exception:
            return {"message": "Create did not work"}

    def update_team(self, team_id: int, team: TeamIn) -> Union[TeamOut, Error]:
        try:
            # connect the database
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE teams
                        SET category = %s
                        , age_bracket = %s
                        , team_name = %s
                        , number_of_players = %s
                        , player_id_1 = %s
                        , player_id_2 = %s
                        , tournament_id = %s
                        WHERE id = %s
                        RETURNING *
                        """,
                        [
                            team.category,
                            team.age_bracket,
                            team.team_name,
                            team.number_of_players,
                            team.player_id_1,
                            team.player_id_2,
                            team.tournament_id,
                            team_id,
                        ],
                    )
                    updated_team = db.fetchone()
                    return TeamOut(
                        id=updated_team[0],
                        category=updated_team[1],
                        age_bracket=updated_team[2],
                        team_name=updated_team[3],
                        number_of_players=updated_team[4],
                        player_id_1=updated_team[5],
                        player_id_2=updated_team[6],
                        tournament_id=updated_team[7]
                    )
        except Exception:
            return {"message": "Could not update that team"}

    def team_in_to_out(self, id: int, team: TeamIn):
        old_data = team.dict()
        return TeamOut(id=id, **old_data)

    def get_one(self, team_id: int) -> Optional[TeamOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , category
                            , age_bracket
                            , team_name
                            , number_of_players
                            , player_id_1
                            , player_id_2
                            , tournament_id
                            FROM teams
                            WHERE id = %s
                            """,
                        [team_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_team_out(record)
        except Exception:
            return {"message": "Could not get that specific team"}

    def record_to_team_out(self, record):
        return TeamOut(
            id=record[0],
            category=record[1],
            age_bracket=record[2],
            team_name=record[3],
            number_of_players=record[4],
            player_id_1=record[5],
            player_id_2=record[6],
            tournament_id=record[7],
        )
