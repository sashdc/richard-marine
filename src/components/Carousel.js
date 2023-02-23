import React from 'react'

const Carousel = () => {
  return (
   <div
        id="carouselExampleControls"
        className="carousel slide shadow carousel-fade"
        data-mdb-ride="carousel"
        data-ride="carousel"
        data-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block car-image  rounded"
              src="./richard-marine/carousel/carousel1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block car-image rounded"
              src="./richard-marine/carousel/carousel2.JPG"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block car-image rounded"
              src="./richard-marine/carousel/carousel3.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block car-image  rounded"
              src="./richard-marine/carousel/carousel4.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>  )
}

export default Carousel