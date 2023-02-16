import React from "react";
// import logo from "../assets/images/rmsm-logo.png"
import logo from "../assets/images/rmsm-logo.png";
import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
  return (
    <div className=" landing mt-5 animate__animated animate__fadeInUp ">
      <div className="d-flex flex-column ">
        <Link to="/about">
          <img
            className="landinglogo"
            src={logo}
            alt="RMSM Logo"
          />
        </Link>
        <Link to="/about">
          <button className="enter-btn button btn btn-danger">Enter</button>
        </Link>
      </div>
    </div>
  );
}
