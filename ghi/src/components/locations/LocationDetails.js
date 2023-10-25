import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeleteLocationConfirm from "./DeleteLocationConfirm";

const LocationDetails = () => {
  const { locationId } = useParams();
  const [location, setLocation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const Url = `http://localhost:8000/api/locations/${locationId}`;
      const response = await fetch(Url);
      if (response.ok) {
        const data = await response.json();
        setLocation(data);
      }
    };

    fetchData();
  }, [locationId]);

  const deleteLocation = async () => {
    try {
      const deletedUrl = `http://localhost:8000/api/locations/${locationId}`;
      const fetchOptions = {
        method: "delete",
        credentials: "include",
      };
      const response = await fetch(deletedUrl, fetchOptions);
      console.log(response.ok)
      navigate("/locations");
    }
    catch (e) {
      console.log(e)
    }
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };


  const {
    name,
    address,
    phone_number,
    description,
    picture_url,
    number_indoor_courts,
    number_outdoor_courts,
    locker_rooms,
    restrooms,
    water,
    lighted_courts,
    wheelchair_accessible,
  } = location;


  return (
    <div className="mx-auto w-2/3 p-4">
      <div className="flex">
        <div className="info-container p-4 border-0 mx-auto max-w-2/3">
          <h1 className="text-6xl font-bold mb-2">{name}</h1>
          <p className="text-3xl font-semibold text-gray-600 mb-2">{address}</p>
          <p className="text-2xl font-semibold text-gray-600 mb-2">{phone_number}</p>
          <p className="text-l text-gray-600 mb-2"> {description}</p>
          <button
            onClick={handleDeleteClick}
            className="bg-green-500 text-white py-2 px-4 rounded-full float-left mt-4"
          >
            Delete Location
          </button>

          {showConfirmation && (
            <DeleteLocationConfirm
              onCancel={cancelDelete}
              onConfirm={deleteLocation}
            />
          )}
        </div>
        <img
          src={picture_url}
          alt="Location"
          className="w-full md:w-1/3 h-auto rounded-md md:rounded-l-md object-cover md:object-fill md:h-96 md:max-h-full mr-4"
        />
      </div>
      <hr className="border-dashed my-4" />
      <div className="info-container p-4 border-0 mx-auto max-w-2/3">
        <h2 className="text-2xl text-gray-600 font-bold mb-2">Amenities</h2>
        <ul className="list-disc ml-6 text-l text-gray-600">
          <li>Indoor Courts: {number_indoor_courts}</li>
          <li>Outdoor Courts: {number_outdoor_courts}</li>
          {locker_rooms && <li>Locker Rooms</li>}
          {restrooms && <li>Restrooms</li>}
          {water && <li>Water</li>}
          {lighted_courts && <li>Lighted Courts</li>}
          {wheelchair_accessible && <li>Wheelchair Accessible</li>}
        </ul>
      </div>


    </div>
  );
}


export default LocationDetails;
