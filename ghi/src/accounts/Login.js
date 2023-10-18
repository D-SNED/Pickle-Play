import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="w-full max-w-xs">
      {/* <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4"> */}
      <h1>Login</h1>
      {/* <div className="card-body"> */}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      {/* </div> */}
      {/* </div>
            </div> */}
    </div>
  );
};

export default LoginForm;
