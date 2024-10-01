import React from 'react'
import './MensHero.css';

import mens_hero_image from '../Assets/men1.jpeg'


const MensHero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>FLAT 50% OFF</h2>
            <div>
                
                <p>12 HOURS 20 MINS</p>
                
            </div>
            <div className="hero-latest-button">
                <div>Explore Now</div>
              
            </div>

        </div>
        <div className="hero-right">
            <img src={mens_hero_image} alt="" />

        </div>


    </div>
  )
}
export default MensHero;
