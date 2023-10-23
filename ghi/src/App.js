import React from "react";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import useToken from "@galvanize-inc/jwtdown-for-react";

import LoginForm from "./accounts/Login";
import SignupForm from "./accounts/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage.js";
import ProfilePage from "./accounts/Profile";
import TournamentList from "./components/tournaments/ListTournament";
import LocationList from "./components/locations/LocationList";
import CreateTournament from "./components/tournaments/CreateTournament";

import "./App.css";

import { Navbar } from "./components";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  // const [playerId, setPlayerId] = useState("");
  // const { fetchWithToken, token } = useToken();

  // const getPlayerData = async () => {
  //   console.log(token)
  //   if (token) {
  //     const response = await fetchWithToken(
  //       `${process.env.REACT_APP_API_HOST}/api/playerdata`);
  //     setPlayerId(response["id"]);
  //   } else {
  //     setPlayerId(null);
  //   }
  // };

  // useEffect(() => {
  //   getPlayerData();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="object-fill">
        <BrowserRouter basename={basename}>
          <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
            {/* <div className="App-background-white"> */}
            {/* <div className="App-background"> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              {/* <Route path="/players" element={<PlayerList />}></Route> */}
              {/* <Route path="/teams" element={<TeamList />}></Route> */}

              <Route path="/tournaments">
                <Route index element={<TournamentList />} />
                <Route path="create" element={<CreateTournament />} />
              </Route>
              <Route path="/locations">
                <Route index element={<LocationList />} />
              </Route>
              <Route path="/signup" component={<SignupForm />}></Route>
              <Route path="/login" component={<LoginForm />}></Route>
              {/* <Route path="/logout" component={<Logout />}></Route> */}
              <Route path="*" component={NotFoundPage} />
            </Routes>
            {/* </div> */}
            {/* </div> */}
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
