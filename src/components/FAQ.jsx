import { useState, useRef } from 'react'

const FAQS = [
  {
    q: 'Who is Broker Bridge for?',
    a: 'Broker Bridge is designed for two user types: real estate brokers who want to list and manage properties, and property seekers looking to rent or buy. Brokers register with a verified account and publish listings, while seekers browse, filter, and contact brokers directly through the app.',
  },
  {
    q: 'How do I list a property on Broker Bridge?',
    a: 'After registering as a broker, go to the "Post" tab in the app. Fill in property details — BHK type, furnishing, price, location, amenities — and upload photos. Save as a draft first, then submit for admin verification. Once verified, your listing goes live instantly.',
  },
  {
    q: 'How does the property verification process work?',
    a: 'When you submit a listing it enters "Unverified" status. Our admin team reviews it for accuracy, completeness, and quality. Once approved, it moves to "Verified" and goes live. Rental listings remain active for 30 days and can be renewed with a single tap.',
  },
  {
    q: 'Is Broker Bridge free to use?',
    a: 'The Broker Bridge app is completely free to download and use. Brokers receive a quota of listings they can publish. Property seekers can browse, search, save favorites, and contact brokers at no cost. We may introduce optional premium features in the future, but our core platform remains free.',
  },
  {
    q: 'What property types are supported?',
    a: 'Broker Bridge supports all major residential types: Flats/Apartments (1RK to 4+BHK), Row Houses/Bungalows, Studio Apartments, and Penthouses/Duplexes. All property types can be listed for either Rent or Sale with flexible filters for seekers.',
  },
  {
    q: 'How can I contact a broker about a property?',
    a: "Every verified listing on Broker Bridge displays the broker's full contact details including name and phone number. You can call or message the broker directly from the property detail page within the app — no middleman, no delay.",
  },
]

const Chevron = () => (
  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

function FAQItem({ question, answer, isOpen, onToggle }) {
  const answerRef = useRef(null)

  return (
    <div className="faq-item">
      <button className="faq-q" aria-expanded={isOpen} onClick={onToggle}>
        {question}
        <Chevron />
      </button>
      <div
        className="faq-a"
        ref={answerRef}
        style={{ maxHeight: isOpen ? `${answerRef.current?.scrollHeight ?? 500}px` : '0' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-container">
        <div className="section-header reveal" data-anim="fade-up">
          <span className="section-badge">FAQ</span>
          <h2>Frequently Asked <span className="text-primary">Questions</span></h2>
          <p>Everything you need to know about Broker Bridge. Can't find an answer? Reach out to our support team.</p>
        </div>
        <div className="faq-list reveal" data-anim="fade-up" style={{ '--delay': '0.1s' }}>
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
