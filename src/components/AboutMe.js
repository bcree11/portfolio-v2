import React, { Component } from 'react'

import {
  Row,
  Col,
  MediaBox,
  Card,
  CardPanel,
  CardTitle,
} from 'react-materialize'

// import '../stylesheets/AboutMe.css'

const AboutMe = (props) => {
  return(
    <div id='aboutMe' className='AboutMe' style={aboutMeStyle}>
        <div className="card-panel text" style={textContStyle}>
          <h3 style={titleStyle}>Who Am I?</h3>
          <hr/>
          <p className="text flow-text">
            Hi, my name is Brandon. I’m a student at LEARN Academy, where I’m studying the ins and outs of full stack web development after 4 years in sales in the beer industry. I’m a logical thinker who enjoys problem solving and building things out piece by piece.
          </p>
        </div>
    </div>
  )
}

export default AboutMe

let aboutMeStyle = {
  display: 'flex',
  justifyContent: 'center'
}

let titleStyle = {
  display: 'inline-block',
  margin: '0'
}

let textContStyle = {
  width: '60vw'
}
