import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showControls fade className='carousel'>
      <MDBCarouselItem
        className='w-100 d-block '
        itemId={1}
        src="./richard-marine/carousel/carousel1.jpg"        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src="./richard-marine/carousel/carousel2.jpg"        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src="./richard-marine/carousel/carousel3.jpg"        alt='...'
      />
         <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src="./richard-marine/carousel/carousel4.jpg"        alt='...'
      />
    </MDBCarousel>
  );
}