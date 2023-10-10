from fastapi import APIRouter, Depends
from typing import List, Union
from queries.locations import LocationOut, LocationRepository, Error


router = APIRouter()


@router.get("/api/locations/", response_model=Union[List[LocationOut], Error])
def get_all(
    repo: LocationRepository = Depends(),
):
    return repo.get_all()
