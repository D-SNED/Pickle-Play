from unittest import TestCase
from fastapi import status
from fastapi.testclient import TestClient
from queries.locations import LocationRepository
from main import app

client = TestClient(app)


class TestLocationQueries(TestCase):
    def get_all(self):
        return [
            {
                "id": 1,
                "name": "Steve Buscemi's Pickleball Park",
                "address": "123 Awesome Ave.",
                "phone_number": "406-867-5309",
                "description": "Steve's is a lovely park where you can enjoy pickleball",
                "number_indoor_courts": 5,
                "number_outdoor_courts": 2,
                "surface": "hardwood",
                "picture_url": "awardwinningphoto.url",
                "locker_rooms": False,
                "restrooms": True,
                "water": True,
                "lighted_courts": False,
                "wheelchair_accessible": True,
            },
            {
                "id": 2,
                "name": "Pickleball Palace",
                "address": "456 Cool Drive",
                "phone_number": "503-867-5309",
                "description": "The Pickleball Palace has everything you need to host "
                "your pickleball tournament",
                "number_indoor_courts": 25,
                "number_outdoor_courts": 8,
                "surface": "hardcourg",
                "picture_url": "amazingimage.url",
                "locker_rooms": True,
                "restrooms": True,
                "water": True,
                "lighted_courts": True,
                "wheelchair_accessible": True,
            },
        ]


def test_get_all():
    app.dependency_overrides[LocationRepository] = TestLocationQueries
    expected = [
        {
            "id": 1,
            "name": "Steve Buscemi's Pickleball Park",
            "address": "123 Awesome Ave.",
            "phone_number": "406-867-5309",
            "description": "Steve's is a lovely park where you can enjoy pickleball",
            "number_indoor_courts": 5,
            "number_outdoor_courts": 2,
            "surface": "hardwood",
            "picture_url": "awardwinningphoto.url",
            "locker_rooms": False,
            "restrooms": True,
            "water": True,
            "lighted_courts": False,
            "wheelchair_accessible": True,
        },
        {
            "id": 2,
            "name": "Pickleball Palace",
            "address": "456 Cool Drive",
            "phone_number": "503-867-5309",
            "description": "The Pickleball Palace has everything you need to host "
            "your pickleball tournament",
            "number_indoor_courts": 25,
            "number_outdoor_courts": 8,
            "surface": "hardcourg",
            "picture_url": "amazingimage.url",
            "locker_rooms": True,
            "restrooms": True,
            "water": True,
            "lighted_courts": True,
            "wheelchair_accessible": True,
        },
    ]

    response = client.get("/api/locations/")

    app.dependency_overrides = {}

    assert response.status_code == status.HTTP_200_OK
    assert response.json() == expected
