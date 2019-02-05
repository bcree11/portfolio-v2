import React, { Component } from 'react'

import {
  Row,
  Col,
  MediaBox
} from 'react-materialize'

export default class AboutMe extends Component{
  render(){
    return(
      <div>
        <Row style={titleContStyle}>
          <Col className='left' s={12} style={{border: '2px solid black'}}>
            <h1 style={titleStyle}>About Me</h1>
          </Col>
        </Row>
        <Row>
            <MediaBox className='left' style={{border: '2px solid black', marginLeft: '16dp'}}src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/StoryArc/1561/1561._SX400_QL80_TTD_.jpg" caption="Brandon Cree" width="25%"/>
          <Col className='right' s={8} style={textStyle}>
            <h3 style={titleStyle}>Who Am I?</h3>
            <hr/>
            <p className="flow-text">
              Hi, my name is Brandon. I’m a student at LEARN Academy, where I’m studying the ins and outs of full stack web development after 4 years in sales in the beer industry. I’m a logical thinker who enjoys problem solving and building things out piece by piece.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

const titleContStyle = {
  display: 'inline-block'
}

const titleStyle = {
  display: 'inline-block',
  margin: '0'
}

const textStyle = {
  height: '25vw',
  border: '2px solid black'
}
