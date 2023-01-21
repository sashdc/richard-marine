import React from "react";
import "../styles/partners.css";

export default function Partners() {
  return (
    <div>
      <div className=" w-50 m-auto mt-5 animate__animated animate__fadeIn">
        <h1>PARTNERS</h1>
      </div>
      <div className="d-flex w-75 mt-5 flex-wrap justify-content-center">
        <div className="logocontainer">
          <img
            src="http://images.squarespace-cdn.com/content/v1/54f57a03e4b003b6eebe62f2/1456819770382-A48SI7SRSX7WJL5UWCY8/GBA01.png?format=750w"
            alt="Avatar"
            className="image"
          />
          <div className="overlay">
            <div className="text partner-link">
              <a href="http://www.gba-gulf.com/" target="blank">
                GBA Gulf
              </a>
            </div>
          </div>
        </div>

        {/* <a href="http://www.gba-gulf.com/" target="blank"><img
            className="icon m-2"
            src="http://images.squarespace-cdn.com/content/v1/54f57a03e4b003b6eebe62f2/1456819770382-A48SI7SRSX7WJL5UWCY8/GBA01.png?format=750w"
            alt= "logo"
            title="GBA Gulf"
            height="100px"
           /></a> */}
      </div>
    </div>
  );
}
