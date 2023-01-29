import Image from 'next/image'
import Link from 'next/link'

function CourseTypeFour({ extraClass, course }) {
  return (
    <div className={`edu-course course-style-6 ${extraClass || ''}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link href="/course/course-details">
            <Image
              width={370}
              height={450}
              src={`/images/course/course-type-08/${course.image}`}
              alt="course.alt"
            />
          </Link>
          <div className="course-price price-round">${course.currentPrice}</div>
        </div>
        <div className="content">
          <span class="course-level">{course.category}</span>
          <h5 className="title">
            <Link href="/course/course-details">{course.title}</Link>
          </h5>
          <ul className="course-meta d-flex">
            <li className="d-flex w-fit">
              <i className="icon-24"></i>
              {course.lessons} {course.lessons > 1 ? 'سرفصل ها' : 'سرفصل'}
            </li>
            <li className="d-flex w-fit me-4">
              <i class="icon-25"></i>
              {course.students} {course.students ? 'دانشجو ها' : 'دانشجو'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CourseTypeFour
