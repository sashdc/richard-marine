import React from 'react';


export default function About() {
  return (
    <div className='container-fluid w-75 m-auto mt-5 animate__animated animate__fadeIn'>
  
  <div id="carouselExampleControls" className="carousel slide carousel-fade"   data-mdb-ride="carousel"
 data-ride="carousel" data-interval="2500">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block  rounded" src="./richard-marine/carousel/carousel1.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block  rounded" src="./richard-marine/carousel/carousel2.JPG" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block  rounded" src="./richard-marine/carousel/carousel3.jpg" alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block  rounded" src="./richard-marine/carousel/carousel4.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

      <div className='about d-flex w-75 mt-5 flex-column'>
      <h1 >ABOUT RMSM</h1>
      <div className='d-flex m-2 about-segment'>
        <img src="./richard-marine/images/britannia-foundry.png" className = "rounded about-image" alt="first RMSM foundry" height="250px" />
        <p className='about-text m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      
      </div>

      <div className='d-flex m-2 about-segment'>
        <p className='about-text m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <img src="./richard-marine/images/bollard-skyline.jpg" className = "rounded about-image" alt="RMSM bollard against dubai skyline" height="300px" />

      </div>

      <div className='d-flex m-2 about-segment'>
        <img src="./richard-marine/images/bollard-name.JPG" className = "rounded about-image" alt="first RMSM foundry" height="250px" />
        <p className='about-text m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      
      </div>
      </div>
    </div>
  );
}
