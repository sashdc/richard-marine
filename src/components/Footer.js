import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import footerImage from '../../src/assets/images/footerspread.png'


export default function Footer() {
  return (
    <div>
    <footer className="footer ">
    <img src={footerImage} alt="footer" className="footer-image" />

    <div className="container-fluid">
        <div className="row">
        
            <div className="col-md-5">
                <div className="footer-title"><h5><i className="fa fa-anchor"></i> Richards Marine Safe Mooring <i className="fa fa-anchor"></i></h5>
                <p>Mooring & Quayside Equipment Since 1875</p>
                </div>
                <div className="row">
                    <div className="">
                        <ul className="list-unstyled d-flex">
                        <li><Link to="/about">About</Link></li>

                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/partners">Partners</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                        </ul>
                    </div>
              
                </div>
               
            </div>
            
        </div>
    </div>
</footer>
</div>
  );
}