import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    e.target.reset();
    navigate("/profile");
  };

  return (
    <div className="bg-green min-h-screen flex flex-col">
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
          <h5 className="mb-8 text-3xl text-center">Log In</h5>
          <div className="card-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label
                  className="block text-gray-700 text-md font-bold mb-2 py-2"
                  htmlFor="username"
                >
                  Username:
                </label>
                <input
                  className="form-control block border border-grey-light w-full p-3 rounded mb-4"
                  id="username"
                  type="text"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-md font-bold mb-2 py-2"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  className="form-control block border border-grey-light w-full p-3 rounded mb-4"
                  id="password"
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                    className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    type="submit"
                    value="login">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="text-grey-dark text-center mt-6">
            Don't have an account?
            <Link to={{ pathname: "/signup" }} className="px-2 no-underline border-b border-blue text-blue">
                Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
