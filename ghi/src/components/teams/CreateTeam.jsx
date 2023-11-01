import { useEffect, useState } from "react";
import SuccessMessage from "./SuccessMessage";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [category, setCategory] = useState("");
  const [ageBracket, setAgeBracket] = useState("");
  const [playerCount, setPlayerCount] = useState("");
  const [tournament, setTournament] = useState("");

  const [players, setPlayers] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const teamCategories = [
    { value: "Mens" },
    { value: "Womens" },
    { value: "Mixed" },
  ];

  const ageBrackets = [
    { value: "Juniors (18 & under)" },
    { value: "Adult (19-49)" },
    { value: "Seniors (50+)" },
  ];

  const numberOfPlayers = [{ value: 1 }, { value: 2 }];

  const handleTeamNameChange = (event) => {
    const value = event.target.value;
    setTeamName(value);
  };

  const handlePlayerOneChange = (event) => {
    const value = event.target.value;
    setPlayerOne(value);
  };

  const handlePlayerTwoChange = (event) => {
    const value = event.target.value;
    setPlayerTwo(value);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleAgeBracketChange = (event) => {
    const value = event.target.value;
    setAgeBracket(value);
  };

  const handlePlayerCountChange = (event) => {
    const value = event.target.value;
    setPlayerCount(value);
  };

  const handleTournamentChange = (event) => {
    const value = event.target.value;
    setTournament(value);
  };

  // Pulling Player Data for dropdown selection
  const fetchPlayers = async () => {
    const playerUrl = `${process.env.REACT_APP_API_HOST}/api/players`;
    const response = await fetch(playerUrl);

    if (response.ok) {
      const data = await response.json();
      setPlayers(data);
    }
  };

  // Pulling Tournament Data for dropdown selection
  const fetchTournaments = async () => {
    const tournamentUrl = `${process.env.REACT_APP_API_HOST}/api/tournaments`;
    const response = await fetch(tournamentUrl);

    if (response.ok) {
      const data = await response.json();
      setTournaments(data);
    }
  };


  // Submission of form
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.team_name = teamName;
    data.player_id_1 = playerOne;
    data.player_id_2 = playerTwo ? parseInt(playerTwo) : null;
    data.category = category;
    data.age_bracket = ageBracket;
    data.number_of_players = playerCount;
    data.tournament_id = tournament ? parseInt(tournament) : null;

    const teamUrl = `${process.env.REACT_APP_API_HOST}/api/teams`;
    const fetchConfig = {
      method: "post",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(teamUrl, fetchConfig);
    console.log(response.ok);
    {
      setTeamName("");
      setPlayerOne("");
      setPlayerTwo("");
      setCategory("");
      setPlayerCount("");
      setAgeBracket("");
      setTournament("");
      setShowSuccessMessage(true);
        const hideTimeout = setTimeout(() => {
          setShowSuccessMessage(false);
        }, 8000);

        // Clear the timeout on component unmount
        return () => clearTimeout(hideTimeout);
    }
  };


  useEffect(() => {
    fetchPlayers();
    fetchTournaments();
  }, []);

  return (
    <>
      <div className="bg-green flex min-h-screen flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className=" px-6 py-8 text-black w-full">
          <div className="container max-w-custom mx-auto flex-1 flex flex-col items-center card-body text-center bg-white px-6 py-8 rounded-lg shadow-md text-black w-full sm:max-w">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-[#C14533]">
                Create Team
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg"
                id="create-team-form"
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2"
                      htmlFor="team_name"
                    >
                      Team Name
                      <span style={{ color: "red" }}> *</span>
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleTeamNameChange}
                        value={teamName}
                        id="team_name"
                        name="team_name"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="category"
                    >
                      Category
                      <span style={{ color: "red" }}> *</span>
                    </label>
                    <div className="category">
                      <select
                        onChange={handleCategoryChange}
                        value={category}
                        id="category"
                        name="category"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                      >
                        <option value="">Select</option>
                        {teamCategories.map((c) => {
                          return (
                            <option key={c.value} value={c.value}>
                              {c.value}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="age_bracket"
                    >
                      Age Bracket
                      <span style={{ color: "red" }}> *</span>
                    </label>
                    <div className="age_bracket">
                      <select
                        onChange={handleAgeBracketChange}
                        value={ageBracket}
                        id="age_bracket"
                        name="age_bracket"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                      >
                        <option value="">Select</option>
                        {ageBrackets.map((a) => {
                          return (
                            <option key={a.value} value={a.value}>
                              {a.value}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="number_of_players"
                    >
                      Player Count
                      <span style={{ color: "red" }}> *</span>
                    </label>
                    <div className="mt-2">
                      <select
                        onChange={handlePlayerCountChange}
                        value={playerCount}
                        id="number_of_players"
                        name="number_of_players"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                      >
                        <option value="">Select</option>
                        {numberOfPlayers.map((p) => {
                          return (
                            <option key={p.value} value={p.value}>
                              {p.value}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div style={{ margin: "2rem 0" }}></div>
                  </div>

                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2"
                      htmlFor="player_one"
                    >
                      Player One
                      <span style={{ color: "red" }}> *</span>
                    </label>
                    <div className="mt-2">
                      <select
                        onChange={handlePlayerOneChange}
                        value={playerOne}
                        id="player_one"
                        name="player_one"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                      >
                        <option value="">Select Player One</option>
                        {players.map((player) => {
                          return (
                            <option key={player.id} value={player.id}>
                              {player.username} ( {player.first_name}{" "}
                              {player.last_name} )
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div style={{ margin: "2rem 0" }}></div>
                  </div>

                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2"
                      htmlFor="player_two"
                    >
                      Player Two
                    </label>
                    <div className="mt-2">
                      <select
                        onChange={handlePlayerTwoChange}
                        value={playerTwo}
                        id="player_two"
                        name="player_two"
                        type="text"
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                      >
                        <option value="">Select Player Two</option>
                        {players.map((player) => {
                          return (
                            <option key={player.id} value={player.id}>
                              {player.username} ( {player.first_name}{" "}
                              {player.last_name} )
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div style={{ margin: "2rem 0" }}></div>
                  </div>

                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2"
                      htmlFor="tournament_id"
                    >
                      Tournament
                    </label>
                    <div className="mt-2">
                      <select
                        onChange={handleTournamentChange}
                        value={tournament}
                        id="tournament_id"
                        name="tournament_id"
                        type="text"
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                      >
                        <option value="">Select Tournament</option>
                        {tournaments.map((tournament) => {
                          return (
                            <option key={tournament.id} value={tournament.id}>
                              {tournament.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div style={{ margin: "2rem 0" }}></div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full justify-center py-3 flex gap-4 rounded-md bg-[#C14533] px-3 py-1.5 text-m font-semibold leading-6 text-white shadow-sm hover:bg-[#d4402a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
              <SuccessMessage
                show={showSuccessMessage}
                onHide={() => setShowSuccessMessage(false)}
              />
            </div>

            <div>
              <p className="text-center text-m text-gray-500">
                PicklePlay by GitJAACD
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateTeam;
