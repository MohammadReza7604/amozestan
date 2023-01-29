import courseData from "../../data/course.json"
import SectionTitle from "../../components/common/SectionTitle";
import BreadCrumbTwo from "../../components/common/BreadCrumbTwo";
import Layout from "../../components/Layout";
import CourseTypeOne from "../../components/courses/CourseTypeOne";
import Image from "next/image";

function instructor_profile() {
  return (
    <Layout>
      <BreadCrumbTwo title='Instructor Profile' />

      <div className="edu-team-details-area section-gap-equal">
        <div className="container">
          <div className="row row--40">
            <div className="col-lg-4">
              <div className="team-details-thumb">
                <div className="thumbnail">
                  <Image width={370} height={370} src="/images/team/team-02/team-07.jpg" alt="team" />
                </div>
                <ul className="social-share">
                  <li><a href="#"><i className="icon-share-alt"></i></a></li>
                  <li><a href="#"><i className="icon-facebook"></i></a></li>
                  <li><a href="#"><i className="icon-twitter"></i></a></li>
                  <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="team-details-content">
                <div className="main-info">
                  <span className="subtitle">Instructor</span>
                  <h3 className="title">Edward Narton</h3>
                  <span className="designation">Developer and Teacher</span>
                  <ul className="team-meta">
                    <li><i className="icon-25"></i>20 Students</li>
                    <li>
                      <div className="rating">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                      </div>
                      <span className="rating-count">(720 Rating)</span>
                    </li>
                  </ul>
                </div>
                <div className="bio-describe">
                  <h4 className="title">About Me</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur elit sed do eius mod tempor incidid labore dolore magna aliqua. enim ad minim eniam quis nostrud exercitation ullamco laboris nisi aliquip ex commodo consequat. duis aute irure dolor in repreed ut perspiciatis unde omnis iste natus error sit voluptat em acus antium.</p>
                  <p>doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch itecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="contact-info">
                  <h4 className="title">Contact Me</h4>
                  <ul>
                    <li><span>Address:</span>North Helenavile, FV77 8WS</li>
                    <li><span>Email:</span><a href="mailto:amoozestan@example.com" target="_blank">amoozestan@example.com</a></li>
                    <li><span>Phone:</span><a href="tel:+37(417)683-4409">+37 (417) 683-4409</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="edu-course-area course-area-1 edu-section-gap bg-lighten01">
        <div className="container">
          <SectionTitle title='My Popular Courses' alignment='section-center' />

          <div className="row g-5">

            {courseData.courses.slice(0, 4).map((c) =>
              <div key={c.id} className="col-md-6 col-lg-4 col-xl-3 sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                <CourseTypeOne course={c} />
              </div>)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default instructor_profile;