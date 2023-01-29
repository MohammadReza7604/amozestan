import Link from 'next/link'
import MouseMove from '../animation/MouseMove'

function CTA({ addClassName, buttonLink, btnClass, buttonText, title }) {
  return (
    <div
      className={`edu-cta-banner-area bg-image home-one-cta-wrapper ${
        addClassName || ''
      }`}
      style={{ margin: '115px 0' }}
    >
      <div className="container">
        <div className="edu-cta-banner">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="section-title section-center"
                data-aos-delay="150"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h2 className="title">
                  مهارت های خود را با
                  <span className="color-secondary"> آموزستان </span>
                  ارتقا دهید
                </h2>
                <Link
                  href={buttonLink || '/'}
                  className={`edu-btn ${btnClass} `}
                >
                  {buttonText || 'همین حالا شروع کنید'}{' '}
                  <i className="icon-west"></i>
                </Link>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <MouseMove
              addClassName="shape-01"
              dataDepth="2.5"
              imgSrc="/images/cta/shape-10.png"
            />
            <MouseMove
              addClassName="shape-02"
              dataDepth="-2.5"
              imgSrc="/images/cta/shape-09.png"
            />
            <MouseMove
              addClassName="shape-03"
              dataDepth="-2"
              imgSrc="/images/cta/shape-08.png"
            />
            <MouseMove
              addClassName="shape-04"
              dataDepth="2"
              imgSrc="/images/about/shape-13.png"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CTA
