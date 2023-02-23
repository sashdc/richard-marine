import React from "react";
import notfound from "../assets/images/404.jpg";
import "../styles/notfound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="m-auto mt-5  animate__animated animate__fadeIn ">
      <div className="m-auto notfound ">
   
      <Link to="/" className="nav-link">
          <img
            src={notfound}
            className="rounded shadow"
            height="50%"
            alt="404"
          />
         <button type="button" className="btn btn-warning mt-4"> Uh-oh! Looks like you're lost. Click here to go back home</button>
        </Link>
      </div>
    </div>
  );
}
