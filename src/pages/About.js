import React from "react";
import "../styles/about.css";
import Carousel from "../components/Carousel.js";

export default function About() {
  return (
    <div className="container-fluid  m-auto mt-5 animate__animated animate__fadeIn">
   <Carousel />
      <div className="about d-flex  flex-column">
        <h1 className='section-heading'>ABOUT RMSM</h1>
        <div className="d-flex m-2 about-segment">
          <img
            src="./richard-marine/images/britannia-foundry.png"
            className="rounded about-image"
            alt="first RMSM foundry"
            height="250px"
          />
          <p className="about-text m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>

        <div className="d-flex m-2 about-segment">
          <p className="about-text m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
          <img
            src="./richard-marine/images/bollard-skyline.jpg"
            className="rounded about-image"
            alt="RMSM bollard against dubai skyline"
            height="250px"
          />
        </div>

        <div className="d-flex m-2 about-segment">
          <img
            src="./richard-marine/images/bollard-name.JPG"
            className="rounded about-image"
            alt="first RMSM foundry"
            height="250px"
          />
          <p className="about-text m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
