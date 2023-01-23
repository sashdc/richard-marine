import React from "react";
import "animate.css";
import logo from "../assets/images/rmsm-logo.png"
import "../styles/header.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
      <Link to="/" className="nav-link">
          <img className="mx-2 navlogo" src={logo} alt="RSMSlogo" height="80px"/>
        </Link>
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
            <Link to="/about" className="nav-link">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/partners" className="nav-link">
                Partners
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
