import { useState, useEffect } from "react";
import TournamentCard from "./tournament_card";

export default function TournamentList() {
  const [tournaments, setTournaments] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/tournaments");

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setTournaments(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-3xl text-center text-white">Tournaments</h1>
        <div className="px-4">
          {tournaments.map((tournament) => (
            <TournamentCard tournament={tournament} key={tournament.id} />
          ))}
        </div>
      </div>
    </>
  );
}
