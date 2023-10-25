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
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-[#802d21]">
            Update Location
        </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-50 p-4"
            id="update-location-form"
        >
            <div>
            <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Name
            </label>
            <div className="mt-2">
                <input
                onChange={handleNameChange}
                value={name}
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
            <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Address
            </label>
            <div className="mt-2">
                <input
                onChange={handleAddressChange}
                value={address}
                id="address"
                name="address"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
            <label
                htmlFor="phone-number"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Phone Number
            </label>
            <div className="mt-2">
                <input
                onChange={handlePhoneNumberChange}
                value={phoneNumber}
                id="phone-number"
                name="phone-number"
                type="tel"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
            <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Description
            </label>
            <div className="mt-2">
                <textarea
                onChange={handleDescriptionChange}
                value={description}
                id="description"
                name="description"
                type="text"
                rows="4"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
            <label
                htmlFor="number-indoor-courts"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Number of Indoor Courts
            </label>
            <div className="mt-2">
                <input
                onChange={handleNumberIndoorCourtsChange}
                value={numberIndoorCourts}
                id="number-indoor-courts"
                name="number-indoor-courts"
                type="number"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
            <label
                htmlFor="number-outdoor-courts"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Number of Outdoor Courts
            </label>
            <div className="mt-2">
                <input
                onChange={handleNumberOutdoorCourtsChange}
                value={numberOutdoorCourts}
                id="number-outdoor-courts"
                name="number-outdoor-courts"
                type="number"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
            <label
                htmlFor="surface"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Surface
            </label>
            <div className="mt-2">
                <input
                onChange={handleSurfaceChange}
                value={surface}
                id="surface"
                name="surface"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
            <label
                htmlFor="surface"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Picture URL
            </label>
            <div className="mb-4">
              <input
                value={pictureUrl}
                onChange={handlePictureUrlChange}
                required
                placeholder="Picture URL"
                type="text"
                id="Picture URL"
                name="Surface"
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            </div>
            <div>
            <label
                htmlFor="locker-rooms"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Locker Rooms
            </label>
            <div className="mt-2">
                <input
                onChange={() => setLockerRooms(!lockerRooms)}
                checked={lockerRooms}
                id="locker-rooms"
                name="locker-rooms"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
            </div>
            </div>

            <div>
            <label
                htmlFor="restrooms"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Restrooms
            </label>
            <div className="mt-2">
                <input
                onChange={() => setRestrooms(!restrooms)}
                checked={restrooms}
                id="restrooms"
                name="restrooms"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
            </div>
            </div>

            <div>
            <label
                htmlFor="water"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Water
            </label>
            <div className="mt-2">
                <input
                onChange={() => setWater(!water)}
                checked={water}
                id="water"
                name="water"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
            </div>
            </div>

            <div>
            <label
                htmlFor="lighted-courts"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Lighted Courts
            </label>
            <div className="mt-2">
                <input
                onChange={() => setLightedCourts(!lightedCourts)}
                checked={lightedCourts}
                id="lighted-courts"
                name="lighted-courts"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
            </div>
            </div>

            <div>
            <label
                htmlFor="wheelchair-accessible"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Wheelchair Accessible
            </label>
            <div className="mt-2">
                <input
                onChange={() => setWheelchairAccessible(!wheelchairAccessible)}
                checked={wheelchairAccessible}
                id="wheelchair-accessible"
                name="wheelchair-accessible"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
            </div>
            </div>

            <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#C14533] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#d4402a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Update
            </button>
            </div>
        </form>
        <div>
            <p className="mt-10 text-center text-sm text-gray-500">
            PicklePlay by GitJAACD
            </p>
        </div>
        </div>
    </div>
    );
}

export default UpdateLocation
