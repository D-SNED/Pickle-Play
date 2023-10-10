from fastapi import APIRouter


router = APIRouter()


@router.get("/api/locations/", response_model)
