import React from 'react'
import './Chef.css'
import {images} from '../../constants'
import {SubHeading} from '../../components'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__chef-container">
        <div className="app__chef-img">
          <img src={images.chef} />
        </div>
        <div className="app__chef-text">
            <SubHeading title="Chef’s Word" />
            <h1 className='app__chef-title headtext__cormorant'>What we believe in</h1>
            <p className='lorem p__opensans'><span className='span__quote'><img className="quote"src={images.quote} alt="quote"/></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            <h2 className='app__chef-name'>Kevin Luo</h2>
            <h4 className='lorem p__opensans'>Chef & Founder</h4>
            <img className='app__chef-sign' src={images.sign} alt="sign"/>
        </div>
      </div>
    </div>
  )
}

export default Chef