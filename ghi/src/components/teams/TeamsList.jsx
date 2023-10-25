import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TeamsList() {
  const [teams, setTeams] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  // Pulling Team Data
  const fetchTeams = async () => {
    const response = await fetch("http://localhost:8000/api/teams/");

    if (response.ok) {
      const data = await response.json();
      setTeams(data);
    }
  };

  // Pulling Tournament Data for Tournament Name
  const fetchTournaments = async () => {
    const tournamentUrl = "http://localhost:8000/api/tournaments";
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
      <h1>Teams</h1>
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
            const tournament = tournaments.find(t => t.id === team.tournament_id);
            return (
              <tr key={team.id} value={team.id}>
                <td>{team.team_name}</td>
                <td>{team.category}</td>
                <td>{team.age_bracket}</td>
                <td>{tournament ? tournament.name : "Unregistered"}</td>
                <td>{tournament ? tournament.start_date : "Null"}</td>
                <td>{tournament ? tournament.end_date : "Null"}</td>
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
