import React from 'react'
import './Banner.css'
import banner_image from '../Assets/banner.png'

const Banner = () => {
  return (
    <div className='banner'>
       <div className="banner-left">
        <h1>SPRING</h1>
        <h1>COLLECTIONS</h1>
        <h3>ONLY ON BEST SELLERS PRODUCTS</h3>
        <p>Available Now</p>
      </div>
      <div className="banner-right">
        <img src={banner_image} alt="" />
      </div>
    </div>
  )
}

export default Banner
