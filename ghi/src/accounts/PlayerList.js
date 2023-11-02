import React, { useEffect, useState} from "react";
import '../index.css';
import './styles/styles.css';
import { useNavigate } from 'react-router-dom';

export default function PlayerList() {

    const [players, setPlayers] = useState([]);
    const [accountId, setAccountId] = useState("");
    const [currentDate] = useState(new Date());
    const navigate = useNavigate();

    const fetchData = async() => {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/players`);

        if (response.ok) {
            const data = await response.json();
            setPlayers(data);
        };
    };

    const getAccountId = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_HOST}/token`, {credentials: "include"});

        if (response.ok) {
            const data = await response.json();
            setAccountId(data["account"]["id"]);
        };
    };

    const playerDetail = (playerId) => {
        if (playerId === accountId) {
            navigate(`/profile`);
        } else {
            navigate(`/players/${playerId}`);
        }
    }


    useEffect(() => {
        getAccountId();
        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return(
        <>
        <div className="bg-green flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-md text-gray-500">
                    <thead className="text-md text-gray-700 uppercase bg-floral-white">
                        <tr>
                            <th scope="col" className="px-28 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Age</th>
                            <th scope="col" className="px-6 py-3">Gender</th>
                            <th scope="col" className="px-6 py-3">Skill Level Singles</th>
                            <th scope="col" className="px-6 py-3">Skill Level Doubles</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {players.map(player => {

                            const playerName = ((player.first_name === null && player.last_name === null) ? "Pickle Player" : `${player.first_name} ${player.last_name}`)

                            const defaultPic = "https://gitlab.com/uploads/-/system/project/avatar/50505030/pickleplay_logo.jpeg";
                            const profilePic = (player.profile_picture === null ? defaultPic : player.profile_picture);

                            const birthdate = new Date(player.birthdate);
                            const age = currentDate.getFullYear() - birthdate.getFullYear();

                            const hasBirthdayPassed = (
                                currentDate.getMonth() > birthdate.getMonth() ||
                                (currentDate.getMonth() === birthdate.getMonth() &&
                                currentDate.getDate() >= birthdate.getDate()));

                            const playerAge = (hasBirthdayPassed ? age : age - 1);

                            return (
                                <tr  className="hover:bg-gray-50 bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={player.id}>
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                        <img
                                            onClick={() => playerDetail(player.id)}
                                            className="h-20 w-20 rounded-full object-cover object-center shadow-lg"
                                            src={profilePic}
                                            alt="Pickle Player"
                                        />
                                        <div className="text-md">
                                            <div className="font-medium text-gray-700">{playerName}</div>
                                            <div className="text-gray-400">{player.email}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">{playerAge}</td>
                                    <td className="px-6 py-4">{player.gender}</td>
                                    <td className="px-6 py-4">{player.skill_level_singles}</td>
                                    <td className="px-6 py-4">{player.skill_level_doubles}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
