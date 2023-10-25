import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const [locations, setLocations] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/locations`);

    if (response.ok) {
      const data = await response.json();
      setLocations(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl text-center text-white">Locations</h1>
        <Link to={`${process.env.PUBLIC_URL}/locations/create`}>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 mr-4 float-right">
            Create New Location
          </button>
        </Link>
        <div className="grid grid-cols-3 gap-4 px-4">
          {locations.map((location) => (
            <LocationCard
              name={location.name}
              address={location.address}
              pictureUrl={location.picture_url}
              locationId={location.id}
              key={location.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
