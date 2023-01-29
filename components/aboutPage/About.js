import Image from "next/image";
import MouseMove from "../animation/MouseMove";
import SectionTitle from "../common/SectionTitle";

function About() {
  return (
    <div className="edu-section-gap edu-about-area about-style-8">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="about-content">
              <SectionTitle showMark={true} preTitle='درباره ما' subTitle='Magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incididunt labore.' alignment='section-left' >
                We Provide Best <span className="color-secondary">Education</span> Services For You.
              </SectionTitle>

              <div className="about-mission">
                <div className="single-item" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                  <div className="icon color-extra02"><i className="icon-51"></i></div>
                  <div className="content">
                    <h4 className="title">Our Mission</h4>
                    <p>Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.</p>
                  </div>
                </div>
                <div className="single-item" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                  <div className="icon color-extra06"><i className="icon-52"></i></div>
                  <div className="content">
                    <h4 className="title">Our Vision</h4>
                    <p>Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-image-gallery ltr">
              <div className="row g-5">
                <div className="col-6 masonry-item">
                  <div className="thumbnail thumbnail-1 mb--30" data-aos-delay="50" data-aos="fade-down" data-aos-duration="1000">
                    <Image width={255} height={320} src="/images/about/about-13.jpg" alt="About Images" />
                  </div>
                  <div className="thumbnail thumbnail-4" data-aos-delay="50" data-aos="fade-up" data-aos-duration="1000">
                    <Image width={255} height={180} src="/images/about/about-15.jpg" alt="About Images" />
                  </div>
                </div>
                <div className="col-6 masonry-item">
                  <div className="thumbnail thumbnail-2 mb--30" alt="About Images" data-aos-delay="50" data-aos="fade-down" data-aos-duration="1000">
                    <Image width={255} height={200} src="/images/about/about-14.jpg" />
                  </div>
                  <div className="thumbnail thumbnail-3" alt="About Images" data-aos-delay="50" data-aos="fade-up" data-aos-duration="1000">
                    <Image width={255} height={255} src="/images/about/about-16.jpg" alt="About Images" />
                  </div>
                </div>
              </div>

              <ul className="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-33.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-25.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                <MouseMove addClassName="shape-3" dataDepth="-2" imgSrc="/images/about/shape-13.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                <li className="scene shape-4 aos-init aos-animate" data-aos-delay="500" data-aos="fade" data-aos-duration="200"><span data-depth=".8"></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;