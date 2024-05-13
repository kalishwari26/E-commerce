import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { HashLink as Link } from 'react-router-hash-link';


const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exlusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <Link smooth style={{ textDecoration: 'none' }}  to="/discount-offers"> <button>Check Now</button></Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
