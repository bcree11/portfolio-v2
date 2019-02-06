import React, { Component } from 'react'

import {Footer} from 'react-materialize'

export default class MyFooter extends Component{
  render(){
    return(
      <footer class="page-footer flow-text light-blue darken-1" style={footerStyle}>
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h3 class="white-text">Brandon Cree</h3>
              <p class="white-text text-lighten-4">
                <a style={whiteIconStyle} href="mailto:b.marcus.cree@gmail.com">
                  <i class="zmdi zmdi-email"></i> b.marcus.cree@gmail.com{' | '}
                </a>
                <a style={whiteIconStyle} href="https://github.com/bcree11" target="_blank">
                  <i className="zmdi zmdi-github-box"></i> github.com/bcree11
                </a>{' | '}
                <a style={whiteIconStyle} href="https://www.linkedin.com/in/bcree/" target="_blank">
                  <i className="zmdi zmdi-linkedin-box"></i> linkedin.com/in/bcree
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

const footerStyle = {
  paddingBottom: '20px',
  textAlign: 'center',
}

const whiteIconStyle = {
  color: 'white',
  textTransform: 'none',
}
