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


class AllTeamsOut(BaseModel):
    id: int
    category: str
    age_bracket: str
    team_name: str
    # number_of_players: int
    # player_id_1: int
    # player_id_2: Optional[int]
    # tournament_id: Optional[int]


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
                # Return new data
                old_data = team.dict()
                return TeamOut(id=id, **old_data)
                # above line looks like:
                # `return TeamOut(
                #           id=id, category=old_data["category"],
                #           age_bracket=old_data["age_bracket"], ...
                #           )`
