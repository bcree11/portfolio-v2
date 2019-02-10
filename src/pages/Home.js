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

import '../stylesheets/Masonry.css'

export default class Home extends Component{

  render(){
    return(
      <div>
        <Header/>
        <PicCard/>
        <AboutMe/>
        <div className='masonry-Homecont'>
          <div className='masonry-Home'>
            <div className='masonry-Homebrick'><Languages/></div>
            <div className='masonry-Homebrick'><Databases/></div>
            <div className='masonry-Homebrick'><Testing/></div>
            <div className='masonry-Homebrick'><Frameworks/></div>
            <div className='masonry-Homebrick'><OtherSkills/></div>
          </div>
        </div>
        <Portfolio/>
        <MyFooter/>
      </div>
    )
  }
}
