import React, { Component } from 'react'

import Header from '../components/Header'

export default class Home extends Component{

  render(){
    return(
      <div>
        <Header/>
        <div style={{height: '300vh'}}></div>
      </div>
    )
  }
}
