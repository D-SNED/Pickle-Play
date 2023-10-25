import { useState, useEffect } from "react";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const [locations, setLocations] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/locations");

    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
        <div className="grid grid-cols-3 gap-4 px-4">
          {locations.map((location) => (
            <LocationCard
              name={location.name}
              address={location.address}
              pictureUrl={location.picture_url}

              key={location.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
