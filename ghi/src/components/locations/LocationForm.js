import React, { useState } from "react";

function LocationForm() {
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
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    const locationUrl = `${process.env.REACT_APP_API_HOST}/api/locations`;
    const fetchOptions = {
      method: "post",
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
      setIsSubmitted(true);
    }
  };

  return (
    <div className="my-5 container mx-auto">
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold mb-4">Submit a New Location</h1>
          <form onSubmit={handleSubmit} id="add-location-form">
            <div className="mb-4">
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
              <input
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                placeholder="Phone Number"
                type="text"
                id="Phone Number"
                name="Phone Number"
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-4">
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
              <input
                value={surface}
                onChange={handleSurfaceChange}
                required
                placeholder="Surface"
                type="text"
                id="Surface"
                name="Surface"
                className="w-full py-2 px-3 border rounded-md"
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Amenities
              </label>

              <div className="mb-4 relative">
                <input
                  value={numberIndoorCourts}
                  onChange={handleNumberIndoorCourtsChange}
                  required
                  type="number"
                  id="NumberIndoorCourts"
                  name="NumberIndoorCourts"
                  placeholder=" "
                  className="w-full py-6 px-3 border rounded-md"
                />
                <label
                  htmlFor="NumberIndoorCourts"
                  className="absolute top-1 left-3 text-gray-700 text-sm font"
                >
                  Number of Indoor Courts
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  value={numberOutdoorCourts}
                  onChange={handleNumberOutdoorCourtsChange}
                  required
                  type="number"
                  id="NumberOutdoorCourts"
                  name="NumberOutdoorCourts"
                  placeholder=" "
                  className="w-full py-6 px-3 border rounded-md"
                />
                <label
                  htmlFor="NumberOutdoorCourts"
                  className="absolute top-1 left-3 text-gray-700 text-sm font"
                >
                  Number of Outdoor Courts
                </label>
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
                  <label htmlFor="LockerRooms" className="text-sm">
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
                  <label htmlFor="Restrooms" className="text-sm">
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
                  <label htmlFor="Water" className="text-sm">
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
                  <label htmlFor="LightedCourts" className="text-sm">
                    Lighted Courts
                  </label>
                </div>
                <div className="mb-2">
                  <input
                    type="checkbox"
                    checked={wheelchairAccessible}
                    onChange={() =>
                      setWheelchairAccessible(!wheelchairAccessible)
                    }
                    id="WheelchairAccessible"
                    className="mr-2"
                  />
                  <label htmlFor="WheelchairAccessible" className="text-sm">
                    Wheelchair Accessible
                  </label>
                </div>
              </div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Add Location
            </button>
            {isSubmitted && (
              <div className="bg-green-200 py-2 px-4 rounded-md mt-2">
                <p>Location Added</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LocationForm;
