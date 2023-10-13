from fastapi import APIRouter, Depends
from typing import List, Union
from queries.locations import (
    LocationIn,
    LocationOut,
    LocationRepository,
    Error,
    AllLocationsOut,
)


router = APIRouter()


# GET all locations
@router.get(
    "/api/locations/", response_model=Union[List[AllLocationsOut], Error]
)
def get_all(
    repo: LocationRepository = Depends(),
):
    return repo.get_all()


# POST create new location
@router.post("/api/locations/", response_model=Union[LocationOut, Error])
def create_location(
    location: LocationIn,
    repo: LocationRepository = Depends(),
):
    return repo.create_location(location)
