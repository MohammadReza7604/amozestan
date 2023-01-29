import courseData from '../../data/course'
import Link from 'next/link'
import SectionTitle from '../common/SectionTitle'
import CourseTypeFour from '../courses/CourseTypeFour'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

function Course() {
  const count = 6
  return (
    <div className="edu-course-area course-area-1 edu-section-gap bg-lighten01">
      <div className="container">
        <SectionTitle
          preTitle="دوره های پرطرفداری"
          title="برای شروع یک دوره را انتخاب کنید"
          alignment="section-center"
        />
        <Swiper
          className="course-activation swiper"
          modules={[Pagination]}
          slidesPerView={1}
          grabCursor={true}
          speed={1000}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
        >
          {courseData.courses.slice(0, count).map((c) => (
            <SwiperSlide key={c.id}>
              <CourseTypeFour course={c} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="course-view-all"
          data-aos-delay="150"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Link href="/course/course-one" className="edu-btn">
            مشاهده دوره های بیشتر <i className="icon-west"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Course
