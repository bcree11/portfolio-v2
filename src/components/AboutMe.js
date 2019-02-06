import React, { Component } from 'react'

import {
  Row,
  Col,
  MediaBox,
  Card,
  CardPanel,
  CardTitle,
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
          <Col className='hide-on-med-and-down' s={1}></Col>
          <Col l={3} m={10}>
            <div class="card">
              <div class="card-image">
                <img src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/StoryArc/1561/1561._SX400_QL80_TTD_.jpg"/>
              </div>
            </div>
          </Col>
          <Col className='hide-on-med-and-down' s={1}></Col>
          <Col l={6} m={10} style={textStyle}>
            <CardPanel>
              <h3 style={titleStyle}>Who Am I?</h3>
              <hr/>
              <p className="flow-text">
                Hi, my name is Brandon. I’m a student at LEARN Academy, where I’m studying the ins and outs of full stack web development after 4 years in sales in the beer industry. I’m a logical thinker who enjoys problem solving and building things out piece by piece.
              </p>
            </CardPanel>
          </Col>
          <Col className='hide-on-med-and-down' s={1}></Col>
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
  // height: '25vw',
  // border: '2px solid black'
}
