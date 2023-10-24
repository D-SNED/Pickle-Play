import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TournamentCard from "./TournamentCard";

export default function TournamentList() {
  const [tournaments, setTournaments] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/tournaments");

    if (response.ok) {
      const data = await response.json();
      setTournaments(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="flex justify-end px-10 py-6">
            <Link to="create">
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
                Create Tournament
              </button>
            </Link>
          </div>
          <h1 className="pb-4 text-5xl font-bold text-center text-[#C14533]">
            Tournaments
          </h1>
        </div>
        <div className="px-4 lg:grid lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <TournamentCard tournament={tournament} key={tournament.id} />
          ))}
        </div>
      </div>
    </>
  );
}
