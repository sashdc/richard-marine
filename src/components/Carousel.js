import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <MDBCarousel showControls fade className="carousel">
      <MDBCarouselItem
        className="w-100 d-block "
        itemId={1}
        src="./richard-marine/carousel/carousel1.jpg"
        alt="close up of bollard with company mark"
      />
        <MDBCarouselItem
        className="w-100 d-block "
        itemId={2}
        src="./richard-marine/carousel/carouseltwo.jpg"
        alt="a bollard close up with the dock extending into the background"      />
         <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="./richard-marine/carousel/carousel3.jpg"
        alt="a number of yellow bollards on a factory floor"
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={4}
        src="./richard-marine/carousel/carousel4.jpg"
        alt="a dock seen from the water with bollards visible"
      />
    </MDBCarousel>
  );
}
