// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    generatedNum: 0,
  }

  onIncreaseNum = () => {
    const {generatedNum} = this.state
    if (generatedNum >= 0 && generatedNum < 100) {
      this.setState(prevState => ({
        generatedNum: prevState.generatedNum + Math.ceil(Math.random() * 100),
      }))
    }
  }

  render() {
    const {generatedNum} = this.state
    // const isBetweenZeroTOHun = generatedNum
    //   ?
    //   : null
    return (
      <div className="bg-main-container">
        <div className="random-container">
          <h1 className="title">Random Number</h1>
          <p className="pera">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="btn-sty"
              onClick={this.onIncreaseNum}
            >
              Generate
            </button>
          </div>
          <p className="number-sty">{generatedNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
