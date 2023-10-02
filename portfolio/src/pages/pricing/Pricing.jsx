import React from 'react'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import Header from '../../components/header/Header'
import './pricing.css'

const Pricing = () => {
  return (
    <>
      <Header />
      <section className='pricing section' id='pricing'>
        <h2 className='section__title text-cs'>Pricing</h2>
        <p className='section__subtitle'>
          My <span>Price Board</span>
        </p>

        <div className='pricing__container container grid'>
          <div className='pricing__item card card-one'>
            <span className='pricing__subtitle text-cs'>Hourly Basis</span>
            <h3 className='pricing__price'>
              19 <span>$</span>
              <em>Hour</em>
            </h3>
            <p className='pricing__description'>
              For urgent craft and design of an interesting brand with a unique visual identity to make ou standout and developing a website for personal or cooperate
              business.
            </p>

            <ul className='pricing__list'>
              <li className='list__item'>
                <FaCheck className='list__icon' />
                <span>Brand Design</span>
              </li>

              <li className='list__item'>
                <FaCheck className='list__icon' />
                <span>Web Development</span>
              </li>

              <li className='list__item'>
                <del>Advertising</del>
              </li>

              <li className='list__item'>
                <del>Photograph</del>
              </li>
            </ul>

            <a href='' className='btn pricing__btn text-cs'>
              Start Project
              <FaArrowRight className='pricing__btn-icon' />
            </a>

            <img src={shapeTwo} alt='' className='shape c__shape' />
          </div>

          <div className='pricing__item-wrapper'>
            <span className='pricing__label text-cs'>Popular</span>
            <div className='pricing__item card card-one'>
              <span className='pricing__subtitle text-cs'>Freelancing</span>
              <h3 className='pricing__price'>
                95 <span>$</span>
                <em>Week</em>
              </h3>
              <p className='pricing__description'>
                Are you interested in crafting and designing an interesting
                brand's with unique visual identity or developing a website for
                personal or cooperate business or advertising your presence
                on/through Emcent?
              </p>

              <ul className='pricing__list'>
                <li className='list__item'>
                  <FaCheck className='list__icon' />
                  <span>Brand Design</span>
                </li>

                <li className='list__item'>
                  <FaCheck className='list__icon' />
                  <span>Web Development</span>
                </li>

                <li className='list__item'>
                  <FaCheck className='list__icon' />

                  <span>Advertising</span>
                </li>

                <li className='list__item'>
                  <del>Photograph</del>
                </li>
              </ul>

              <a href='' className='btn pricing__btn text-cs'>
                Start Project
                <FaArrowRight className='pricing__btn-icon' />
              </a>

              <img src={shapeTwo} alt='' className='shape c__shape' />
            </div>
          </div>

          <div className='pricing__item card card-one'>
            <span className='pricing__subtitle text-cs'>Full Time</span>
            <h3 className='pricing__price'>
              430 <span>$</span>
              <em>Monthly</em>
            </h3>
            <p className='pricing__description'>
              For crafting and designing unique brands or developing a website
              for personal or cooperate business or advertising your presence
              on/through Emcent or covering your event or managing your visual
              archive?
            </p>

            <ul className='pricing__list'>
              <li className='list__item'>
                <FaCheck className='list__icon' />
                <span>Brand Design</span>
              </li>

              <li className='list__item'>
                <FaCheck className='list__icon' />
                <span>Web Development</span>
              </li>

              <li className='list__item'>
                <FaCheck className='list__icon' />
                <span>Advertising</span>
              </li>

              <li className='list__item'>
                <FaCheck className='list__icon' />
                <span>Photograph</span>
              </li>
            </ul>

            <a href='' className='btn pricing__btn text-cs'>
              Start Project
              <FaArrowRight className='pricing__btn-icon' />
            </a>

            <img src={shapeTwo} alt='' className='shape c__shape' />
          </div>
        </div>

        <div className='section__deco deco__left'>
          <img src={shapeOne} alt='' className='shape' />
        </div>

        <div className='section__bg-wrapper'>
          <span className='bg__title'>Pricing</span>
        </div>
      </section>
    </>
  )
}

export default Pricing
