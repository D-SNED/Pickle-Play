import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTournament() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [description, setDescription] = useState("");
  const [maxTeams, setMaxTeams] = useState("");
  const [reachedMax, setReachedMax] = useState(false);

  const navigate = useNavigate();

  const tournamentCategories = [
    { value: "Men's" },
    { value: "Women's" },
    { value: "Mixed" },
  ];

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleStartDateChange = (event) => {
    const value = event.target.value;
    setStartDate(value);
  };

  const handleEndDateChange = (event) => {
    const value = event.target.value;
    setEndDate(value);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleMaxTeamsChange = (event) => {
    const value = event.target.value;
    setMaxTeams(value);
  };

  const handleReachedMaxClick = () => {
    setReachedMax(!reachedMax);
  };

  const fetchLocations = async () => {
    const locationUrl = `${process.env.REACT_APP_API_HOST}/api/locations`;
    const response = await fetch(locationUrl);

    if (response.ok) {
      const data = await response.json();
      setLocations(data);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.name = name;
    data.start_date = startDate;
    data.end_date = endDate;
    data.category = category;
    data.location_id = location;
    data.description = description;
    data.max_teams = maxTeams;
    data.reached_max = reachedMax;

    const tournamentUrl = `${process.env.REACT_APP_API_HOST}/api/tournaments`;
    const fetchConfig = {
      method: "post",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(tournamentUrl, fetchConfig);
    if (response.ok) {
      navigate("/tournaments");
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-[#687F5E]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-white">
          Create Tournament
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-50 p-4"
          id="create-tournament-form"
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
              htmlFor="start-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Start Date
            </label>
            <div className="mt-2">
              <input
                onChange={handleStartDateChange}
                value={startDate}
                id="start-date"
                name="start-date"
                type="date"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="end-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              End Date
            </label>
            <div className="mt-2">
              <input
                onChange={handleEndDateChange}
                value={endDate}
                id="end-date"
                name="end-date"
                type="date"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2">
              <select
                onChange={handleCategoryChange}
                value={category}
                id="category"
                name="category"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Choose a category</option>
                {tournamentCategories.map((category) => {
                  return (
                    <option key={category.value} value={category.value}>
                      {category.value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Location
            </label>
            <div className="mt-2">
              <select
                onChange={handleLocationChange}
                value={location}
                id="location"
                name="location"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Choose Location</option>
                {locations.map((location) => {
                  return (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  );
                })}
              </select>
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
              htmlFor="max-teams"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Maximum Teams
            </label>
            <div className="mt-2">
              <input
                onChange={handleMaxTeamsChange}
                value={maxTeams}
                id="max-teams"
                name="max-teams"
                type="number"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="reached-max"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Reached Maximum?
            </label>
            <div className="mt-2">
              <div className="flex items-center mb-4">
                <input
                  onChange={handleReachedMaxClick}
                  checked={reachedMax}
                  id="reached-max"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="reached-max"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  True
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#C14533] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#d4402a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTournament;
