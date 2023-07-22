// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeNumber = () => {
    const getRandom = Math.ceil(Math.random() * 100)
    this.setState({count: getRandom})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="count">Random Number</h1>
        <p className="para">
          Generate a random number in the range of 0 to 100>
        </p>
        <button className="button" onClick={this.changeNumber}>
          Generate
        </button>
        <p className="para">{count}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
