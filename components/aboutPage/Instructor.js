import InstructorData from "../../data/InstructorData"
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";

function Instructor() {
  return (
    <div className="edu-team-area team-area-3 edu-section-gap z-10">
      <div className="container">
        <SectionTitle
          showMark={true}
          preTitle="Instructors"
          title="Course Instructors"
          alignment="section-center"
        />
        <div className="row g-5">
          {InstructorData.instructors.slice(0, 3).map((i, index) =>
          (<div
            key={index}
            data-aos-delay="50"
            data-aos="fade-up"
            data-aos-duration="800"
            className="col-lg-4 col-md-6 aos-init aos-animate">
            <div className="edu-team-grid team-style-3">
              <div className="inner">
                <div className="thumbnail-wrap">
                  <div className="thumbnail">
                    <Link href="/instructor/instructor-profile">
                      <Image width={370} height={370}
                        src={"/images/team/team-02/" + i.imgSrc}
                        alt={i.name + " Thumbnail"}
                      />
                    </Link>
                  </div>
                  <ul className="team-share-info">
                    {i.socialLinks.map((l, i) =>
                      <li key={i}>
                        <a aria-label={l.name} href={l.url}>
                          <i className={l.iconName}></i>
                        </a>
                      </li>)
                    }
                  </ul>
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/">
                      {i.name}
                    </Link>
                  </h5>
                  <span className="designation">{i.designation}</span>
                </div>
              </div>
            </div>
          </div>))
          }
        </div>
      </div>
    </div>
  );
}

export default Instructor;
