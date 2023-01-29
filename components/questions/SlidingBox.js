import Image from 'next/image'
import { useState } from 'react'

function SlidingBox({ children, header }) {
  const [show, setShow] = useState(false)
  return (
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button
          className={`accordion-button ${!show && 'collapsed'}`}
          type="button"
          onClick={() => setShow((p) => !p)}
        >
          {header}
        </button>
      </h5>
      <div
        id="question-26"
        className={`accordion-collapse collapse ${show && 'show'}`}
        data-bs-parent="#faq-accordion"
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  )
}

export default SlidingBox
