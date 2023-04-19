import React from 'react'
import './TrainingStyle.css'
import Pod from '../assets/japan.jpg'
import Train from '../assets/train.jpg'
import {Link} from 'react-router-dom';

const Training = () => {
  return (
   
<div className='training'>
<div className='left'>
    <h1>
    Training
    </h1>
    <p>lorem ipsum gree blue red f </p>
    <Link to='/contact'><button className='btn'><h4>Contact</h4></button></Link>
</div>
<div className='right'>
  <div className='img-container'>
    <div className='image-stack top'>
      <img src={Train} className='img' alt=''/>

    </div>
    <div className='image-stack bottom'>
  <img src={Pod} className='img' alt=''/>
</div>
  </div>
</div>

</div>
    
  )
}

export default Training;