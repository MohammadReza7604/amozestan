import Image from "next/image";
import Link from "next/link";

function CourseTypeTwo({ extraClass, course }) {
  return (
    <div className={`edu-course course-style-4 course-style-8 ${extraClass}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link href="/courses/course_details">
            <Image width={200} height={200} src={'/images/course/course-type-06/' + course.image} alt="course.alt" />
          </Link>
          <div className="time-top">
            <span className="duration"><i className="icon-61"></i>{course.duration}</span>
          </div>
        </div>
        <div className="content">
          <div className="course-price">${course.currentPrice}</div>
          <h6 className="title">
            <Link href="/courses/course_details">{course.title}</Link>
          </h6>
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({course.ratingAvarage} /{course.ratingTotal} {course.ratingTotal > 1 ? 'نظرات' : 'نظر'})</span>
          </div>
          <p>{course.excerpt2}</p>
          <ul className="course-meta">
            <li><i className="icon-24"></i>{course.lessons} {course.lessons > 1 ? 'سرفصل ها' : 'سرفصل'}</li>
            <li><i className="icon-25"></i>{course.students} {course.students ? 'داشنجو ها' : 'دانشجو'}</li>
          </ul>
        </div>
      </div>
      <div className="hover-content-aside">
        <div className="content">
          <span className="course-level">{course.category}</span>
          <h5 className="title">
            <Link href="/courses/course_details">{course.title}</Link>
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
            <li>{course.lessons} {course.lessons > 1 ? 'دروس' : 'درس'}</li>
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
            <a className="edu-btn btn-medium">افزودن به سبد خرید</a>
            <a className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CourseTypeTwo;