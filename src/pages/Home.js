import React, { Component } from 'react'

import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import MyFooter from '../components/MyFooter'

export default class Home extends Component{

  render(){
    return(
      <div>
        <Header/>
        <AboutMe/>
        <MyFooter/>
      </div>
    )
  }
}
