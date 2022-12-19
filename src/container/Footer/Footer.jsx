import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components'
import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer  app__bg '>
      <Newsletter />
      <FooterOverlay />
    </div>
  )
}

export default Footer