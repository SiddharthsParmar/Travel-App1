import React from 'react'
import './VideoStyles.css'
import {Link} from 'react-router-dom';
import TravelVideo from '../assets/TravelVideo.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={TravelVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Travel. With Us</h1>
            <p>Better Improvements, Best Experince</p>
            <div>
                <Link to='/training' className='btn'>Trips</Link>
                <Link to='/contact' className='btn btn-light'>Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Video