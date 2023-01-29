import MouseMove from "../animation/MouseMove";

function ContactInfo() {
  return (
    <div className="cta-area-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="home-four-cta edu-cta-box cta-style-3 bg-image bg-image--16">
              <div className="inner">
                <div className="content text-end">
                  <span className="subtitle">Get In Touch:</span>
                  <h3 className="title"><a href="mailto:info@amoozestan">info@amoozestan</a></h3>
                </div>
                <div className="sparator">
                  <span>or</span>
                </div>
                <div className="content">
                  <span className="subtitle">Call Us Via:</span>
                  <h3 className="title"><a href="tel:+011235641231">+01 123 5641 231</a></h3>
                </div>
              </div>
              <ul className="shape-group">
                <MouseMove addClassName="shape-01" dataDepth="2" imgSrc="/images/cta/shape-06.png" />
                <MouseMove addClassName="shape-02" dataDepth="-2" imgSrc="/images/cta/shape-12.png" />
                <MouseMove addClassName="shape-03" dataDepth="-3" imgSrc="/images/cta/shape-04.png" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;