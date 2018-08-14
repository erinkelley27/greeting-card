import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      to: ' ',
      from: ' ',
      message: ' '
    }
  }
  render () {
    return (
      <div>
          To: <input type='text' /><br />
          From: <input type='text' /><br />
          Message: <input type='text' /><br />
        <input type='submit' value='Submit' /><br />
      </div>
    )
  }
}

export default App
