import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";


export default function Logout () {

    const { logout } = useToken();
    const navigate = useNavigate();

    const logoutPlayer = () => {
        logout();
        navigate("/");
    }

    return (
        <div className="bg-green min-h-screen flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
                    <h5 className="mb-8 text-3xl text-center">See you next time!</h5>
                        <button
                            onClick={() => logoutPlayer()}
                            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">
                            Logout
                        </button>
                </div>
            </div>
        </div>

    )
}
