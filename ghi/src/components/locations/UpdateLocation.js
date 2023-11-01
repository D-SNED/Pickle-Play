import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateLocation() {
    const { locationId } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [description, setDescription] = useState("");
    const [numberIndoorCourts, setNumberIndoorCourts] = useState(0);
    const [numberOutdoorCourts, setNumberOutdoorCourts] = useState(0);
    const [surface, setSurface] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [lockerRooms, setLockerRooms] = useState(false);
    const [restrooms, setRestrooms] = useState(false);
    const [water, setWater] = useState(false);
    const [lightedCourts, setLightedCourts] = useState(false);
    const [wheelchairAccessible, setWheelchairAccessible] = useState(false);

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    };

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    };

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    };

    const handleNumberIndoorCourtsChange = (event) => {
        const value = event.target.value;
        setNumberIndoorCourts(value);
    };

    const handleNumberOutdoorCourtsChange = (event) => {
        const value = event.target.value;
        setNumberOutdoorCourts(value);
    };

    const handleSurfaceChange = (event) => {
        const value = event.target.value;
        setSurface(value);
    };

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const locationData = {};
        locationData.name = name;
        locationData.address = address;
        locationData.phone_number = phoneNumber;
        locationData.description = description;
        locationData.number_indoor_courts = parseInt(numberIndoorCourts);
        locationData.number_outdoor_courts = parseInt(numberOutdoorCourts);
        locationData.surface = surface;
        locationData.picture_url = pictureUrl;
        locationData.locker_rooms = lockerRooms;
        locationData.restrooms = restrooms;
        locationData.water = water;
        locationData.lighted_courts = lightedCourts;
        locationData.wheelchair_accessible = wheelchairAccessible;

        const locationUrl = `${process.env.REACT_APP_API_HOST}/api/locations/${locationId}`;
        const fetchOptions = {
            method: "put",
            credentials: "include",
            body: JSON.stringify(locationData),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(locationUrl, fetchOptions);

        if (response.ok) {
        setName("");
        setAddress("");
        setPhoneNumber("");
        setDescription("");
        setNumberIndoorCourts(0);
        setNumberOutdoorCourts(0);
        setSurface("");
        setPictureUrl("");
        setLockerRooms(false);
        setRestrooms(false);
        setWater(false);
        setLightedCourts(false);
        setWheelchairAccessible(false);
        }
        navigate(-1);
    };

    useEffect(() => {
        const fetchLocationData = async () => {
            const locationUrl = `${process.env.REACT_APP_API_HOST}/api/locations/${locationId}`;
            const response = await fetch(locationUrl);
            if (response.ok) {
                const locationData = await response.json();

                setName(locationData.name);
                setAddress(locationData.address);
                setPhoneNumber(locationData.phone_number);
                setDescription(locationData.description);
                setNumberIndoorCourts(locationData.number_indoor_courts);
                setNumberOutdoorCourts(locationData.number_outdoor_courts);
                setSurface(locationData.surface);
                setPictureUrl(locationData.picture_url);
                setLockerRooms(locationData.locker_rooms);
                setRestrooms(locationData.restrooms);
                setWater(locationData.water);
                setLightedCourts(locationData.lighted_courts);
                setWheelchairAccessible(locationData.wheelchair_accessible);
            }
        };
        fetchLocationData();
    }, [locationId]);
  return (
    <div className="bg-green min-h-screen flex flex-col">
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12">
          <h1 className="mb-8 text-3xl text-center">Update Location</h1>
          <form onSubmit={handleSubmit} id="add-location-form">
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="Name">
                Name
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                required
                placeholder="Name"
                type="text"
                id="Name"
                name="Name"
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="Address">
                Address
              </label>
              <input
                value={address}
                onChange={handleAddressChange}
                required
                placeholder="Address"
                type="text"
                id="Address"
                name="Address"
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="PhoneNumber">
                Phone Number
              </label>
              <input
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                placeholder="Phone Number"
                type="text"
                id="PhoneNumber"
                name="PhoneNumber"
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="Description">
                Description
              </label>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                required
                placeholder="Description"
                id="Description"
                name="Description"
                className="w-full py-2 px-3 border rounded-md"
                rows={4}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="Surface">
                Playing Surface
              </label>
              <input
                value={surface}
                onChange={handleSurfaceChange}
                required
                placeholder="Playing Surface"
                type="text"
                id="Surface"
                name="PlayingSurface"
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="PictureURL">
                Picture URL
              </label>
              <input
                value={pictureUrl}
                onChange={handlePictureUrlChange}
                required
                placeholder="Picture URL"
                type="text"
                id="PictureURL"
                name="PictureURL"
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="NumberIndoorCourts">
                Number of Indoor Courts
              </label>
              <input
                value={numberIndoorCourts}
                onChange={handleNumberIndoorCourtsChange}
                required
                type="number"
                id="NumberIndoorCourts"
                name="NumberIndoorCourts"
                placeholder=" "
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="NumberOutdoorCourts">
                Number of Outdoor Courts
              </label>
              <input
                value={numberOutdoorCourts}
                onChange={handleNumberOutdoorCourtsChange}
                required
                type="number"
                id="NumberOutdoorCourts"
                name="NumberOutdoorCourts"
                placeholder=" "
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="border rounded-md p-3">
              <div className="mb-2">
                <input
                  type="checkbox"
                  checked={lockerRooms}
                  onChange={() => setLockerRooms(!lockerRooms)}
                  id="LockerRooms"
                  className="mr-2"
                />
                <label
                  htmlFor="LockerRooms"
                  className="text-sm text-gray-700 font"
                >
                  Locker Rooms
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="checkbox"
                  checked={restrooms}
                  onChange={() => setRestrooms(!restrooms)}
                  id="Restrooms"
                  className="mr-2"
                />
                <label
                  htmlFor="Restrooms"
                  className="text-sm text-gray-700 font"
                >
                  Restrooms
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="checkbox"
                  checked={water}
                  onChange={() => setWater(!water)}
                  id="Water"
                  className="mr-2"
                />
                <label
                  htmlFor="Water"
                  className="text-sm text-gray-700 font"
                >
                  Water
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="checkbox"
                  checked={lightedCourts}
                  onChange={() => setLightedCourts(!lightedCourts)}
                  id="LightedCourts"
                  className="mr-2"
                />
                <label
                  htmlFor="LightedCourts"
                  className="text-sm text-gray-700 font"
                >
                  Lighted Courts
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="checkbox"
                  checked={wheelchairAccessible}
                  onChange={() => setWheelchairAccessible(!wheelchairAccessible)}
                  id="WheelchairAccessible"
                  className="mr-2"
                />
                <label
                  htmlFor="WheelchairAccessible"
                  className="text-sm text-gray-700 font"
                >
                  Wheelchair Accessible
                </label>
              </div>
            </div>
            <button
              type="submit"
              value="Register"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Update Location
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateLocation
