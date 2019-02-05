import React, { Component } from 'react'

export default class Header extends Component{
  render(){
    return(
      <div style={bgStyle}>
        <div style={titleStyle}>BRANDON CREE</div>
          <div style={linkStyles}>
          <h4>Full-Stack Web Developer</h4>
            <i className="zmdi zmdi-github-box"></i>{' '}
            <i className="zmdi zmdi-linkedin-box"></i>
          </div>
      </div>
    )
  }
}

const bgStyle = {
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${require("../img/beachSunset.jpg")})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}

const titleStyle = {
  color: 'white',
  fontSize: 'calc(4em + (50 - 4) * ((100vw - 300px) / (1600 - 300)))',
  fontWeight: 'bold',
  transform: 'scale(1,2.5)',
  marginBottom: '.4em',
}

const linkStyles = {
  fontSize: '2em',
  lineHeight: '1',
  marginBottom: '3em'
}
