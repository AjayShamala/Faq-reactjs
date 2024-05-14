import FaqItem from '../FaqItem'

import './index.css'
const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-containerss">
      <div className="card-containerss">
        <ul className="card-con">
          <h1 className="heading">FAQs</h1>
          {faqsList.map(each => (
            <FaqItem key={each.id} faqsList={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
