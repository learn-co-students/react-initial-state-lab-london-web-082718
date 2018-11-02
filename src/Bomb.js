// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {secondsLeft: this.props.initialCount}
    }
    
    render(){
        if (this.state.secondsLeft == 0) {
            return 'Boom!'
        } else {
        return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
}

export default Bomb;