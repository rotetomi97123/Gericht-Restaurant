import React from 'react'
import './FooterOverlay.css'
import { SubHeading } from '../../components'
import { FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'

const FooterOverlay = () => {
  return (
    <div className='app__FooterOverlay'>
        <div className="app__FooterOverlay-contact">
            <p className='app__FooterOverlay-p p__cormorant'>Contact Us</p>
            <p className='p__opensans' style={{color:"#AAA"}}>9 W 53rd St, New York, NY 10019, USA</p>
            <p  className='p__opensans'style={{color:"#AAA"}}>+1 212-344-1230 +1 212-555-1230</p>
        </div>
        <div className="app__FooterOverlay-gericht">
          <h1 className='app__FooterOverlay-gericht_h1' >Gerícht</h1>
          <p className='app__FooterOverlay-gericht-p2 p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <SubHeading />
          <div className="app__FooterOverlay-gericht-logos">
            <div className="app__FooterOverlay-gericht-logo">
              <FaFacebookF />
            </div>
            <div className="app__FooterOverlay-gericht-logo">
              <FiTwitter />
            </div>
            <div className="app__FooterOverlay-gericht-logo">
              <FiInstagram />
            </div>
          </div>
          <p className='app__FooterOverlay-rights p__opensans' style={{color:"#AAA" , marginTop:"5rem"}}>2021 Gerícht. All Rights reserved.</p>
        </div>
        <div className="app__FooterOverlay-working">
          <p className='p__opensans' style={{paddingBottom:"1rem", marginTop:"2rem"}}>Working Hours</p>
          <p className='app__FooterOverlay-working-p1 p__opensans'  >Monday-Friday: 08:00 am -12:00 am</p>
          <p className='app__FooterOverlay-working-p2 p__opensans'  >Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
        <p className='app__FooterOverlay-rights-mobile p__opensans' style={{color:"#AAA" , marginTop:"5rem"}}>2021 Gerícht. All Rights reserved.</p>

    </div>
  )
}

export default FooterOverlay