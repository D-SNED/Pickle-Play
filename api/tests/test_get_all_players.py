from unittest import TestCase
from fastapi import status
from fastapi.testclient import TestClient
from queries.players import PlayerRepository
from main import app

client = TestClient(app)


class TestPlayerQueries(TestCase):
    def get_all(self):
        return [
            {
                "id": 1,
                "username": "ataing",
                "email": "ataing@gmail.com",
                "birthdate": "2000-08-26",
                "first_name": "Amanda",
                "last_name": "Taing",
                "phone_number": "909-123-4567",
                "profile_picture": "picture.url",
                "gender": "Female",
                "skill_level_singles": 5.00,
                "skill_level_doubles": 5.00,
                "is_admin": True,
                "emergency_contact_fullname": "Geoffrey Fong",
                "emergency_contact_phone_number": "123-456-7890"
            },
            {
                "id": 2,
                "username": "dsned",
                "email": "dsned@gmail.com",
                "birthdate": "1995-11-11",
                "first_name": "Derek",
                "last_name": "Snediker",
                "phone_number": "626-232-1211",
                "profile_picture": "picture.url",
                "gender": "Male",
                "skill_level_singles": 5.00,
                "skill_level_doubles": 5.00,
                "is_admin": False,
                "emergency_contact_fullname": "Jane Doe",
                "emergency_contact_phone_number": "121-232-3456"
            }
        ]


def test_get_all():
    # Arrange
    app.dependency_overrides[PlayerRepository] = TestPlayerQueries
    expected = [
        {
            "id": 1,
            "username": "ataing",
            "email": "ataing@gmail.com",
            "birthdate": "2000-08-26",
            "first_name": "Amanda",
            "last_name": "Taing",
            "phone_number": "909-123-4567",
            "profile_picture": "picture.url",
            "gender": "Female",
            "skill_level_singles": 5.00,
            "skill_level_doubles": 5.00,
            "is_admin": True,
            "emergency_contact_fullname": "Geoffrey Fong",
            "emergency_contact_phone_number": "123-456-7890"
        },
        {
            "id": 2,
            "username": "dsned",
            "email": "dsned@gmail.com",
            "birthdate": "1995-11-11",
            "first_name": "Derek",
            "last_name": "Snediker",
            "phone_number": "626-232-1211",
            "profile_picture": "picture.url",
            "gender": "Male",
            "skill_level_singles": 5.00,
            "skill_level_doubles": 5.00,
            "is_admin": False,
            "emergency_contact_fullname": "Jane Doe",
            "emergency_contact_phone_number": "121-232-3456"
        }
    ]

    # Act
    response = client.get("/api/players/")

    # Clean up
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == expected
