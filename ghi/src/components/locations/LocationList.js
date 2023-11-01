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
    <div className="bg-green">
      <div className="bg-green container mx-auto">
        <div>
          <div className="flex justify-end px-10 py-6">
            <Link to={`${process.env.PUBLIC_URL}/locations/create`}>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
                  Create Location
              </button>
            </Link>
          </div>
          <h1 className="pb-4 text-5xl font-bold text-center text-[white]">Locations</h1>
        </div>
        <div className="px-4 lg:grid lg:grid-cols-3">
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
    </div>
  </>
  );
}
