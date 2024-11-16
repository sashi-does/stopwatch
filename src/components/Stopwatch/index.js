import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = {minutes: 0, seconds: 0}
  }

  componentWillUnmount() {
    this.stopTime()
  }

  startTime = () => {
    this.intervalId = setInterval(this.tick, 1000)
  }

  stopTime = () => {
    clearInterval(this.intervalId)
  }

  reset = () => {
    this.stopTime()
    this.setState({
      seconds: 0,
      minutes: 0,
    })
  }

  tick = () => {
    this.setState(prevState => {
      let {seconds, minutes} = prevState
      if (seconds === 60) {
        seconds = 0
        minutes += 1
      }
      return {
        seconds: seconds + 1,
        minutes,
      }
    })
  }

  render() {
    const {seconds, minutes} = this.state
    let secondsFormat = seconds
    let minutesFormat = minutes
    if (seconds < 10) secondsFormat = `${0}${seconds}`
    if (minutes < 10) minutesFormat = `${0}${minutes}`
    return (
      <div className="stopwatch-page">
        <div className="timer-section">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-display">
            <div className="timer-top-section">
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="timer-section-heading">Timer</p>
            </div>
            <h1 className="timer">
              {minutesFormat}:{secondsFormat}
            </h1>
            <div className="buttons-section">
              <button
                onClick={this.startTime}
                type="button"
                className="button start"
              >
                Start
              </button>
              <button
                onClick={this.stopTime}
                type="button"
                className="button stop"
              >
                Stop
              </button>
              <button
                onClick={this.reset}
                type="button"
                className="button reset"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
