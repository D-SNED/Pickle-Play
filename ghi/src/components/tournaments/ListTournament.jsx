import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TournamentCard from "./TournamentCard";

export default function TournamentList() {
  const [tournaments, setTournaments] = useState([]);
  const [adminStatus, setAdminStatus] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/api/tournaments`
    );

    if (response.ok) {
      const data = await response.json();
      setTournaments(data);
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
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-[#687F5E]">
        <div className="bg-[#687F5E] container mx-auto">
          <div>
            { adminStatus === true ? (
              <div className="flex justify-end px-10 py-6">
                  <Link to="create">
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
                      Create Tournament
                    </button>
                  </Link>
              </div>
              ) : <br></br>
            }
            <h1 className="py-4 pb-4 text-6xl font-bold text-center text-white">
              Tournaments
            </h1>
            <h2 className="mx-auto w-3/4 py-8 pb-4 text-2xl font-semibold text-center text-[#FAF7EB]">
              Ready to compete? Gear up for an adrenaline-pumping showdown on the courts!
              <br></br>
              <br></br>
              Whether you're a seasoned pro or a beginner with a passion for pickleball,
              our tournaments offer the ultimate battleground to showcase your skills and sportsmanship. Don't miss your shot at glory - secure your spot now and get
              ready to score your way to pickleball greatness! Let the games begin!
            </h2>
          </div>
          <div className="px-4 py-8 mx-auto justify-items-center lg:grid lg:grid-cols-3">
            {tournaments.map((tournament) => (
              <TournamentCard tournament={tournament} key={tournament.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
