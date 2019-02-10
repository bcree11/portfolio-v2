import React, { Component } from 'react'

import Header from '../components/Header'
import PicCard from '../components/PicCard'
import AboutMe from '../components/AboutMe'
import Languages from '../components/Languages'
import Frameworks from '../components/Frameworks'
import Databases from '../components/Databases'
import Testing from '../components/Testing'
import OtherSkills from '../components/OtherSkills'
import Portfolio from '../components/Portfolio'
import MyFooter from '../components/MyFooter'

import '../stylesheets/Home.css'

export default class Home extends Component{

  render(){
    return(
      <div>
        <Header/>
        <PicCard/>
        <AboutMe/>
        <div className='masonry-cont'>
          <div className='masonry'>
            <div className='masonry-brick'><Languages/></div>
            <div className='masonry-brick'><Databases/></div>
            <div className='masonry-brick'><Testing/></div>
            <div className='masonry-brick'><Frameworks/></div>
            <div className='masonry-brick'><OtherSkills/></div>
          </div>
        </div>
        <Portfolio/>
        <MyFooter/>
      </div>
    )
  }
}
