import MouseMove from '../components/animation/MouseMove'
import BreadCrumbTwo from '../components/common/BreadCrumbTwo'
import Layout from '../components/Layout'

function contact_us() {
  // const sendEmail = (e) => {
  //   emailjs
  //     .sendForm(
  //       'service_bxh6md3',
  //       'template_1g7v07n',
  //       this.$refs.form,
  //       'user_8Lx0gfI1ktOoeEN8DTV10',
  //     )
  //     .then(
  //       (result) => {
  //         this.showResult = true
  //         this.resultText =
  //           'Your message has been sent successfully. We will contact you soon.'
  //         setTimeout(() => {
  //           this.showResult = false
  //         }, 5000)
  //         e.target.reset()
  //         console.log('SUCCESS!', result.text)
  //       },
  //       (error) => {
  //         this.showResult = true
  //         this.resultText = error.text
  //         setTimeout(() => {
  //           this.showResult = false
  //         }, 5000)
  //         console.log('FAILED...', error.text)
  //       },
  //     )
  // }
  return (
    <Layout>
      <BreadCrumbTwo title="تماس با ما" />

      <section className="contact-us-area">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-4 col-lg-6">
              <div className="contact-us-info">
                <h3 className="heading-title">
                  ما همیشه مشتاق شنیدن از شما هستیم!
                </h3>
                <ul className="address-list">
                  <li>
                    <h5 className="title">آدرس:</h5>
                    <p>ایران - تهران</p>
                  </li>
                  <li>
                    <h5 className="title">ایمیل:</h5>
                    <p>
                      <a href="mailto:info@amoozestan" target="_blank">
                        info@amoozestan
                      </a>
                    </p>
                  </li>
                  <li>
                    <h5 className="title">تماس:</h5>
                    <p>
                      <a className="ltr" href="tel:+0914135548598">
                        +98 912 000 00 00
                      </a>
                    </p>
                  </li>
                </ul>
                <ul className="social-share">
                  <li>
                    <a href="#">
                      <i className="icon-share-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linkedin2"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="offset-xl-2 col-lg-6">
              <div className="contact-form form-style-2">
                <div className="section-title">
                  <h4 className="title">در تماس باشید</h4>
                  <p>برای رزرو مشاوره مشاور این فرم را پر کنید جلسه</p>
                </div>

                <form className="rnt-contact-form rwt-dynamic-form">
                  <div className="row row--10">
                    <div className="form-group col-12">
                      <input type="text" name="fullname" placeholder="نام" />
                    </div>
                    <div className="form-group col-12">
                      <input type="email" name="email" placeholder="ایمیل" />
                    </div>
                    <div className="form-group col-12">
                      <input type="tel" name="phone" placeholder="شماره تلفن" />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="message"
                        cols="30"
                        rows="4"
                        placeholder="پیام شما"
                      ></textarea>
                    </div>
                    <div className="form-group col-12">
                      <button
                        className="rn-btn edu-btn btn-medium submit-btn"
                        name="submit"
                        type="submit"
                      >
                        ارسال پیام <i className="icon-west"></i>
                      </button>
                    </div>
                  </div>
                </form>

                <ul className="shape-group">
                  <MouseMove
                    addClassName="shape-1"
                    dataDepth="1"
                    imgSrc="/images/about/shape-13.png"
                  />
                  <MouseMove
                    addClassName="shape-2"
                    dataDepth="-1"
                    imgSrc="/images/counterup/shape-02.png"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="google-map-area">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=melbourne,%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact_us
