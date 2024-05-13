import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" />
            </div>
                <p>Collections</p>
                <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
        <Link smooth style={{ textDecoration: 'none' }}  to="/new-collections">    <button>  Latest Collection 
            <img src={arrow_icon} alt="" /></button> </Link>
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero
