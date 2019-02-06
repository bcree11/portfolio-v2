import React, { Component } from 'react'

export default class Header extends Component{
  render(){
    return(
      <div style={bgStyle}>
        <span className='hide-on-small-only' style={titleStyle}>BRANDON CREE</span>
        <span className='show-on-small hide-on-med-and-up' style={titleStyle}>B.CREE</span>
          <div style={linkStyles}>
            <h4>Full-Stack Web Developer</h4>
            <div  style={{marginBottom: '1em'}}>
            <a href="https://github.com/bcree11" target="_blank">
              <i className="zmdi zmdi-github-box"></i>
            </a>{' | '}
            <a href="https://www.linkedin.com/in/bcree/" target="_blank">
              <i className="zmdi zmdi-linkedin-box"></i>
            </a>
            </div>
          </div>
      </div>
    )
  }
}

const bgStyle = {
  height: '92vh',
  backgroundImage: `url(${require("../img/beachSunset.jpg")})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: '50%',
  backgroundPositionY: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  lineHeight: '1',
}

const titleStyle = {
  color: 'white',
  fontSize: 'calc(4em + (50 - 4) * ((100vw - 300px) / (1600 - 300)))',
  fontWeight: 'bold',
  transform: 'scale(1,2)',
  marginBottom: '.4em',
}

const linkStyles = {
  fontSize: '2em',
  marginBottom: '3em'
}
