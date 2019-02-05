import React, { Component } from 'react'

export default class NavBar extends Component{

  render(){
    return(
      <div className='navbar-fixed'>
        <nav>
          <div className="nav-wrapper light-blue darken-1">
            <a style={navBarStyle} href="#" className="brand-logo center">{this.props.title}</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

const navBarStyle = {
  textTransform: 'none',
}
