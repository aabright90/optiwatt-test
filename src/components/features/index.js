import React from 'react'
import Feature from './feature'

import './styles.css'

const Features = ({ data }) => {

    const renderCards = () => {
        if(data){
            return data.map(({ icon, title, text }, index) => {
                return <Feature 
                    key={index} 
                    icon={icon} 
                    title={title} 
                    text={text} 
                    index={index} 
                />
            })
        }
    }

  return (
    <section className="features">
        <div className="heading-container">
           <div className="heading">
                <h4>F E A T U R E S</h4>
           </div>
            <div className="sub-heading">
                <h1>Here is more of what <br/> it can do for you</h1>
            </div>
            <div className="heading-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do nisi <br/> ut aliquip ex ea commodo eiusmod tempor incididunt</p>
            </div>
        </div>
        <div className="feature-cards">
            {renderCards()}
        </div>
        <div className="register-btn">
            <button id="register-btn">Register your Tesla</button>
        </div>
    </section>
  )
}

export default Features