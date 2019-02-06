import React, { Component } from 'react'

import {
  Row,
  Col,
  Card,
  CardPanel,
  CardTitle,
} from 'react-materialize'

export default class Skills extends Component{
  render(){
    return(
      <div>
        <Row style={titleContStyle}>
          <Col className='left' s={12} style={{border: '2px solid black'}}>
            <h1 style={titleStyle}>Tech Skills</h1>
          </Col>
        </Row>
        <Row>
        <Col s={1}></Col>
          <Col s={10}>
            <CardPanel>
              <h3 style={titleStyle}>Languages</h3>
              <hr/>
            </CardPanel>
          </Col>
          <Col s={1}></Col>
        </Row>
        <Row>
        <Col s={1}></Col>
          <Col s={10}>
            <CardPanel>
              <h3 style={titleStyle}>Frameworks</h3>
              <hr/>
            </CardPanel>
          </Col>
          <Col s={1}></Col>
        </Row>
        <Row>
        <Col s={1}></Col>
          <Col s={2}>
            <CardPanel>
              <h3 style={titleStyle}>Databases</h3>
              <hr/>
            </CardPanel>
          </Col>
          <Col s={1}></Col>
          <Col s={2}>
            <CardPanel>
              <h3 style={titleStyle}>Testing</h3>
              <hr/>
            </CardPanel>
          </Col>
          <Col s={1}></Col>
          <Col s={4}>
            <CardPanel>
              <h3 style={titleStyle}>Tools</h3>
              <hr/>
            </CardPanel>
          </Col>
          <Col s={1}></Col>
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
