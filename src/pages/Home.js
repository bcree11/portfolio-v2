import React, { Component } from 'react'

import Header from '../components/Header'
import PicCard from '../components/PicCard'
import AboutMe from '../components/AboutMe'
import Languages from '../components/Languages'
import Frameworks from '../components/Frameworks'
import OtherSkills from '../components/OtherSkills'
import MyFooter from '../components/MyFooter'

export default class Home extends Component{

  render(){
    return(
      <div>
        <Header/>
        <PicCard/>
        <AboutMe/>
        <Languages/>
        <Frameworks/>
        <OtherSkills/>
        <MyFooter/>
      </div>
    )
  }
}
