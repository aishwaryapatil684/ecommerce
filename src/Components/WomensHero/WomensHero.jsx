import React from 'react'
import './WomensHero.css';

import womens_hero_image from '../Assets/women1.png'


const   WomensHero = () => {
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
            <img src={womens_hero_image} alt="" />

        </div>


    </div>
  )
}
export default WomensHero;
