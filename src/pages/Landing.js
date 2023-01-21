import React from "react";
// import logo from "../assets/images/rmsm-logo.png"
import logo from "../assets/images/rmsm-logo.png"


export default function Landing() {
  return (
    <div className=" m-auto w-75 mt-5 d-flex flex-column animate__animated animate__fadeInUp ">
      <div className="d-flex flex-column justify-content-center">
      <a href="/about"><img className="landinglogo" src={logo} height="600px" alt="RMSM Logo" /></a>
      <a href="/about"><button className="enter button btn btn-danger">Enter</button></a>
      </div>
    </div>
  );
}
