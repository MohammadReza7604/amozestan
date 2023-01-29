import { useState } from 'react'
import Layout from '../../../components/Layout'

function test() {
  const [show, setShow] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const q = [
    {
      id: '1',
      question: 'کدام یک از گزینه های زیر خروجی درستی است؟',
      content:
        "x = 'Amoozestan Quiz'\n def amoozestan():\n print(x)\n amoozestan()",
      options: ['Amoozestan Quiz', 'Apple', 'Amoozestan', 'amoozestan'],
      answer: 'Amoozestan Quiz',
    },
    {
      question: 'سوال',
      options: ['Amoozestan Quiz', 'Apple', 'Amoozestan', 'amoozestan'],
      answer: 'Amoozestan Quiz',
    },
  ]
  const handleClick = (e) => {
    e.target.innerHTML === q[0].answer
      ? (e.target.style.backgroundColor = '#00bc77')
      : (e.target.style.backgroundColor = '#EE4A62')
  }
  return (
    <Layout>
      <section className="tab-content faq-page-tab-content h-25 py-5 w-75 mx-auto">
        <div className="faq-accordion my-5">
          <div className="accordion">
            <div className="accordion-item">
              <h5 className="accordion-header ratio-1x1">
                <button
                  class={`accordion-button d-flex flex-column text-end p-5 ratio-1x1 ${
                    !show && 'collapsed'
                  }`}
                  type="button"
                  onClick={() => setShow((p) => !p)}
                >
                  <div className="w-100">{q[0].id + '.' + q[0].question}</div>
                  <pre className="text-start mt-4 mb-5 w-100">
                    {q[0].content}
                  </pre>
                </button>
              </h5>
              <div
                id="question-26"
                className={`accordion-collapse collapse ${show && 'show'}`}
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body row m-0 p-4">
                  {q[0].options.map((o, i) => (
                    <button
                      key={i}
                      className="options"
                      disabled={showAnswer}
                      onClick={handleClick}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-danger rounded p-2 btn fs-2 me-5">
          اتمام آزمون
        </button>
      </section>
    </Layout>
  )
}

export default test
