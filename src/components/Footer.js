import React from "react";
import "../styles/footer.css";


export default function Footer() {
  return (
    <div>
    <footer className="footer mt-5">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5">
                <h5><i className="fa fa-anchor"></i> Richards Marine Safe Mooring</h5>
                <div className="row">
                    <div className="col-6">
                        <ul className="list-unstyled">
                        <li><a href="/about">About</a></li>

                            <li><a href="/products">Products</a></li>
                            <li><a href="/partners">Partners</a></li>
                            <li><a href="/contact">Contact</a></li>

                        </ul>
                    </div>
              
                </div>
                <ul className="nav">
                    <li className="nav-item"><a href="/" className="nav-link pl-0"><i className="fa fa-facebook fa-lg"></i></a></li>
                    <li className="nav-item"><a href="/" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a></li>
                    <li className="nav-item"><a href="/" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                    <li className="nav-item"><a href="/" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
                </ul>
                <br/>
            </div>
            
        </div>
    </div>
</footer>
</div>
  );
}