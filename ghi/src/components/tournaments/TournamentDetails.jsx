import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Modal from "../../accounts/Modal";
import { toast } from "react-toastify";

const TournamentDetails = () => {
  const { tournament_id } = useParams();
  const [tournament, setTournament] = useState([]);
  const [teams, setTeams] = useState([]);
  const [open, setOpen] = useState(false);
  const [adminStatus, setAdminStatus] = useState("");
  const navigate = useNavigate();

  const fetchTournamentData = async () => {
    const tournamentUrl = `${process.env.REACT_APP_API_HOST}/api/tournaments/${tournament_id}`;
    const response = await fetch(tournamentUrl);
    if (response.ok) {
      const data = await response.json();
      setTournament(data);
    }
  };

  const fetchTeamData = async () => {
    const teamUrl = `${process.env.REACT_APP_API_HOST}/api/teams`;
    const response = await fetch(teamUrl);
    if (response.ok) {
      const teamData = await response.json();
      const filteredTeams = teamData.filter(
        (team) => team.tournament_id === tournament.id
      );
      setTeams(filteredTeams);
    }
  };

  const deleteTournament = async () => {
    const deleteUrl = `${process.env.REACT_APP_API_HOST}/api/tournaments/${tournament_id}`;
    const fetchConfig = {
      method: "delete",
      credentials: "include",
    };
    const response = await fetch(deleteUrl, fetchConfig);
    if (response.ok) {
      setOpen(false);
      navigate("/tournaments");
      toast("Tournament Deleted", { type: "error" });
    }
  };

  const getAdminStatus = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      setAdminStatus(data["account"]["is_admin"]);
    }
  };

  useEffect(() => {
    getAdminStatus();
    fetchTournamentData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchTeamData();
  }, [tournament]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-[#687F5E]">
      <div className="mb-10 px-8 py-6">
        <div className="px-4 sm:px-0">
          { adminStatus === true ? (
            <div className="flex justify-end">
              <Link to="update">
                <button className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
                  Edit Tournament
                </button>
              </Link>
            </div>
            ) : <br></br>
          }
          <h1 className="text-3xl text-center font-semibold leading-7 text-white">
            Tournament Details
          </h1>
        </div>
        <div className="w-3/4 mx-auto mt-6 rounded-lg border border-gray-100 bg-white p-4">
          <dl className="px-4 divide-y divide-gray-100">
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
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Tournament Capacity Met?
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {teams.length >= tournament.reached_max ? "true" : "false"}
              </dd>
            </div> */}
          </dl>
        </div>
        <div className="pt-4 font-bold text-center text-white">
          {teams.length >= tournament.max_teams ? (
            <span>
              <h3>
                Tournament Full: {teams.length}/{tournament.max_teams} Teams
              </h3>
            </span>
          ) : (
            <span>
              <h3>
                Participants: {teams.length}/{tournament.max_teams} Teams
              </h3>
              <button
                onClick={() => navigate("/teams/create")}
                className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]"
              >
                Sign Up
              </button>
            </span>
          )}
        </div>
        <div className="my-10 w-3/4 mx-auto rounded-lg border relative overflow-x-auto">
          <table className="table-fixed w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Team Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Age Bracket
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => {
                return (
                  <tr
                    key={team.id}
                    value={team.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{team.team_name}</td>
                    <td className="px-6 py-4">{team.category}</td>
                    <td className="px-6 py-4">{team.age_bracket}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        { adminStatus === true ? (
        <div className="flex justify-center m-8">
          <button
            onClick={() => setOpen(true)}
            className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]"
          >
            Delete Tournament
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
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
                    <h3 className="text-lg font-bold w-60">Confirm Delete</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-700">
                        Are you sure you want to delete this tournament?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 flex gap-4">
                <button
                  onClick={() => deleteTournament()}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  type="button"
                >
                  Delete
                </button>
                <button
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-md px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        </div>
        ) : null
        }
      </div>
    </div>
  );
};

export default TournamentDetails;
