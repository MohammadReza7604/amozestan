import Image from "next/image";
import MouseMove from "../animation/MouseMove";
import SectionTitle from "../common/SectionTitle";

function About() {
  return (
    <div className="gap-bottom-equal edu-about-area about-style-1">
      <div className="container amoozestan-animated-shape">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-image-gallery">
              <Image width={370} height={420} className="main-img-1" src="/images/about/about-01.jpg" alt="About Image" />
              <div className="video-box">
                <div className="inner">
                  <div className="thumb">
                    <Image width={220} height={120} src="/images/about/about-02.jpg" alt="About Image" />
                    <span className="popup-icon video-popup-activation">
                      <i className="icon-18"></i>
                    </span>
                  </div>
                  <div className="loading-bar">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="award-status bounce-slide">
                <div className="inner">
                  <div className="icon">
                    <i className="icon-21"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">29+</h6>
                    <span className="subtitle">جوایز شگفت انگیز</span>
                  </div>
                </div>
              </div>

              <ul className="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-36.png" />
                <MouseMove addClassName="shape-2" dataDepth="-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-37.png" />
                <MouseMove addClassName="shape-3" dataDepth="1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-02.png" />
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <SectionTitle showMark={true} preTitle="درباره ما" subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' alignment='section-left'>
                مهارت های خود را بیاموزید و رشد دهید <span className="color-secondary">هرجا</span></SectionTitle>

              <ul className="features-list" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                <li>مربیان خبره</li>
                <li>آموزش از راه دور آنلاین</li>
                <li>دسترسی مادام العمر</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="shape-group">
          <li data-aos-delay="500" data-aos="fade" data-aos-duration="200" className="scene shape-1 circle aos-init aos-animate">
            <span data-depth="-2.3"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;