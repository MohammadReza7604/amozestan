import Image from 'next/image'
import MouseMove from '../animation/MouseMove'

function Fact() {
  const funFacts = [
    {
      number: 19.3,
      class: 'primary-color',
      title: 'هنرجو',
      suffix: 'هزار',
    },
    {
      number: 12.4,
      class: 'secondary-color',
      title: 'دوره پایان یافته',
      suffix: 'هزار',
    },
    {
      number: 300,
      class: 'extra05-color',
      title: 'برترین مدرس ها',
      suffix: '+',
    },
    {
      number: 100,
      class: 'extra02-color',
      title: 'میزان رضایت',
      suffix: '%',
    },
  ]
  return (
    <div className="counterup-area-2">
      <div className="container">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-8">
            <div className="counterup-box-wrap">
              <div className="counterup-box">
                {funFacts.map((f, i) => (
                  <div
                    className={
                      'edu-counterup counterup-style-2' +
                      (i < 2 ? ' bb-08' : undefined)
                    }
                    key={i}
                  >
                    <h2 className={`counter-item count-number ${f.class}`}>
                      <span>
                        <span>{f.suffix}</span>
                        <span>{f.number}</span>
                      </span>
                    </h2>
                    <h6 className="title">{f.title}</h6>
                  </div>
                ))}
              </div>
              <ul className="shape-group">
                <MouseMove
                  addClassName="shape-1"
                  dataDepth="-1.6"
                  data-aos-delay="100"
                  data-aos="fade"
                  data-aos-duration="100"
                  imgSrc="/images/about/shape-13.png"
                />
                <MouseMove
                  addClassName="shape-3"
                  dataDepth="1.6"
                  data-aos-delay="100"
                  data-aos="fade"
                  data-aos-duration="100"
                  imgSrc="/images/counterup/shape-04.png"
                />
                <MouseMove
                  addClassName="shape-4"
                  dataDepth="-1.6"
                  data-aos-delay="100"
                  data-aos="fade"
                  data-aos-duration="100"
                  imgSrc="images/counterup/shape-05.png"
                />
                <li className="shape-2">
                  <Image
                    width={159}
                    height={175}
                    className="rotateit"
                    src="/images/counterup/shape-02.png"
                    alt="Shape"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fact
