import React from "react";
import "animate.css";
import { Link } from "react-router-dom";


export default function Product(props) {
    return (
        
          <div className="logocontainer m-4 shadow  animate__animated animate__fadeInUp">
            <img
              src={props.img}
              alt={props.name}
              className="image rounded shadow"
            />
            <div className="overlay">
              <div className="text partner-link">
              <Link to={props.url} className="nav-link">
                  {props.name}
                </Link>
              </div>
            </div>
          </div>
    );
  }