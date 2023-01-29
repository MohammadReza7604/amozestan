import Layout from '../components/Layout'
import Link from 'next/link'
import MouseMove from '../components/animation/MouseMove'
import BreadCrumbTwo from '../components/common/BreadCrumbTwo'
import Image from 'next/image'

export default function Custom404() {
  return (
    <Layout>
      <BreadCrumbTwo title="خطای 404" />
      <section className="section-gap-equal error-page-area">
        <div className="container">
          <div className="edu-error">
            <div className="thumbnail">
              <Image
                width={598}
                height={286}
                src="/images/others/404.png"
                alt="404 Error"
              />
              <ul className="shape-group">
                <MouseMove
                  addClassName="shape-1"
                  dataDepth="2"
                  imgSrc="/images/about/shape-25.png"
                />
                <MouseMove
                  addClassName="shape-2"
                  dataDepth="-2"
                  imgSrc="/images/about/shape-15.png"
                />
                <MouseMove
                  addClassName="shape-3"
                  dataDepth="2"
                  imgSrc="/images/about/shape-13.png"
                />
                <MouseMove
                  addClassName="shape-4"
                  dataDepth="-2"
                  imgSrc="/images/counterup/shape-02.png"
                />
              </ul>
            </div>
            <div className="content">
              <h2 className="title">صفحه یافت نشد - 404</h2>
              <h4 className="subtitle">صفحه مورد نظر شما وجود ندارد.</h4>
              <Link href="/" className="edu-btn">
                بازگشت به صفحه اصلی
                <i className="icon-west"></i>
              </Link>
            </div>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1">
            <Image
              width={660}
              height={220}
              src="/images/others/map-shape-2.png"
              alt="Shape"
            />
          </li>
        </ul>
      </section>
    </Layout>
  )
}
