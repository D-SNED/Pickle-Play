import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Modal from "../../accounts/Modal";
import { toast } from "react-toastify";


const LocationDetails = () => {
  const { locationId } = useParams();
  const [location, setLocation] = useState([]);
  const [mapError, setMapError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
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
      if (response.ok) {
        setShowConfirmation(false);
        toast("Location Deleted");
        navigate("/locations");
      }

    }
    catch (e) {
      console.log(e)
    }
  };

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
          const infoContainer = document.querySelector('.info-container');
          const googleMap = document.querySelector('#google-map');
          infoContainer.style.zIndex = 2;
          googleMap.style.zIndex = 1;
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
  <div className="bg-green">
    <div className="mx-auto w-2/3 p-4 grid grid-cols-2 grid-rows-2 gap-4">
      <div className="info-container p-4 border-0 max-w-2/3">
        <h1 className="text-6xl font-bold mb-2 text-white">{name}</h1>
        <p className="text-3xl font-semibold text-gray-600 mb-2 text-white">{address}</p>
        <p className="text-2xl font-semibold text-gray-600 mb-2 text-white">{phone_number}</p>
        <p className="text-l text-gray-600 mb-2 text-white"> {description}</p>
        <Link to="update">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a] mr-2">
            Edit Location
          </button>
        </Link>
        <button
          onClick={handleDeleteClick}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
          Delete Location
        </button>
         <Modal open={showConfirmation} onClose={() => setShowConfirmation(false)}>
          <div>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    width="64px"
                    height="64px"
                    className="h-6 w-6 text-red-600"
                    stroke="currentColor #ef4444"
                    fill="none"
                    viewBox="0 0 24.00 24.00"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="0.45600000000000007"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                        fill="#ef4444"
                      ></path>
                      <path
                        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                        fill="#ef4444"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.2944 4.47643C9.36631 3.11493 10.5018 2.25 12 2.25C13.4981 2.25 14.6336 3.11493 15.7056 4.47643C16.7598 5.81544 17.8769 7.79622 19.3063 10.3305L19.7418 11.1027C20.9234 13.1976 21.8566 14.8523 22.3468 16.1804C22.8478 17.5376 22.9668 18.7699 22.209 19.8569C21.4736 20.9118 20.2466 21.3434 18.6991 21.5471C17.1576 21.75 15.0845 21.75 12.4248 21.75H11.5752C8.91552 21.75 6.84239 21.75 5.30082 21.5471C3.75331 21.3434 2.52637 20.9118 1.79099 19.8569C1.03318 18.7699 1.15218 17.5376 1.65314 16.1804C2.14334 14.8523 3.07658 13.1977 4.25818 11.1027L4.69361 10.3307C6.123 7.79629 7.24019 5.81547 8.2944 4.47643ZM9.47297 5.40432C8.49896 6.64148 7.43704 8.51988 5.96495 11.1299L5.60129 11.7747C4.37507 13.9488 3.50368 15.4986 3.06034 16.6998C2.6227 17.8855 2.68338 18.5141 3.02148 18.9991C3.38202 19.5163 4.05873 19.8706 5.49659 20.0599C6.92858 20.2484 8.9026 20.25 11.6363 20.25H12.3636C15.0974 20.25 17.0714 20.2484 18.5034 20.0599C19.9412 19.8706 20.6179 19.5163 20.9785 18.9991C21.3166 18.5141 21.3773 17.8855 20.9396 16.6998C20.4963 15.4986 19.6249 13.9488 18.3987 11.7747L18.035 11.1299C16.5629 8.51987 15.501 6.64148 14.527 5.40431C13.562 4.17865 12.8126 3.75 12 3.75C11.1874 3.75 10.4379 4.17865 9.47297 5.40432Z"
                        fill="#ef4444"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg font-bold w-60">
                    Confirm Delete
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-700">
                      Are you sure you want to delete this location?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3 flex gap-4">
              <button
                onClick={() => deleteLocation(locationId)}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                type="button"
              >
                Delete
              </button>
              <button
                onClick={cancelDelete}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-md px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <img
        src={picture_url}
        alt="Location"
        className="rounded-md object-cover"
      />

      <div className="w-80% h-128">
        <div id="google-map" style={{ height: "100%" }}></div>
        {mapError && <p className="text-white">{mapError}</p>}
      </div>

      <div className="info-container p-4 border-0">
        <h2 className="text-3xl text-gray-600 font-bold mb-2 text-white">Amenities</h2>
        <ul className="list-disc ml-6 text-xl text-gray-600 text-white">
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
  </div>
);

}


export default LocationDetails;
