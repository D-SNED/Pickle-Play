import React, { useEffect, useState} from "react";
import '../index.css';
import './styles/styles.css';
import { useParams } from 'react-router-dom';


export default function PlayerDetail() {

    const [playerData, setPlayerData] = useState([]);
    const [currentDate] = useState(new Date());
    const { player_id } = useParams();


    const getPlayerData = async () => {

        const response = await fetch(
            `${process.env.REACT_APP_API_HOST}/api/players/${player_id}`, {credentials: "include"});

        if (response.ok) {
            const data = await response.json();
            setPlayerData(data);
        };

    };


    const playerName = ((playerData.first_name === null && playerData.last_name === null) ? "Pickle Player" : `${playerData.first_name} ${playerData.last_name}`);

    const defaultPic = "https://gitlab.com/uploads/-/system/project/avatar/50505030/pickleplay_logo.jpeg";
    const profilePic = (playerData.profile_picture === null ? defaultPic : playerData.profile_picture);

    const birthdate = new Date(playerData.birthdate);
    const age = currentDate.getFullYear() - birthdate.getFullYear();

    const hasBirthdayPassed = (
        currentDate.getMonth() > birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDate() >= birthdate.getDate()));

    const playerAge = (hasBirthdayPassed ? age : age - 1).toString();


    useEffect(() => {

        getPlayerData();

    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            <div className="top-auto w-full h-full object-fill">
                <img
                    src='https://www.nswc.ca/wp-content/uploads/2021/01/Pickleball-banner-min.jpg'
                    alt=""
                    className="w-full h-full object-fill"
                />
            </div>
            <section className="relative -mt-32 py-16 bg-floral-white">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white mx-auto w-3/4 mb-6 shadow-xl rounded-lg -mt-96">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <img
                                    alt="Pickle Player Profile"
                                    src={profilePic}
                                    className="h-48 w-48 rounded-full object-cover object-center shadow-xl align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                                </img>
                            </div>
                            <div className="py-2 text-center mt-40">
                                <h3 className="text-6xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    {playerName}
                                </h3>
                            </div>
                            <div className="mt-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <div className="my-4 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                                            <div className="w-full">
                                                    <h4 className="text-2xl text-gray-900 font-bold py-5 text-left">Player Info</h4>
                                                    <ul className="mt-2 text-gray-700">
                                                        <li className="flex border-y py-5 text-left">
                                                            <span className="font-bold w-60">Email:</span>
                                                            <span className="text-gray-700">{playerData["email"]}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Age:</span>
                                                            <span className="text-gray-700">{playerAge}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Gender:</span>
                                                            <span className="text-gray-700">{(playerData.gender !== null && playerData.gender !== undefined) ? playerData.gender : "N/A"}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Skill Level Singles:</span>
                                                            <span className="text-gray-700">{(playerData.skill_level_singles !== null && playerData.skill_level_singles !== undefined) ? playerData.skill_level_singles : "N/A"}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Skill Level Doubles:</span>
                                                            <span className="text-gray-700">{(playerData.skill_level_doubles !== null && playerData.skill_level_doubles !== undefined) ? playerData.skill_level_doubles : "N/A"}</span>
                                                        </li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
