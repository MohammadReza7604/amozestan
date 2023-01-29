import Image from "next/image";
import Link from "next/link";

function CourseTypeOne({ course, extraClass, blockPrice, bought }) {
  return (
    <div
      className={`edu-course course-style-1 hover-button-bg-white ${
        extraClass || ""
      }`}
    >
      <div className="inner">
        <div className="thumbnail">
          <Link href="/courses/course_details">
            <Image
              width={270}
              height={200}
              src={"/images/course/course-type-01/" + course.image}
              alt="course.alt"
            />
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61"></i>
              {course.duration}
            </span>
          </div>
        </div>
        <div className="content">
          <span className="course-level">{course.level}</span>
          {/* <h6 className="title">
            <Link href="/courses/course_details">{course.title}</Link>
          </h6> */}
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">
              ({course.ratingAvarage} /{course.ratingTotal}
              {course.ratingTotal > 1 ? "نظرات" : "نظر"})
            </span>
          </div>
          {!blockPrice ? (
            <div className="course-price">${course.currentPrice}</div>
          ) : (
            <div className="course-price">خریداری شده</div>
          )}
          <ul className="course-meta d-flex">
            <li>
              {course.lessons} {course.lessons > 1 ? "سرفصل ها" : "سرفصل"}
              <i className="icon-24"></i>
            </li>
            <li>
              {course.students} {course.students ? "داشنجو ها" : "دانشجو"}
              <i className="icon-25"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="course-hover-content-wrapper">
        <button className="wishlist-btn">
          <i className="icon-22"></i>
        </button>
      </div>
      <div className="course-hover-content">
        <div className="content">
          <button className="wishlist-btn">
            <i className="icon-22"></i>
          </button>
          <span className="course-level">{course.level}</span>
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
            <span className="rating-count">
              ({course.ratingAvarage} /{course.ratingTotal}{" "}
              {course.ratingTotal > 1 ? "نظرات" : "نظر"})
            </span>
          </div>
          {!blockPrice ? (
            <div className="course-price">${course.currentPrice}</div>
          ) : (
            <div className="course-price">خریداری شده</div>
          )}
          <p>{course.excerpt}</p>
          <ul className="course-meta">
            <li>
              <i className="icon-24"></i>
              {course.lessons} {course.lessons > 1 ? "سرفصل ها" : "سرفصل"}
            </li>
            <li>
              <i className="icon-25"></i>
              {course.students} {course.students ? "داشنجو ها" : "دانشجو"}
            </li>
          </ul>
          <Link
            href="/courses/course_details"
            className="edu-btn btn-secondary btn-small"
          >
            {bought ? "ادامه" : "شرکت در دوره"}
            <i className="icon-west"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseTypeOne;
