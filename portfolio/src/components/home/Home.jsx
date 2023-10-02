import React from 'react'
import profileImg from '../../assets/profile-img.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'

import {
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa'
import CV from '../../assets/cv.pdf'
import './home.css'

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__wrapper'>
        <div className='home__container container'>
          <p className='home__subtitle text-cs'>
            Hello, <span>& Welcome to</span>
          </p>

          <h1 className='home__title text-cs'>
            <span>Em</span>cent
          </h1>

          <p className='home__job'>
            <span className='text-cs'></span> <b>Front-End Web Developer</b>
          </p>

          <div className='home__img-wrapper'>
            <div className='home__banner'>
              <img
                src={profileImg}
                alt='profile-Image'
                className='home__profile'
              />
            </div>

            {/* <p className='home__data home__data-one'>
              <span className='text-lg'>
                2 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Years of <span>Experience</span>
              </span>
            </p>

            <p className='home__data home__data-two'>
              <span className='text-lg'>7</span>

              <span className='text-sm text-cs'>
                Completed <span>Projects</span>
              </span>
            </p> */}

            <img src={shapeOne} alt='' className='shape shape__1' />
            <img src={shapeTwo} alt='' className='shape shape__2' />
            <img src={shapeTwo} alt='' className='shape shape__3' />
          </div>

          <p className='home__text'>
            From Lagos, Nigeria. A Philosopher, Writer, Project Manager, Data Analyst, and Web
            Developer. Check out some of my intriguing projects to discover
            more about me if you're interested.
          </p>

          <div className='home__socials'>
            <a href='#' className='home__social-link'>
              <FaTwitter />
            </a>

            <a href='#' className='home__social-link'>
              <FaDribbble />
            </a>

            <a href='#' className='home__social-link'>
              <FaBehance />
            </a>

            <a href='#' className='home__social-link'>
              <FaFacebook />
            </a>

            <a
              href='https://github.com/CodeEmcent'
              target='_blank'
              className='home__social-link'
            >
              <FaGithub />
            </a>
          </div>

          <div className='home__btns'>
            <a download='' href={CV} className='btn text-cs'>
              Download CV
            </a>

            <a href='#skills' className='hero__link text-cs'>
              My Skills
            </a>
          </div>
        </div>

        <div className='section__deco deco__left'>
          <img src={shapeOne} alt='' className='shape' />
        </div>
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Development</span>
      </div>
    </section>
  )
}

export default Home
