import React from "react";
import { Link } from "react-router-dom";
import adminerrorpage from "../assets/images/adminerrorpage.jpg";
import "../index.css";

const AdminErrorPage = () => {
  return (
    <>
      <div className="not-found-page">
        <img src={adminerrorpage} alt="page not found 404 error" />
        <p style={{ textAlign: "center", color: "#C14533" }}>
          <br />
          <strong>
            Seems like you hit the ball out of bounds! <br/>
            You do not have access to this page or resource.
          </strong>
          <br />
          <br />
          <button>
            <Link to="/" className="not-found-page-home-button">
              🏡
            </Link>
          </button>
        </p>
      </div>
    </>
  );
};

export default AdminErrorPage;
