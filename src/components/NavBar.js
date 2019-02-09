import React, { Component } from 'react'

export default class NavBar extends Component{

  render(){
    return(
      <div className='navbar-fixed' style={navBarStyle}>
        <nav style={navBarStyle}>
          <div className="nav-wrapper light-blue darken-1">
            <a href="#" className="brand-logo center">{this.props.title}</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#aboutMe">About Me</a></li>
              <li><a href="badges.html">Skills</a></li>
              <li><a href="collapsible.html">Portfolio</a></li>
              <li><a href="collapsible.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

const navBarStyle = {
  height: '8vh',
  textTransform: 'none',
  marginBottom: '0'
}
