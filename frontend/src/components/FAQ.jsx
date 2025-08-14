import { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const faqs = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur. Leo at est sit fermentum?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tortor consequat sit nibh pharetra magna varius. Semper eget duis at tellus at urna condimentum mattis pellentesque. Viverra sit massa dolor."
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur. Tortor posuere interdum est?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tortor consequat sit nibh pharetra magna varius. Semper eget duis at tellus at urna condimentum mattis pellentesque."
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tortor consequat sit nibh pharetra magna varius. Semper eget duis at tellus at urna condimentum mattis pellentesque."
    }
  ]

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-12">
          Frequently asked questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="font-semibold text-textPrimary pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-primary flex-shrink-0">
                  {openItems[faq.id] ? '−' : '+'}
                </span>
              </button>
              
              {openItems[faq.id] && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-textLight leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ