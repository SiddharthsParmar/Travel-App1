import React from 'react'
import './FormStyle.css';
const Form1 = () => {
  return (
    <div className='form'>
        <form>
            <label>
                Your Name 
                <input type='text'></input>
            </label>
            <label>
               Email
                <input type='text'></input>
            </label>
            <label>
               FAcitlites you require for Trip
                <input type='text'></input>
            </label>
            <label>
                Details
            </label>
                <textarea rows={6} cols={20}/>
                <button className='btn'>submit</button>
        </form>
        
    </div>
  
  )
}

export default Form1;