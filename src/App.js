import React, { Component } from 'react'

import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import NavBar from './components/NavBar'

import Home from './pages/Home'

export default class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    pageWindow: window,
    checkScroll: null,
    title: 'BRANDON CREE',
  }
}

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let {pageWindow, checkScroll, title}=this.state
    let before = checkScroll
    this.setState({checkScroll: pageWindow.scrollY})
    if(before < this.state.checkScroll){
      this.setState({title: 'BRANDON CREE'})
    } else {
      this.setState({title: 'b.marcus.cree@gmail.com'})
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar title={this.state.title}/>
          <Switch>
            <Route path='/' exact render={(props) => <Home/>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
