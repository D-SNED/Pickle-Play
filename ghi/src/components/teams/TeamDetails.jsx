import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// Team Details
const TeamDetails = () => {
    const { team_id } = useParams();
    const [team, setTeam] = useState([]);
    const navigate = useNavigate();

    // Player Data
    const [players, setPlayers] = useState([]);

    // Tournament Data
    const [tournaments, setTournaments] = useState([]);

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
    navigate("/teams");
    };

    useEffect(() => {
    fetchTeamData();
    fetchTournamentData();
    fetchPlayerData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <>
        <div className="px-8 py-6">
        <div className="px-4 sm:px-0">
            <div className="flex justify-end">
            <Link to="update">
                <button className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]">
                Edit Team
                </button>
            </Link>
            </div>
            <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-[#802d21]">
            Team Details
            </h1>
        </div>
        <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Team Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {team.team_name}
                </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Category
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {team.category}
                </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Age Bracket
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {team.age_bracket}
                </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Number Of Players
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {team.number_of_players}
                </dd>
            </div>

            {/* Player 1 */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Player One
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {players.map((player) => {
                        if (team.player_id_1.id === player.id) {
                            return(
                                <div key={player.id}>
                                {player.first_name} {player.last_name}
                                </div>
                            )
                        } else {
                            return null;
                        };
                    })}
                {/* {team.player_id_1 && (
                    <div>
                    {players.map((player) => {
                        if (
                        player.first_name === team.player_id_1.first_name &&
                        player.last_name === team.player_id_1.last_name
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
                )} */}
                </dd>
            </div>
            {/* Player 1 Skill Level */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Player One: Skill Levels, Singles/Doubles
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div>
                    Skill Levels:
                    {players.map((player) => {
                        if (team.player_id_1.id === player.id) {
                        return (
                            <div key={player.id}>
                            {player.skill_level_singles}
                            /
                            {player.skill_level_doubles}
                            </div>
                        );
                        }
                        return null; // Return null if player.id doesn't match team.player_id_1
                    })}
                    </div>
                </dd>
            </div>

            {/* Player 2 */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Player Two
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {players.map((player) => {
                        if (team.player_id_2.id === player.id) {
                            return(
                                <div key={player.id}>
                                {player.first_name} {player.last_name}
                                </div>
                            )
                        } else {
                            return null;
                        };
                    })}
                {/* {team.player_id_2 && (
                    <div>
                    {players.map((player) => {
                        if (
                        player.first_name === team.player_id_2.first_name &&
                        player.last_name === team.player_id_2.last_name
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
                )} */}
                </dd>
            </div>
            {/* Player 2 Skill Level */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Player Two: Skill Levels, Singles/Doubles
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div>
                    Skill Levels:
                    {players.map((player) => {
                        if (team.player_id_2.id === player.id) {
                        return (
                            <div key={player.id}>
                            {player.skill_level_singles}
                            /
                            {player.skill_level_doubles}
                            </div>
                        );
                        }
                        return null; // Return null if player.id doesn't match team.player_id_1
                    })}
                    </div>
                </dd>
            </div>

            {/* Tournament */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Registered Tournament
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {team.tournament_id ? (
                    <div>
                    {tournaments.map((tournament) => {
                        if (tournament.id === team.tournament_id.id) {
                        return <div key={tournament.id}>{tournament.name}</div>;
                        }
                        return null; // Return null if tournament.id doesn't match team.tournament_id.id
                    })}
                    </div>
                ) : (
                    <div>null</div>
                )}
                </dd>
            </div>
            <div className="flex justify-end">
                <button
                onClick={() => deleteTeam()}
                className="m-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]"
                >
                Delete Team
                </button>
            </div>
            </dl>
        </div>
        </div>
    </>
    );
};

export default TeamDetails;
