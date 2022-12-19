import React from 'react'
import { images } from '../../constants'
import { SubHeading } from '../../components'


const FindUs = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant'style={{paddingBottom:"3rem"}} >Find Us</h1>
        <p className='p__opensans' style={{color:"var(--color-grey)",paddingBottom:"2rem"}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{color:"var(--color-golden)",paddingBottom:"1rem"}}>Opening Hours</p>
        <p className='p__opensans' style={{paddingBottom:"0.5rem"}}>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans' style={{paddingBottom:"4rem"}}>Sat - Sun: 10:00 am - 03:00 am</p>
        <button type='button' className='custom__button'>Visit Us</button>

      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  )
}

export default FindUs