import MouseMove from '../animation/MouseMove'

function Fact() {
  const funFacts = [
    {
      number: 29.3,
      iconClass: 'icon-48',
      class: 'primary-color',
      title: 'STUDENT ENROLLED',
      suffix: 'K',
    },
    {
      number: 32.4,
      iconClass: 'icon-47',
      class: 'secondary-color',
      title: 'CLASS COMPLETED',
      suffix: 'K',
    },
    {
      number: 100,
      iconClass: 'icon-49',
      class: 'extra08-color',
      title: 'SATISFACTION RATE',
      suffix: '%',
    },
    {
      number: 354,
      iconClass: 'icon-50',
      class: 'extra05-color',
      title: 'TOP INSTRUCTORS',
      suffix: '+',
    },
  ]
  return (
    <div className="counterup-area-9">
      <div className="container amoozestan-animated-shape">
        <div className="row g-5">
          {funFacts.map((f, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="edu-counterup counterup-style-4">
                <div className={`icon ${f.class}`}>
                  <i className={f.iconClass}></i>
                </div>
                <h2 className="counter-item count-number">
                  <span>
                    <span>{f.number}</span>
                    <span>{f.suffix}</span>
                  </span>
                </h2>
                <h6 className="title">{f.title}</h6>
              </div>
            </div>
          ))}
        </div>

        <ul className="shape-group">
          <MouseMove
            addClassName="shape-1"
            dataDepth="-1.8"
            imgSrc="/images/others/shape-27.png"
            data-aos-delay="500"
            data-aos="fade"
            data-aos-duration="200"
          />
        </ul>
      </div>
    </div>
  )
}

export default Fact
