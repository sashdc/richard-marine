import React from "react";
import "animate.css";

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
                <a href={props.url} target="blank">
                  {props.name}
                </a>
              </div>
            </div>
          </div>
    );
  }