import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateTournament() {
  const { tournament_id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [description, setDescription] = useState("");
  const [maxTeams, setMaxTeams] = useState("");
  const [reachedMax, setReachedMax] = useState(false);

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
    const locationUrl = "http://localhost:8000/api/locations/";
    const response = await fetch(locationUrl);

    if (response.ok) {
      const locationData = await response.json();
      setLocations(locationData);
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

    const tournamentUrl = `http://localhost:8000/api/tournaments/${tournament_id}`;
    const fetchConfig = {
      method: "put",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(tournamentUrl, fetchConfig);

    if (response.ok) {
      setName("");
      setStartDate("");
      setEndDate("");
      setCategory("");
      setLocation("");
      setDescription("");
      setMaxTeams("");
      setReachedMax(false);
    }
    navigate(-1);
  };

  useEffect(() => {
    fetchLocations();
    const fetchTournamentData = async () => {
      const tournamentUrl = `http://localhost:8000/api/tournaments/${tournament_id}`;
      const response = await fetch(tournamentUrl);
      if (response.ok) {
        const tournamentData = await response.json();

        setName(tournamentData.name);
        setStartDate(tournamentData.start_date);
        setEndDate(tournamentData.end_date);
        setCategory(tournamentData.category);
        setLocation(tournamentData.location.name);
        setDescription(tournamentData.description);
        setMaxTeams(tournamentData.max_teams);
        setReachedMax(tournamentData.reached_max);
      }
    };
    fetchTournamentData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-[#802d21]">
          Update Tournament
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-50 p-4"
          id="update-tournament-form"
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
              <input
                onChange={handleCategoryChange}
                value={category}
                id="category"
                name="category"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
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
                  id="true-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="true-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  True
                </label>
              </div>
            </div>
          </div>
          <div>
            {/* <Link to="/tournaments"> */}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#C14533] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#d4402a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
            {/* </Link> */}
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

export default UpdateTournament;
