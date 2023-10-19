import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./accounts/Login";
import SignupForm from "./accounts/Signup";
import Home from "./pages/Home";
import ProfilePage from "./accounts/Profile";
import { Navbar } from "./components/Navbar";
import { About } from "./components";

// import NotFoundPage from "./NotFoundPage.js";

// import React, { useEffect, useState } from "react";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <>
      <div className="container">
        <BrowserRouter basename={basename}>
          <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
            <div className="relative z-0 bg-success">
              <div className="bg-player-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
              </div>
              <div>
                <About />
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/login" element={<LoginForm />}></Route>
                  <Route path="/signup" element={<SignupForm />}></Route>
                  <Route path="/profile" element={<ProfilePage />}></Route>
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
