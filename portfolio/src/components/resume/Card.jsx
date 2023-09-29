import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Pricing from '../../pages/pricing/Pricing'

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className='resume__item'>
      <div className='resume__header' onClick={() => setShowInfo(!showInfo)}>
        <h3 className='resume__title'>{props.title}</h3>
        <span className='resume__icon'>{showInfo ? '-' : '+'}</span>
      </div>

      <div className={`${showInfo ? 'show-content' : ''} resume__content`}>
        <div className='resume__date-title'>
          <h3 className='resume__subtitle'>{props.subtitle}</h3>
          <span className='resume__date text-cs'>
            <Link to='pricing' element={<Pricing />} className='link'>
              {props.read}
              <FaArrowRight className='link__icon' />
            </Link>
          </span>
        </div>

        <p className='resume__description'>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
