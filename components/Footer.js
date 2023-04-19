import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin ,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#fffff', marginRight:'2rem'}}/>

                
                <div>
                   <p>123</p>
                   <h4>Ahmedabda</h4>
                </div>
                </div>
        <div className='phone'>
            <h4>
               <FaPhone size={20} style={{color:'#fffff', marginRight:'2rem'}} />   8780373721

            </h4>
        </div>
        <div className='email'>
            <h4>
            
            
            <FaMailBulk size={20} style={{color:'#fffff', marginRight:'2rem'}}/>
                siddharthakk3704@gmail.com
            </h4>
        </div>
        
        </div>

        <div className='right'>
            <h4>About Us</h4>
            <p>"lorem ipsum njjjvbjfdbvkfsvvfhvhsvbkf"</p>
            <div className='social'>
                <FaFacebook size={30} style={{color:'#fffff', marginRight:'1rem'}}/>
                <FaTwitter size={30} style={{color:'#fffff', marginRight:'1rem'}}/>
                <FaLinkedin size={30} style={{color:'#fffff', marginRight:'1rem'}}/>

            </div>
        </div>

    
    
    </div>
    </div>
  )
}

export default Footer