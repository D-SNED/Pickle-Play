import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const TournamentDetails = () => {
  const { tournament_id } = useParams();
  const [tournament, setTournament] = useState([]);
  const navigate = useNavigate();

  const fetchTournamentData = async () => {
    const tournamentUrl = `http://localhost:8000/api/tournaments/${tournament_id}`;
    const response = await fetch(tournamentUrl);
    if (response.ok) {
      const data = await response.json();
      setTournament(data);
    }
  };

  const deleteTournament = async () => {
    const deleteUrl = `http://localhost:8000/api/tournaments/${tournament_id}`;
    const fetchConfig = {
      method: "delete",
      credentials: "include",
    };
    const response = await fetch(deleteUrl, fetchConfig);
    console.log(response.ok);
    navigate("/tournaments");
  };

  useEffect(() => {
    fetchTournamentData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-8 py-6">
      <div className="px-4 sm:px-0">
        <div className="flex justify-end">
          <Link to="update">
            <button className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
              Edit Tournament
            </button>
          </Link>
        </div>
        <h1 className="text-3xl text-center font-semibold leading-7 text-gray-900">
          Tournament Details
        </h1>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Tournament Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {tournament.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Date(s)
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {tournament.start_date} / {tournament.end_date}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Location
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {tournament.location?.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {tournament.location?.address}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Category
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {tournament.category}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {tournament.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Maximum Teams
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {tournament.max_teams}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Tournament Capacity Met?
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {tournament.reached_max ? "true" : "false"}
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex justify-center m-8">
        <button
          onClick={() => deleteTournament()}
          className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]"
        >
          Delete Tournament
        </button>
      </div>
    </div>
  );
};

export default TournamentDetails;