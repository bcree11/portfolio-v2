import React, { Component } from 'react'

import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import NavBar from './components/NavBar'

import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <h1>Hello</h1>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
