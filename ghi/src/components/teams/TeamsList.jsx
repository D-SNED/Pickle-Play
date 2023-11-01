import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TeamsList() {
  const [teams, setTeams] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  // Pulling Team Data
  const fetchTeams = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/teams`);

    if (response.ok) {
      const data = await response.json();
      setTeams(data);
    }
  };

  // Pulling Tournament Data for Tournament Name
  const fetchTournaments = async () => {
    const tournamentUrl = `${process.env.REACT_APP_API_HOST}/api/tournaments`;
    const response = await fetch(tournamentUrl);

    if (response.ok) {
      const data = await response.json();
      setTournaments(data);
    }
  };

  useEffect(() => {
    fetchTeams();
    fetchTournaments();
  }, []);

  return (
    <>
      <div className="bg-green flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="pb-4 text-5xl font-bold text-center text-[white]">
          Teams
        </h1>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white text-left text-md text-gray-500">
            <thead className="text-md text-gray-700 uppercase bg-floral-white">
              <tr>
                <th scope="col" className="px-28 py-3">
                  Team Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Age Bracket
                </th>
                <th scope="col" className="px-6 py-3">
                  Tournament Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Tournament Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Tournament End Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Information
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {teams.map((team) => {
                const tournament = tournaments.find(
                  (t) => t.id === team.tournament_id
                );
                return (
                  <tr key={team.id} value={team.id}>
                    <td className="px-6 py-4">{team.team_name}</td>
                    <td className="px-6 py-4">{team.category}</td>
                    <td className="px-6 py-4">{team.age_bracket}</td>
                    <td>{tournament ? tournament.name : "Unregistered"}</td>
                    <td className="px-6 py-4">
                      {tournament ? tournament.start_date : "Null"}
                    </td>
                    <td className="px-6 py-4">
                      {tournament ? tournament.end_date : "Null"}
                    </td>
                    <td className="px-6 py-4">
                      <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
                        <Link to={`${team.id}`} className="flex items-center">
                          Details
                          <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center">
          <Link to="/teams/create">
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
              Create a Team
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TeamsList;
