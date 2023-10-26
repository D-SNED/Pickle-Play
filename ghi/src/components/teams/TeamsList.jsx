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
      // console.log(data)
    }
  };

  useEffect(() => {
    fetchTeams();
    fetchTournaments();
  }, []);

  return (
    <>
      <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-[#802d21]">
        Teams
      </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Category</th>
            <th>Age Bracket</th>
            <th>Tournament Name</th>
            <th>Tournament Start Date</th>
            <th>Tournament End Date</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => {
            const tournament = tournaments.find(
              (t) => t.id === team.tournament_id
            );
            return (
              <tr key={team.id} value={team.id}>
                <td>{team.team_name}</td>
                <td>{team.category}</td>
                <td>{team.age_bracket}</td>
                <td>{tournament ? tournament.name : "Unregistered"}</td>
                <td>{tournament ? tournament.start_date : "Null"}</td>
                <td>{tournament ? tournament.end_date : "Null"}</td>
                <td>
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
      <Link to="/teams/create">
        <button className="btn btn-info">Create a Team</button>
      </Link>
    </>
  );
}

export default TeamsList;
