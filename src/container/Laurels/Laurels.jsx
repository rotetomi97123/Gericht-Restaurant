import React from 'react'
import './Laurels.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Laurels = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className="app__laurels-container">
        <div className="app__laurels-textbox">
          <div className="app__laurels-textbox-top">
            <SubHeading title="Awards & recognition" />
            <h1 className='headtext__cormorant '>Our Laurels</h1>
          </div>

          <div className='app__laurels-textbox-bottom1-2'>
              <div className="app__laurels-textbox-bottom_box1">
                <img  className="award"src={images.award02} alt="award" />
                <div className='app__laurels-textbox-bottom_box1-text'>
                  <h2 className='awardh2'>Bib Gourmond</h2>
                  <p className='award_p p__opensans'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>

              <div className="app__laurels-textbox-bottom_box1">
                <img  className="award"src={images.award01} alt="award" />
                <div className='app__laurels-textbox-bottom_box1-text'>
                  <h2 className='awardh2'>Rising Star</h2>
                  <p className='award_p p__opensans'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>

          </div>

          <div className='app__laurels-textbox-bottom3-4'>
              <div className="app__laurels-textbox-bottom_box1">
                <img  className="award"src={images.award05} alt="award" />
                <div className='app__laurels-textbox-bottom_box1-text'>
                  <h2 className='awardh2'>AA Hospitality </h2>
                  <p className='award_p p__opensans'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>

              <div className="app__laurels-textbox-bottom_box1">
                <img  className="award"src={images.award03} alt="award" />
                <div className='app__laurels-textbox-bottom_box1-text'>
                  <h2 className='awardh2'>Outstanding Chef</h2>
                  <p className='award_p p__opensans'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>

          </div>
          
        </div>

        <div className="app__laurels-imgbox">
          <img src={images.laurels} alt="food" /> 
        </div>
      </div>
      <img className='app__laurels-logo' src={images.logo} alt="logo" /> 
    </div>
  )
}

export default Laurels