import React from "react";
import { Link } from "react-router-dom";
import notfoundpagebg from "../assets/images/notfoundpagebg.jpg";
import "../index.css";

const NotFoundPage = () => {
  return (
    <>
      <div className="not-found-page">
        <img src={notfoundpagebg} alt="page not found 404 error" />
        <p style={{ textAlign: "right" }}>
          <br />
          <strong>
            Oops, the page you&apos;re looking for isn&apos;t here!!!
          </strong>
          <br />
          <br />
          <button>
            <Link to="/" className="not-found-page-home-button">
              Home
            </Link>
          </button>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
