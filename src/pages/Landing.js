import React from "react";
// import logo from "../assets/images/rmsm-logo.png"
import logo from "../assets/images/rmsm-logo.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className=" m-auto landing mt-5 animate__animated animate__fadeInUp ">
      <div className="d-flex flex-column justify-content-center">
        <Link to="/about">
          <img
            className="landinglogo"
            src={logo}
            height="600px"
            alt="RMSM Logo"
          />
        </Link>
        <Link to="/about">
          <button className="enter button btn btn-danger">Enter</button>
        </Link>
      </div>
    </div>
  );
}
