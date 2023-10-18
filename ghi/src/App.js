import React, { useEffect, useState } from "react";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Construct from "./Construct.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";

// import { Navbar } from "./components";
// import NotFoundPage from "./NotFoundPage.js";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  const [launchInfo, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_API_HOST}/api/launch-details`;
      console.log("fastapi url: ", url);
      let response = await fetch(url);
      console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <BrowserRouter basename={basename}>
          <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
            <div className="relative z-0 bg-primary">
              <div className="bg-player-pattern bg-cover bg-no-repeat bg-center">
                {/* <Navbar /> */}
                <ErrorNotification error={error} />
                <Routes>
                  <Route path="/" element={<Construct info={launchInfo} />} />
                  <Route
                    path="/error"
                    element={<ErrorNotification error={error} />}
                  />
                  {/* <Route path="*" component={NotFoundPage} /> */}
                </Routes>
              </div>
            </div>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
