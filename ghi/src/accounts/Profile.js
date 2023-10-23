import React, { useEffect, useState} from "react";
import '../index.css';
import './styles/styles.css';


export default function ProfilePage() {

    const [playerData, setPlayerData] = useState([]);

    const getPlayerData = async () => {

            const response = await fetch(
                    `${process.env.REACT_APP_API_HOST}/token`, {credentials: "include"});

            if (response.ok) {
                const data = await response.json();
                setPlayerData(data["account"]);
            }

    };

    useEffect(() => {
        getPlayerData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

            <main className="profile-page">
            <section className="relative block h-500-px">
                <div className="absolute top-0 w-full h-full bg-center bg-cover">
                    <img
                        src='https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80'
                        alt=""
                    />
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-floral-white"></span>
                </div>
            </section>
            <section className="relative py-16 bg-floral-white">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 justify-center">
                                    <div className="relative">
                                        <img
                                            alt="..."
                                            src={playerData["profile_picture"]}
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                                        </img>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button className="button active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                        Edit Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-6xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    {playerData["first_name"]} {playerData["last_name"]}
                                </h3>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                                            <div className="w-full flex flex-col 2xl:w-1/3">
                                                    <h4 className="text-2xl text-gray-900 font-bold py-5 text-left">Personal Info</h4>
                                                    <ul className="mt-2 text-gray-700">
                                                        <li className="flex border-y py-5 text-left">
                                                            <span className="font-bold w-60">Email:</span>
                                                            <span className="text-gray-700">{playerData["email"]}</span>
                                                        </li>
                                                        <li className="flex border-y py-5 text-left">
                                                            <span className="font-bold w-60">Birthdate:</span>
                                                            <span className="text-gray-700">{playerData["birthdate"]}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Phone Number:</span>
                                                            <span className="text-gray-700">{playerData["phone_number"]}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Gender:</span>
                                                            <span className="text-gray-700">{playerData["gender"]}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Skill Level Singles:</span>
                                                            <span className="text-gray-700">{playerData["skill_level_singles"]}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Skill Level Doubles:</span>
                                                            <span className="text-gray-700">{playerData["skill_level_doubles"]}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Emergency Contact Name:</span>
                                                            <span className="text-gray-700">{playerData["emergency_contact_fullname"]}</span>
                                                        </li>
                                                        <li className="flex border-b py-5 text-left">
                                                            <span className="font-bold w-60">Emergency Contact Number:</span>
                                                            <span className="text-gray-700">{playerData["emergency_contact_phone_number"]}</span>
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
            </main>
        </>
    );
}
