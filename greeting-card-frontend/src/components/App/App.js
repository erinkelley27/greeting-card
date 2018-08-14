import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      to: null,
      from: null,
      message: null
    }
    this.greeting = this.greeting.bind(this)
  }
  greeting () {
    this.setState({
      to: data,
      from: data,
      message: data
    })
  }
  render () {
    return (
      <div className='greeting-card'>
        <h2>{this.state.to}</h2>
        <h2>{this.state.from}</h2>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}

export default App
