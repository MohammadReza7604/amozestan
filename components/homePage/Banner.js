import Image from 'next/image'
import Link from 'next/link'
import MouseMove from '../animation/MouseMove'

function Banner() {
  return (
    <>
      <div className="hero-banner hero-style-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="title">
                  <span className="color-secondary">2500+ </span>
                  {' دوره '}
                  <br />
                  بهترین دوره های آنلاین در آموزستان
                </h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگره ا و متون بلکه روزنامه
                  و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                  اساسا مورد استفاده قرار گیرد.
                </p>
                <div className="banner-btn">
                  <Link href="/" className="edu-btn">
                    پیدا کردن دوره <i className="icon-west"></i>
                  </Link>
                </div>
                <ul className="shape-group">
                  <MouseMove
                    addClassName="shape-1"
                    dataDepth="2"
                    data-aos-delay="1000"
                    data-aos="fade"
                    data-aos-duration="1000"
                    imgSrc="/images/about/shape-13.png"
                  />
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-thumbnail">
                <div
                  className="thumbnail"
                  data-aos-delay="500"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/images/banner/girl-1.webp"
                    alt="Girl Image"
                    width={538}
                    height={605}
                    object-fit="contain"
                  />
                </div>
                <div
                  className="instructor-info"
                  data-aos-delay="200"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="inner">
                    <h5 className="title">مربی </h5>
                    <div className="media">
                      <div className="thumb">
                        <Image
                          width={175}
                          height={58}
                          src="/images/banner/author-1.png"
                          alt="Images"
                        />
                      </div>
                      <div className="content">
                        <span>200+</span> مدرس
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="shape-group">
                  <li
                    className="shape-1"
                    data-aos-delay="1000"
                    data-aos="fade"
                    data-aos-duration="1000"
                  >
                    <Image
                      width={101}
                      height={39}
                      src="/images/about/shape-15.png"
                      alt="Shape"
                    />
                  </li>

                  <li
                    className="shape-4"
                    data-aos-delay="1000"
                    data-aos="fade"
                    data-aos-duration="1000"
                  >
                    <Image
                      width={159}
                      height={175}
                      src="/images/counterup/shape-02.png"
                      alt="Shape"
                    />
                  </li>

                  <MouseMove
                    addClassName="shape-2"
                    dataDepth="-1.5"
                    data-aos-delay="1000"
                    data-aos="fade"
                    data-aos-duration="1000"
                    imgSrc="/images/about/shape-16.png"
                  />

                  <MouseMove
                    addClassName="shape-5"
                    dataDepth="1.5"
                    data-aos-delay="1000"
                    data-aos="fade"
                    data-aos-duration="1000"
                    imgSrc="/images/about/shape-13.png"
                  />

                  <MouseMove
                    addClassName="shape-6"
                    dataDepth="-2"
                    data-aos-delay="1000"
                    data-aos="fade"
                    data-aos-duration="1000"
                    imgSrc="/images/about/shape-18.png"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-7">
          <Image
            width={48}
            height={123}
            src="/images/about/h-1-shape-01.png"
            alt="Shape"
          />
        </div>
      </div>
    </>
  )
}

export default Banner
