import {Component} from 'react'
import './index.css'
const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minuImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
class FaqItem extends Component {
  state = {isActive: false}
  renderFaqApp = () => {
    const {faqsList} = this.props
    const {answerText} = faqsList
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="horizontal-container" />
          <p className="para">{answerText}</p>
        </div>
      )
    }
  }
  toggleFaq = () => {
    this.setState(previous => ({isActive: !previous.isActive}))
  }
  renderActiveImage = () => {
    const {isActive} = this.state
    const imageUrl = isActive ? minuImage : plusImage
    const altUrl = isActive ? 'minus' : 'plus'
    return (
      <div className="div-container">
        <button className="button-container" onClick={this.toggleFaq}>
          <img src={imageUrl} alt={altUrl} className="image" />
        </button>
      </div>
    )
  }
  render() {
    const {faqsList} = this.props
    const {questionText} = faqsList
    return (
      <li className="bg-container">
        <div className="containers">
          <h1 className="main-heading">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderFaqApp()}
      </li>
    )
  }
}
export default FaqItem
