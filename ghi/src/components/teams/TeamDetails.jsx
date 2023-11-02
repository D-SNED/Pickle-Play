import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "../../accounts/Modal";

// Team Details
const TeamDetails = () => {
    const { team_id } = useParams();
    const [team, setTeam] = useState([]);
    const [playerId, setPlayerId] = useState("");
    const { token } = useToken();
    const navigate = useNavigate();

    // DeleteTeamConfirmationPrompt
    const [open, setOpen] = useState(false);

    // Player Data
    const [players, setPlayers] = useState([]);

    // Tournament Data
    const [tournaments, setTournaments] = useState([]);

    const getPlayerId = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setPlayerId(data["account"]["id"]);
      }
    };

    // Fetch TeamDetails
    const fetchTeamData = async () => {
    const teamUrl = `${process.env.REACT_APP_API_HOST}/api/teams/${team_id}`;
    const response = await fetch(teamUrl);
    if (response.ok) {
        const data = await response.json();
        setTeam(data);
    }
    };

    // Fetch Player Data
    const fetchPlayerData = async () => {
    const playerUrl = `${process.env.REACT_APP_API_HOST}/api/players`;
    const response = await fetch(playerUrl);
    if (response.ok) {
        const data = await response.json();
        setPlayers(data);
    }
    };

    // Fetch Tournament Data
    const fetchTournamentData = async () => {
    const tournamentUrl = `${process.env.REACT_APP_API_HOST}/api/tournaments`;
    const response = await fetch(tournamentUrl);
    if (response.ok) {
        const data = await response.json();
        setTournaments(data);
    }
    };

    const deleteTeam = async () => {
    const deleteUrl = `${process.env.REACT_APP_API_HOST}/api/teams/${team_id}`;
    const fetchConfig = {
        method: "delete",
        credentials: "include",
    };
    const response = await fetch(deleteUrl, fetchConfig);
    console.log(response.ok);

    // Added for DeletePrompt
    if (response.ok) {
        setOpen(false);
        navigate("/teams");
    }
    // end of additions
    toast("Team Deleted Successfully!");
    navigate("/teams");
    };

    useEffect(() => {
    getPlayerId();
    fetchTeamData();
    fetchTournamentData();
    fetchPlayerData();
    }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <>
        <section className="relative py-16 top-auto bg-green">
          <div className="px-4 sm:px-20">
            <h1 className="pb-4 text-5xl font-bold text-center text-[white]">
              Team Details
            </h1>
          </div>

          <div className="container mx-auto px-20">
            <div
              className="w-full border-collapse bg-white text-center text-md text-gray-500 rounded-lg"
              style={{ margin: "2rem 0" }}
            >
              <dl className="divide-y divide-gray-100">
                  <div>
                    <h2 className="text-5xl font-bold text-center text-[#C14533] relative py-8 bg-floral-white rounded-lg">
                      {" "}
                      {team.team_name}{" "}
                    </h2>
                  </div>
                {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Team Name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.team_name}
                  </dd>
                </div> */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Category
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.category}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Age Bracket
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.age_bracket}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Number Of Players
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.number_of_players}
                  </dd>
                </div>

                {/* Player 1 */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Player One
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.player_id_1 && (
                      <div>
                        {players.map((player) => {
                          if (
                            player.id === team.player_id_1?.id
                          ) {
                            return (
                              <div key={player.id}>
                                {player.username} ({player.first_name}{" "}
                                {player.last_name})
                              </div>
                            );
                          }
                          return null; // Return null if player.id doesn't match team.player_id_1
                        })}
                      </div>
                    )}
                  </dd>
                </div>
                {/* Player 1 Skill Level */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Player One: Skill Levels, Singles/Doubles
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.player_id_1 && (
                      <div>
                        Skill Levels:{" "}
                        {players.map((player) => {
                          if (
                            player.id === team.player_id_1?.id
                          ) {
                            return (
                              <div key={player.id}>
                                {player.skill_level_singles}
                                {"/"}
                                {player.skill_level_doubles}
                              </div>
                            );
                          }
                          return null; // Return null if player.id doesn't match team.player_id_1
                        })}
                      </div>
                    )}
                  </dd>
                </div>

                {/* Player 2 */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Player Two
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.player_id_2 && (
                      <div>
                        {players.map((player) => {
                          if (
                            player.id === team.player_id_2?.id
                          ) {
                            return (
                              <div key={player.id}>
                                {player.username} ({player.first_name}{" "}
                                {player.last_name})
                              </div>
                            );
                          }
                          return null; // Return null if player.id doesn't match team.player_id_2
                        })}
                      </div>
                    )}
                  </dd>
                </div>
                {/* Player 2 Skill Level */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Player Two: Skill Levels, Singles/Doubles
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.player_id_2 && (
                      <div>
                        Skill Levels:{" "}
                        {players.map((player) => {
                          if (
                            player.id === team.player_id_2?.id
                          ) {
                            return (
                              <div key={player.id}>
                                {player.skill_level_singles}
                                {"/"}
                                {player.skill_level_doubles}
                              </div>
                            );
                          }
                          return null; // Return null if player.id doesn't match team.player_id_2
                        })}
                      </div>
                    )}
                  </dd>
                </div>

                {/* Tournament */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-20">
                  <dt className="text-sm font-bold leading-6 text-gray-900">
                    Registered Tournament
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {team.tournament_id ? (
                      <div>
                        {tournaments.map((tournament) => {
                          if (tournament.id === team.tournament_id?.id) {
                            return (
                              <div key={tournament.id}>{tournament.name}</div>
                            );
                          }
                          return null; // Return null if tournament.id doesn't match team.tournament_id.id
                        })}
                      </div>
                    ) : null
                    }
                  </dd>
                </div>
                <div className="py-5 flex flex-wrap justify-center">
                  { (playerId === team.player_id_1?.id || playerId === team.player_id_2?.id) ? (
                    <>
                      <Link to="update">
                        <button className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
                          Edit Team
                        </button>
                      </Link>
                      <button
                        onClick={() => setOpen(true)}
                        className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]"
                        type="button"
                      >
                        Delete Team
                      </button>
                    </>
                    ) : null
                  }
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
                            <h3 className="text-lg font-bold w-60">
                              Confirm Delete
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-gray-700">
                                Are you sure you want to delete your team?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-3 flex gap-4">
                        <button
                          onClick={() => deleteTeam()}
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
              </dl>
            </div>
          </div>
        </section>
      </>
    );
};

export default TeamDetails;
