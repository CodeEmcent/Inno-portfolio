import React from 'react'
import { cv } from '../../Data'
import Card from './Card'
import './resume.css'
import shapeOne from '../../assets/shape-1.png'

const Resume = () => {
  return (
    <section className='resume section' id='services'>
      <h2 className='section__title text-cs'>What I Do</h2>
      <p className='section__subtitle'>
        Products<span>&</span>
        <span></span> Services
      </p>

      <div className='resume__container container grid'>
        <div className='resume__group'>
          {/* <h3 className='resume__heading'>Education</h3> */}

          <div className='resume__items'>
            {cv.map((val, id) => {
              if (val.category === 'education') {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    read={val.read}
                    description={val.description}
                  />
                )
              }
            })}
          </div>
        </div>

        <div className='resume__group'>
          {/* <h3 className='resume__heading'>Experience</h3> */}

          <div className='resume__items'>
            {cv.map((val, id) => {
              if (val.category === 'experience') {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    read={val.read}
                    description={val.description}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>

      <div className='section__deco deco__right'>
        <img src={shapeOne} alt='' className='shape' />
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title bg__resume'>Services</span>
      </div>
    </section>
  )
}

export default Resume
