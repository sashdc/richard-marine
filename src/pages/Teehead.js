import React from 'react'
import teeAnimation from '../../src/assets/images/bollard-animation/teehead-animation.gif'
import '../styles/product.css'

const Teehead = () => {
  return (
    <div className=" w-75 m-auto mt-5 animate__animated animate__fadeIn">
    <h1 className='section-heading'>TeeHead (R-TYPE)</h1>
    <div className='product-section'>
        <img className='rounded shadow product-img m-5' src={teeAnimation} alt="teehead animation" />
    </div>
    </div>
  )
}

export default Teehead