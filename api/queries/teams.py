from pydantic import BaseModel
from queries.pool import pool
from typing import Optional, List, Union
from datetime import date


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
    tournament_id: Optional[int]


# ADDING PlayerOut Class to SpecificTeamOut to get proper shape
# for GET specific team endpoint
class PlayerOut(BaseModel):
    id: int
    first_name: Optional[str]
    last_name: Optional[str]
    birthdate: date
    gender: Optional[str]
    skill_level_singles: Optional[float]
    skill_level_doubles: Optional[float]


# ADDING TournamentOut Class to SpecificTeamOut
# to get proper shape for GET specific team endpoint
class TournamentOut(BaseModel):
    id: int
    name: str


# SpecificTeamOutClass
class SpecificTeamOut(BaseModel):
    id: int
    category: str
    age_bracket: str
    team_name: str
    number_of_players: int
    player_id_1: PlayerOut
    player_id_2: Optional[PlayerOut]
    tournament_id: Optional[TournamentOut]


# TeamOut class
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
    def get_all(self) -> Union[Error, List[AllTeamsOut]]:
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
            with pool.connection() as conn:
                with conn.cursor() as db:
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
            with pool.connection() as conn:
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
        except Exception as e:
            print(e)
            return {"message": "Could not update that team"}

    def team_in_to_out(self, id: int, team: TeamIn):
        old_data = team.dict()
        return TeamOut(id=id, **old_data)

    def get_one(self, team_id: int) -> Optional[SpecificTeamOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            t.id,
                            t.category,
                            t.age_bracket,
                            t.team_name,
                            t.number_of_players,
                            t.player_id_1,
                            p.id,
                            p.first_name,
                            p.last_name,
                            p.birthdate,
                            p.gender,
                            p.skill_level_singles,
                            p.skill_level_doubles,
                            t.player_id_2,
                            z.id,
                            z.first_name,
                            z.last_name,
                            z.birthdate,
                            z.gender,
                            z.skill_level_singles,
                            z.skill_level_doubles,
                            t.tournament_id,
                            tn.id,
                            tn.name
                            FROM teams as t
                            INNER JOIN players as p
                            ON t.player_id_1 = p.id
                            LEFT JOIN players as z
                            ON t.player_id_2 = z.id
                            LEFT JOIN tournaments as tn
                            ON tn.id = t.tournament_id
                            WHERE t.id = %s
                            ORDER BY t.id
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
        player_id_1 = PlayerOut(
            id=record[6],
            first_name=record[7],
            last_name=record[8],
            birthdate=record[9],
            gender=record[10],
            skill_level_singles=record[11],
            skill_level_doubles=record[12]
        )

        if record[13] is not None:
            player_id_2 = PlayerOut(
                id=record[14],
                first_name=record[15],
                last_name=record[16],
                birthdate=record[17],
                gender=record[18],
                skill_level_singles=record[19],
                skill_level_doubles=record[20]
            )
        else:
            player_id_2 = None

        if record[21] is not None:
            tournament_id = TournamentOut(
                id=record[22],
                name=record[23]
            )
        else:
            tournament_id = None

        return SpecificTeamOut(
            id=record[0],
            category=record[1],
            age_bracket=record[2],
            team_name=record[3],
            number_of_players=record[4],
            player_id_1=player_id_1,
            player_id_2=player_id_2,
            tournament_id=tournament_id,
        )

    def delete(self, team_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM teams
                        WHERE id =%s
                        """,
                        [team_id]
                    )
                    return True
        except Exception:
            return False
    # deleting something that is not there returns success in HTTP
