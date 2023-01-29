import Image from 'next/image'
import Link from 'next/link'
import BreadCrumbTwo from '../../../components/common/BreadCrumbTwo'
import Layout from '../../../components/Layout'
import data from '../../../data/subjects.json'

function Index() {
  return (
    <Layout>
      <BreadCrumbTwo title="سبد خرید" />
      <section className="container p-5">
        <h3 className="mt-4 me-5 pe-5">مبحث مورد نظر خود را انتخاب کنید :</h3>
        <div className="mx-auto">
          {data.map((s, i) => (
            <Link key={i} href="/Questions/Quiz/SubjectId" className="subject">
              <div>
                {s.icon && (
                  <Image
                    src={`/images/subjects/${s.icon + '.svg'}`}
                    width={50}
                    height={50}
                    alt={s.icon}
                  />
                )}
                <span className="mx-5">{s.name}</span>
              </div>
              <button className="btn fs-1 text-white">
                <i className="icon-west" />
              </button>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
