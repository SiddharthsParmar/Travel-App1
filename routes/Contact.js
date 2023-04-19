import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage';
import form from '../components/form';
import Footer from '../components/Footer';
import Form1 from '../components/Form1'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='CONTACT.' text='Contact Us.Get Connected'/>
        <Form1 />
        <Footer/>
    </div>
  )
}

export default Contact