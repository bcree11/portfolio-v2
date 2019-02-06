import React, { Component } from 'react'

import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import MyFooter from '../components/MyFooter'
import Skills from '../components/Skills'

export default class Home extends Component{

  render(){
    return(
      <div>
        <Header/>
        <AboutMe/>
        <Skills/>
        <MyFooter/>
      </div>
    )
  }
}
