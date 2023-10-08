import React from 'react'
import './partner.css'
import anadeus from '../../assets/anadeus.png'
import sabre from '../../assets/sabre.png'
import galileo from '../../assets/galileo.png'

function Partner() {
  return (
    <div className='partner-container'>
          <h2 className='partner-hadding'>Partner</h2>
          <h1 className='hadding'>Our Key Partnerships</h1>
          <div className="partner-images">
              <img src={anadeus} alt="" />
              <img src={galileo} alt="" />
               <img src={sabre} alt="" />
          </div>
          <div className="subscribe-form">
              <div className="subscribe-form-content">
                <div className="subscribe-content">
                  <h2 style={{color : "white"}}>Subscribe To Our</h2>
                  <h2 style={{color : "green"}}>Newsletter</h2>
                  <p style={{color : "white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              <div className="input-form">
                      <div className="form">
                          <input type="text" placeholder='Enter Your Email Address' />
                          <input type="submit"  />
                  </div>
              </div>
             </div>
          </div>
    </div>
  )
}

export default Partner