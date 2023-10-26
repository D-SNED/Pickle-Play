from fastapi import APIRouter, Depends, Response, HTTPException, status
from typing import List, Union, Optional
from queries.locations import (
    LocationIn,
    LocationOut,
    LocationRepository,
    Error,
    AllLocationsOut,
)
from pydantic import BaseModel
from authenticator import authenticator

router = APIRouter()


class HttpError(BaseModel):
    detail: str


# GET all locations
@router.get(
    "/api/locations", response_model=Union[List[AllLocationsOut], Error]
)
def get_all(
    repo: LocationRepository = Depends(),
):
    return repo.get_all()


# POST create new location
@router.post("/api/locations", response_model=LocationOut | HttpError)
def create_location(
    location: LocationIn,
    repo: LocationRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data["is_admin"] is True:
        return repo.create_location(location)
    else:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Cannot create a location",
        )


@router.put(
    "/api/locations/{location_id}", response_model=LocationOut | HttpError
)
def update_location(
    location_id: int,
    location: LocationIn,
    repo: LocationRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> LocationOut | HttpError:

    if account_data["is_admin"] is True:
        return repo.update_location(location_id, location)
    else:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Cannot edit location",
        )


@router.delete("/api/locations/{location_id}", response_model=bool | HttpError)
def delete_location(
    location_id: int,
    repo: LocationRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool | HttpError:
    if account_data["is_admin"] is True:
        return repo.delete_location(location_id)
    else:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Cannot delete location",
        )


@router.get(
    "/api/locations/{location_id}", response_model=Optional[LocationOut]
)
def get_location_singular(
    location_id: int,
    response: Response,
    repo: LocationRepository = Depends(),
) -> LocationOut:
    location = repo.get_singular(location_id)
    if location is None:
        response.status_code = 404
    return location
