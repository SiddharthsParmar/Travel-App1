import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>-basic-</h3>
                <span className='bar'></span>
                <p className='btc'>$899</p>
                <p>5days</p>
                <p>View</p>
                <p>feature</p>
                <p>Private Qurters</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
            <div className='card'>
                <h3>-Suit-</h3>
                <span className='bar'></span>
                <p className='btc'>1499$</p>
                <p>7days</p>
                <p>View</p>
                <p>feature</p>
                <p>Private Qurters</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
            <div className='card'>
                <h3>-Exclusive-</h3>
                <span className='bar'></span>
                <p className='btc'>$2999</p>
                <p>10days</p>
                <p>View</p>
                <p>features</p>
                <p>Hotels</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
        </div>

    </div>
  )
}

export default Pricing