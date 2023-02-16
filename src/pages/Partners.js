import React from "react";
import "../styles/partners.css";
import Partner from "../components/Partner";
import { partnerData } from "./partnerdata/partnerData";
import "animate.css";


export default function Partners() {
  return (
    <div>
      <div className=" w-50 m-auto mt-5 animate__animated animate__fadeIn">
        <h1 className='section-heading'>PARTNERS</h1>
      </div>
      <div className="d-flex w-75 mt-5 flex-wrap justify-content-center">
      <div className="partners  w-100">
          {partnerData.map((partner) => (
            <Partner
            key={partner.id}
            name={partner.name}
            url={partner.url}
            img={partner.logo}
                      />
          ))}
                
        </div>

   
      </div>
    </div>
  );
}
