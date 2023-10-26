import { useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { register } = useToken();
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        const accountData = {
            username: username,
            password: password,
            email: email,
            birthdate: birthdate,
            first_name: firstName,
            last_name: lastName
        };
        console.log(`${process.env.REACT_APP_API_HOST}/api/players`)
        register(
            accountData,
            `${process.env.REACT_APP_API_HOST}/api/players`
        );
        e.target.reset();
        navigate("/");
    };

    return (
        <div className="bg-green min-h-screen flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
                    <h5 className="mb-8 text-3xl text-center">Sign Up</h5>
                    <div className="card-body">
                        <form onSubmit={(e) => handleRegistration(e)}>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="username">
                                Username
                                <span style={{ color: "red" }}> *</span>
                            </label>
                            <input
                            name="username"
                            type="text"
                            placeholder="username"
                            required
                            className="form-control block border border-grey-light w-full p-3 rounded mb-4"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="password">
                                Password
                                <span style={{ color: "red" }}> *</span>
                            </label>
                            <input
                            name="password"
                            type="password"
                            placeholder="password"
                            required
                            className="form-control block border border-grey-light w-full p-3 rounded mb-4"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="email">
                                Email
                                <span style={{ color: "red" }}> *</span>
                            </label>
                            <input
                            name="email"
                            type="email"
                            placeholder="email"
                            required
                            className="form-control block border border-grey-light w-full p-3 rounded mb-4"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="birthdate">
                                Birthdate
                                <span style={{ color: "red" }}> *</span>
                            </label>
                            <input
                            name="birthdate"
                            type="date"
                            placeholder="birthdate"
                            required
                            className="form-control block border border-grey-light w-full p-3 rounded mb-4"
                            onChange={(e) => {
                                setBirthdate(e.target.value);
                            }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="first-name">
                                First Name
                                <span style={{ color: "red" }}> *</span>
                            </label>
                            <input
                            name="first-name"
                            type="text"
                            placeholder="first name"
                            required
                            className="form-control block border border-grey-light w-full p-3 rounded mb-4"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-md font-bold mb-2 py-2" htmlFor="last-name">
                                Last Name
                                <span style={{ color: "red" }}> *</span>
                            </label>
                            <input
                            name="last-name"
                            type="text"
                            placeholder="last name"
                            required
                            className="form-control block border border-grey-light w-full p-3 rounded mb-4"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                value="Register"
                                className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>
                        </div>
                        </form>
                    </div>
                    <div className="text-grey-dark text-center mt-6">
                        Already have an account?
                        <Link to={{ pathname: "/login" }} className="px-2 no-underline border-b border-blue text-blue">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
