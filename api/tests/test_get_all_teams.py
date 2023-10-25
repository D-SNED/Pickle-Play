from unittest import TestCase
from fastapi import status
from fastapi.testclient import TestClient
from queries.teams import TeamRepository
from main import app

client = TestClient(app)


class TestTeamQueries(TestCase):
    def get_all(self):
        return [
            {
                "id": 1,
                "category": "Mens Singles",
                "age_bracket": "Adult",
                "team_name": "Winners Club",
                "number_of_players": "1",
                "player_id_1": "1",
                "player_id_2": "null",
                "tournament_id": "1"
            },
            {
                "id": 2,
                "category": "Mixed Doubles",
                "age_bracket": "Adult",
                "team_name": "Double Up",
                "number_of_players": "2",
                "player_id_1": "1",
                "player_id_2": "2",
                "tournament_id": "1"
            }
        ]


def test_get_all():
    # Arrange
    app.dependency_overrides[TeamRepository] = TestTeamQueries
    expected = [
            {
                "id": 1,
                "category": "Mens Singles",
                "age_bracket": "Adult",
                "team_name": "Winners Club",
            },
            {
                "id": 2,
                "category": "Mixed Doubles",
                "age_bracket": "Adult",
                "team_name": "Double Up",
            }
        ]

    # Act
    response = client.get("/api/teams/")

    # Clean up
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == expected
