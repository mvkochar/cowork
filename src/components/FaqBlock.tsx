import FaqItemslist from "../db/FaqItemsList"
import FaqItem from "./FaqItem/FaqItem"

const FaqBlock = () => {
  return (
    <section className='home-faq d-f'>
        <div>
          <h4 className="home-faq-above">Frequently Asked Questions</h4>
          <h2 className="h2-title">Your Roadmap to Coworking Clarity</h2>
          <p className="home-faq-desc">
            Frequently asked questions ordered by popularity.
            Remember that if the visitor has not committed to the
            call to action, they may still have questions (doubts)
            that can be answered.
          </p>
        </div>
        <div className="home-faq-box d-f">
          {
            FaqItemslist.map((faq) => {
              return (
                <FaqItem
                  key={`faq${faq.id}`}
                  {...faq}
                />
              )
            })
          }
        </div>
      </section>
  )
}

export default FaqBlock