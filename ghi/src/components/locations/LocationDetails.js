import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import DeleteLocationConfirm from "./DeleteLocationConfirm";

const LocationDetails = () => {
  const { locationId } = useParams();
  const [location, setLocation] = useState([]);
  const [mapError, setMapError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const Url = `${process.env.REACT_APP_API_HOST}/api/locations/${locationId}`;
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
      const deletedUrl = `${process.env.REACT_APP_API_HOST}/api/locations/${locationId}`;
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



  useEffect(() => {

    const geocoder = new window.google.maps.Geocoder();

    if (location.address) {
      geocoder.geocode({ address: location.address }, (results, status) => {
        if (status === "OK" && results[0]) {
          const { lat, lng } = results[0].geometry.location;

          try {
            const map = new window.google.maps.Map(document.getElementById("google-map"), {
              center: { lat: lat(), lng: lng() },
              zoom: 15,
            });

            new window.google.maps.Marker({
              position: { lat: lat(), lng: lng() },
              map: map,
              title: location.name,
            });
          } catch (error) {
            setMapError("Error loading the map. Please try again later.");
          }
        } else {
          setMapError("Error geocoding the address. Please check the address and try again.");
        }
      });
    }
  }, [location]);



  const {
    name,
    address,
    phone_number,
    description,
    picture_url,
    number_indoor_courts,
    number_outdoor_courts,
    surface,
    locker_rooms,
    restrooms,
    water,
    lighted_courts,
    wheelchair_accessible,
  } = location;


return (
  <div className="mx-auto w-2/3 p-4 grid grid-cols-2 grid-rows-2 gap-4">
    <div className="info-container p-4 border-0 max-w-2/3">
      <h1 className="text-6xl font-bold mb-2">{name}</h1>
      <p className="text-3xl font-semibold text-gray-600 mb-2">{address}</p>
      <p className="text-2xl font-semibold text-gray-600 mb-2">{phone_number}</p>
      <p className="text-l text-gray-600 mb-2"> {description}</p>
      <Link to="update">
        <button className="bg-green-500 text-white py-2 px-4 rounded-full mt-4 mr-6">
          Edit Location
        </button>
      </Link>
      <button
        onClick={handleDeleteClick}
        className="bg-green-500 text-white py-2 px-4 rounded-full mt-4"
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
      className="rounded-md object-cover"
    />

    <div className="w-80% h-128">
      <div id="google-map" style={{ height: "100%" }}></div>
      {mapError && <p>{mapError}</p>}
    </div>

    <div className="info-container p-4 border-0">
      <h2 className="text-3xl text-gray-600 font-bold mb-2">Amenities</h2>
      <ul className="list-disc ml-6 text-xl text-gray-600">
        <li>Surface: {surface}</li>
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
