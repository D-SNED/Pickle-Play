import React from "react";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import useToken from "@galvanize-inc/jwtdown-for-react";

import SignupForm from "./accounts/Signup";
import LoginForm from "./accounts/Login";
import Logout from "./accounts/Logout";

import Home from "./pages/Home";
import About from "./pages/About";

import ProfilePage from "./accounts/Profile";
import EditProfile from "./accounts/EditProfile";
import PlayerList from "./accounts/PlayerList";
import PlayerDetail from "./accounts/PlayerDetail";

import TeamsList from "./components/teams/TeamsList";
import CreateTeam from "./components/teams/CreateTeam";
import TeamDetails from "./components/teams/TeamDetails";
import UpdateTeam from "./components/teams/UpdateTeam";

import TournamentList from "./components/tournaments/ListTournament";
import CreateTournament from "./components/tournaments/CreateTournament";
import TournamentDetails from "./components/tournaments/TournamentDetails";
import UpdateTournament from "./components/tournaments/UpdateTournament";

import LocationList from "./components/locations/LocationList";
import LocationForm from "./components/locations/LocationForm";
import LocationDetails from "./components/locations/LocationDetails";
import UpdateLocation from "./components/locations/UpdateLocation";

import NotFoundPage from "./pages/NotFoundPage";

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
            <div className="pb-16">
              <Navbar />
            </div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/profile/update" element={<EditProfile />}></Route>
              <Route path="/players" element={<PlayerList />}></Route>
              <Route path="/players/:player_id" element={<PlayerDetail />}></Route>
              {/* <Route path="/teams" element={<TeamList />}></Route> */}
              <Route path="/teams" element={<CreateTeam />}></Route>
              {/* <Route path="/players" element={<PlayerList />}></Route> */}
              <Route path="/teams">
                <Route index element={<TeamsList />} />
                <Route path="create" element={<CreateTeam />} />
                <Route path=":team_id" element={<TeamDetails />} />
                <Route
                  path=":team_id/update"
                  element={<UpdateTeam />}
                />
              </Route>
              <Route path="/tournaments">
                <Route index element={<TournamentList />} />
                <Route path="create" element={<CreateTournament />} />
                <Route path=":tournament_id" element={<TournamentDetails />} />
                <Route
                  path=":tournament_id/update"
                  element={<UpdateTournament />}
                />
              </Route>
              <Route path="/locations">
                <Route index element={<LocationList />} />
                <Route path="create" element={<LocationForm />} />
                <Route path=":locationId" element={<LocationDetails />} />
                <Route path=":locationId/update" element={<UpdateLocation />} />
              </Route>

              <Route path="/signup" element={<SignupForm />}></Route>
              <Route path="/login" element={<LoginForm />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="*" element={<NotFoundPage />} />
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
