import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import TrainingSection from '../components/Training'

const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Training.' text='pre Bookings' />
        <TrainingSection/>
        <Footer />

    </div>
  )
}

export default Training;