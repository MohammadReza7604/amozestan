import Link from 'next/link'
import BreadCrumbTwo from '../../../components/common/BreadCrumbTwo'
import Layout from '../../../components/Layout'
import SlidingBox from '../../../components/questions/SlidingBox'

import data from '../../../data/subjects.json'

function SubjectId() {
  return (
    <Layout>
      <BreadCrumbTwo title="زیست" />
      <section className="container">
        <form class="faq-accordion my-5">
          <div class="accordion">
            {data[0].seasons.map((s, i) => (
              <SlidingBox key={i} header={s.name}>
                {s.parts.map((p, index) => (
                  <div className="season-parts">
                    <input
                      type="checkbox"
                      name={`s${i + 1}p${index + 1}`}
                      id={`s${i + 1}p${index + 1}`}
                    />
                    <label htmlFor={`s${i + 1}p${index + 1}`}>{p}</label>
                  </div>
                ))}
              </SlidingBox>
            ))}
          </div>
          <div className="w-fit me-auto">
            <Link
              href="/Questions/Study/test"
              type="submit"
              className="edu-btn btn-medium m-5 fs-2"
            >
              شروع آزمون
            </Link>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default SubjectId
