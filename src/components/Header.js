import React from "react";
import "animate.css";
import logo from "../assets/images/rmsm-logo.png"
import "../styles/header.css";


export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand " href="/">
          <img className="mx-2 navlogo" src={logo} alt="RSMSlogo" height="80px"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Partners">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">
                Contact
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
