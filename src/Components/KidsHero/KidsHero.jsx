import React from 'react'
import './KidsHero.css';

import kids_hero_image from '../Assets/kids2.jpg'


const   KidsHero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>FLAT 50% OFF</h1>
            <div>
                
                <p>12 HOURS 20 MINS</p>
                
            </div>
            <div className="hero-latest-button">
                <div>Explore Now</div>
              
            </div>

        </div>
        <div className="hero-right">
            <img src={kids_hero_image} alt="" />

        </div>


    </div>
  )
}
export default KidsHero;
