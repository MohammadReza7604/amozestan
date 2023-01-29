import MouseMove from '../animation/MouseMove'

function ContactInfo() {
  return (
    <div className="home-one-cta-two cta-area-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="home-one-cta edu-cta-box bg-image bg-image--7">
              <div className="inner">
                <div className="content text-md-end">
                  <span className="subtitle">تماس با : </span>
                  <h3 className="title">
                    <a href="mailto:info@amoozestan" target="_blank">
                      info@amoozestan
                    </a>
                  </h3>
                </div>
                <div className="sparator">
                  <span>یا</span>
                </div>
                <div className="content">
                  <span className="subtitle">تماس با شماره : </span>
                  <h3 className="title ltr">
                    <a href="tel:+011235641231">+98 912 000 00 00</a>
                  </h3>
                </div>
              </div>
              <ul className="shape-group">
                <MouseMove
                  addClassName="shape-01"
                  dataDepth="2"
                  imgSrc="/images/cta/shape-06.png"
                />
                <MouseMove
                  addClassName="shape-02"
                  dataDepth="-2"
                  imgSrc="/images/cta/shape-12.png"
                />
                <MouseMove
                  addClassName="shape-03"
                  dataDepth="-3"
                  imgSrc="/images/cta/shape-04.png"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
