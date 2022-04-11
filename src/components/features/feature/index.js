import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

const Feature = ({ icon, title, text, index }) => {
  return (
    <div className="feature">
        <div className="icon-container">
            <FontAwesomeIcon size="2x" icon={icon} />
        </div>
        <div className="text-container">
            <h5>{title} {index + 1}</h5>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature