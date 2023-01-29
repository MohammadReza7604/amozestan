import Image from "next/image";
import Link from "next/link";

function CourseTypeThree({ course, extraClass }) {
  return (
    <div className={`edu-course course-style-5 ${extraClass || ""}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link href="/course/course-details">
            <Image width={370} height={250} src={'/images/course/course-type-02/' + course.image} alt="course.alt" />
          </Link>
        </div>
        <div className="content">
          <div className="course-price price-round">${Math.trunc(course.currentPrice)}</div>
          <span className="course-level">{course.category}</span>
          <h5 className="title">
            <Link href="/course/course-details">{course.title}</Link>
          </h5>
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({course.ratingAvarage})</span>
          </div>
          <p>{course.excerpt3}</p>
          <ul className="course-meta">
            <li><i className="icon-24"></i>{course.lessons} {course.lessons > 1 ? 'Lessons' : 'Lesson'}</li>
            <li><i className="icon-25"></i>{course.students} {course.students ? 'Students' : 'Student'}</li>
          </ul>
        </div>
      </div>

      <div className="hover-content-aside">
        <div className="content">
          <span className="course-level">{course.category}</span>
          <h5 className="title">
            <Link href="/course/course-details">{course.title}</Link>
          </h5>
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({course.ratingAvarage})</span>
          </div>
          <ul className="course-meta">
            <li>{course.lessons} {course.lessons + course.lessons > 1 ? 'Lessons' : 'Lesson'}</li>
            <li>{course.duration}</li>
            <li>{course.level}</li>
          </ul>
          <div className="course-feature">
            <h6 className="title">چه چیزی می آموزید؟</h6>
            <ul>
              {course.features.slice(0, 3).map((f, k) => <li key={k}>{f}</li>)}
            </ul>
          </div>
          <div className="button-group">
            <a href="#" className="edu-btn btn-medium">افزودن به سبد خرید</a>
            <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CourseTypeThree;