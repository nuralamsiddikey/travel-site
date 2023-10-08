import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className='footer'>
          <section>
              <img src={logo} alt="" width="100px"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam, est commodi eaque odio vero dolore ut ipsa. Harum obcaecati quam repellendus similique, ullam placeat? Aut assumenda illum impedit quibusdam?</p>
              <br />
              <h3>Follow Us</h3>
              <div className="icons">
                  icon
              </div>
          </section>
          <section style={{paddingLeft: "4rem" }}>
              <h3>Products</h3>
              <br />
              <div style={{lineHeight: "30px" }}>
                <p>Web Application</p>
                <p>Mobile Application</p>
                <p>Travel API Solutions</p>
                <p>Management Software</p>
                <p>Web Application</p>
              </div>
              
          </section>
          <section style={{paddingLeft: "4rem" }}>
              <h3>Resources</h3>
              <br />
              <div style={{lineHeight: "30px" }}>
                 <p>Blogs</p>
                 <p>Tesimonials</p>
                 <p>Complete Products</p>
             </div>
           
              
          </section>
          <section style={{paddingLeft: "4rem", lineHeight: "30px" }}>
              <div>
                  <i>icon</i>
                  <span>siyamkkg13@gmail.com</span>
              </div>
               <div>
                  <i>icon</i>
                  <span>+880019000000</span>
              </div>
               <div>
                  <i>icon</i>
                  <span>Dhaka, Bangladesh</span>
              </div>
              <h5>Privacy</h5>
              <p>Terms & Conditions</p>
              
          </section>
    </div>
  )
}

export default Footer