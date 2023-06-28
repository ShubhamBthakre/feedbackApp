// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onClickEmoji = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedbackQueContainer">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              </button>
              <br />
              <p className="emoji-name">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank you</h1>
        <p className="description">
          We will use your feedback to improve customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackGiven
            ? this.thankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
