import React from "react";
import { Link } from "react-router-dom";
import notfoundpagebg from "../assets/images/notfoundpagebg.jpg";

const NotFoundPage = () => {
  return (
    <>
      <div>
        <img src={notfoundpagebg} alt="page not found 404 error" />
        <p style={{ textAlign: "center" }}>
          <strong>
            Oops, the page you&apos;re looking for isn&apos;t here
          </strong>
          <br />
          <Link to="/">Go Home </Link>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
