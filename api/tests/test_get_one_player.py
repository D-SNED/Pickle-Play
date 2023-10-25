from unittest import TestCase
from fastapi import status
from fastapi.testclient import TestClient
from queries.players import PlayerRepository
from main import app
from authenticator import authenticator

client = TestClient(app)


# Create mock data for player if its protected by authentication
def get_mock_player():
    return {
        "id": 1,
        "username": "test",
        "hashed_password": "password",
        "email": "test@example.com",
        "birthdate": "1993-01-01",
        "first_name": "Boo",
        "last_name": "Ba",
        "phone_number": "1234567890",
        "profile_picture": "something",
        "gender": "other",
        "skill_level_singles": 4.00,
        "skill_level_doubles": 4.00,
        "is_admin": False,
        "emergency_contact_fullname": "test",
        "emergency_contact_phone_number": "1234567890",
    }


# Arrange: setting up dependendies and input data.
class TestPlayerQueries(TestCase):
    def test_get_all_players(self):
        return []

    def get_one_self(self, player_id):
        return {
            "id": player_id,
            "username": "test",
            "email": "test@example.com",
            "birthdate": "1993-01-01",
            "first_name": "Boo",
            "last_name": "Ba",
            "phone_number": "1234567890",
            "profile_picture": "something",
            "gender": "other",
            "skill_level_singles": 4.00,
            "skill_level_doubles": 4.00,
            "is_admin": False,
            "emergency_contact_fullname": "test",
            "emergency_contact_phone_number": "1234567890",
        }

    def get_one(self, player_id):
        return {
            "id": player_id,
            "username": "test2",
            "email": "test2@example.com",
            "birthdate": "1993-02-02",
            "first_name": "Ba",
            "last_name": "Boo",
            "phone_number": "0987654321",
            "profile_picture": "something else",
            "gender": "male",
            "skill_level_singles": 3.00,
            "skill_level_doubles": 3.00,
            "is_admin": False,
            "emergency_contact_fullname": "test",
            "emergency_contact_phone_number": "1234567890",
        }


# Act: calling the code with overridden dependencies.
def test_get_one_player():
    app.dependency_overrides[PlayerRepository] = TestPlayerQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = get_mock_player
    # Make sure to label id with int
    player_id = 1
    response = client.get(f"/api/players/{player_id}")

    # Clean up
    app.dependency_overrides = {}

    # Assert: verifying the expected output.
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {
        "id": player_id,
        "username": "test",
        "email": "test@example.com",
        "birthdate": "1993-01-01",
        "first_name": "Boo",
        "last_name": "Ba",
        "phone_number": "1234567890",
        "profile_picture": "something",
        "gender": "other",
        "skill_level_singles": 4.00,
        "skill_level_doubles": 4.00,
        "is_admin": False,
        "emergency_contact_fullname": "test",
        "emergency_contact_phone_number": "1234567890",
    }
