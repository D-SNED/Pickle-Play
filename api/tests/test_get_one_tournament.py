from unittest import TestCase
from fastapi import status
from fastapi.testclient import TestClient
from queries.tournaments import TournamentRepository
from main import app


client = TestClient(app)


class TestTournamentQueries(TestCase):
    def get_specific(self, tournament_id):
        return {
            "id": tournament_id,
            "name": "test",
            "start_date": "2023-01-01",
            "end_date": "2023-01-01",
            "category": "open",
            "location": {
                "id": 1,
                "name": "test",
                "picture_url": "something",
            },
            "description": "description",
            "max_teams": 16,
            "reached_max": False,
        }


def test_get_one_tournament():
    app.dependency_overrides[TournamentRepository] = TestTournamentQueries
    tournament_id = 1
    response = client.get(f"api/tournaments/{tournament_id}")

    app.dependency_overrides = {}

    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {
        "id": tournament_id,
        "name": "test",
        "start_date": "2023-01-01",
        "end_date": "2023-01-01",
        "category": "open",
        "location": {
            "id": 1,
            "name": "test",
            "picture_url": "something",
        },
        "description": "description",
        "max_teams": 16,
        "reached_max": False,
    }
