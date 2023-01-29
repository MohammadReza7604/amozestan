import Image from "next/image";
import MouseMove from "../animation/MouseMove";
import SectionTitle from "../common/SectionTitle";

function WhyChoose() {
  const features = [
    {
      title: "High Quality Courses",
      details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
      iconClass: "icon-45",
      imgSrc: "why-choose-03.jpg",
      colorClass: "color-primary-style"
    },
    {
      title: "Life Time Access",
      details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
      iconClass: "icon-46",
      imgSrc: "why-choose-04.jpg",
      colorClass: "color-secondary-style"
    },
    {
      title: "Expert Instructors",
      details: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
      iconClass: "icon-47",
      imgSrc: "why-choose-05.jpg",
      colorClass: "color-extra08-style"
    }
  ]
  return (
    <section className="why-choose-area-4 edu-section-gap">
      <div className="container amoozestan-animated-shape">
        <SectionTitle showMark={true} preTitle='Why choose amoozestan' alignment='section-center'>
          The Best <span className="color-secondary">Beneficial</span> Side <br /> of amoozestan
        </SectionTitle>

        <div className="row g-5">
          {features.map((f, i) => (
            <div key={i} data-aos-delay="150" data-aos="fade-up" data-aos-duration="800" className="col-lg-4 aos-init aos-animate">
              <div className={`why-choose-box-3 features-box ${f.colorClass}`}>
                <div className="thumbnail">
                  <Image width={370} height={250} src={'/images/others/' + f.imgSrc} alt={(f.title) + ' Thumbnail'} />
                </div>
                <div className="content">
                  <div className="icon">
                    <i className={f.iconClass}></i>
                  </div>
                  <h4 className="title">{f.title}</h4>
                  <p>{f.details}</p>
                </div>
              </div>
            </div>))}
        </div>

        <ul className="shape-group">
          <li className="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
            <Image width={186} height={186} className="rotateit" src="/images/about/shape-13.png" alt="shape" />
          </li>
          <MouseMove addClassName="shape-2" dataDepth="0.85" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
        </ul>
      </div >
    </section >
  );
}

export default WhyChoose;