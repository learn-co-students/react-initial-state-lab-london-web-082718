// your Bomb code here!

import React, { Component } from 'react';

export default  class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
      // this initialCount is defined in the index.js file - this is the props Bomb is inheriting 
    }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    
    return (
      <div>{message}</div> 
    )
  } 

} 