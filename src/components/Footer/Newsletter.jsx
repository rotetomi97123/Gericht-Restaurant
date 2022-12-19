import React from 'react'
import './Newsletter.css'
import {SubHeading} from '../../components'

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-overlay"/>
      <div className="app__newsletter-container">
        <div className="app__newsletter-subheading">
          <SubHeading title="Newsletter" />
        </div>
        <h1 className='app__newsletter-h1 headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='neverMissUpdates p__opensans'>And never miss latest Updates!</p>
          <div className="app__newsletter-input">
            <input type="email" placeholder="Email Address" className='app__newsletter-email' />
            <button type='button' className='custom__button'>Subscribe</button>
          </div>
        </div>

    </div>
  )
}

export default Newsletter