import courseData from '../../data/course.json'
import Link from 'next/link'
import MouseMove from '../../components/animation/MouseMove'
import Layout from '../../components/Layout'
import CourseTypeThree from '../../components/courses/CourseTypeThree'
import { useState } from 'react'
import Image from 'next/image'

function course_detail() {
  const [tabId, setTabId] = useState('overview')
  const [show, setShow] = useState(false)
  const [id, setId] = useState(0)

  const tabs = [
    { label: 'overview', txt: 'بررسی اجمالی' },
    { label: 'instructor', txt: 'مربی' },
    { label: 'review', txt: 'بررسی ها' },
  ]

  return (
    <Layout>
      <div className="edu-breadcrumb-area breadcrumb-style-3">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="edu-breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">خانه</Link>
              </li>
              <li className="separator">
                <i className="icon-angle-left"></i>
              </li>
              <li className="breadcrumb-item">
                <Link href="/course/course-one">دروس</Link>
              </li>
              <li className="separator">
                <i className="icon-angle-left"></i>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                توضیحات دروس
              </li>
            </ul>
            <div className="page-title">
              <h1 className="title">گردهمایی پاییزی آموزش جهانی برای همه</h1>
            </div>
            <ul className="course-meta">
              <li>
                <i className="icon-58"></i>توسز ادوارد نورتن
              </li>
              <li>
                <i className="icon-59"></i>فارسی
              </li>
              <li className="course-rating">
                <div className="rating">
                  <i className="icon-23"></i>
                  <i className="icon-23 mx-1"></i>
                  <i className="icon-23"></i>
                  <i className="icon-23 mx-1"></i>
                  <i className="icon-23"></i>
                </div>
                <span className="rating-count">(720 درجه بندی )</span>
              </li>
            </ul>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1">
            <span></span>
          </li>
          <MouseMove
            addClassName="shape-2"
            dataDepth="2"
            imgSrc="/images/about/shape-13.png"
          />
          <MouseMove
            addClassName="shape-3"
            dataDepth="-2"
            imgSrc="/images/about/shape-15.png"
          />
          <li className="shape-4">
            <span></span>
          </li>
          <MouseMove
            addClassName="shape-5"
            dataDepth="2"
            imgSrc="/images/about/shape-07.png"
          />
        </ul>
      </div>

      <section className="edu-section-gap course-details-area">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-8">
              <div className="course-details-content">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {tabs.map((t, i) => (
                    <li
                      key={i}
                      className="nav-item"
                      onClick={() => setTabId(t.label)}
                      role="presentation"
                    >
                      <button
                        className={`nav-link ${tabId === t.label && 'active'}`}
                        id={t.label + '-tab'}
                        data-bs-toggle="tab"
                        data-bs-target={'#' + t.label}
                        type="button"
                        role="tab"
                        aria-controls={t.label}
                        aria-selected="true"
                      >
                        {t.txt}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${
                      tabId === 'overview' && 'active show'
                    }`}
                    id="overview"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                  >
                    <div className="course-tab-content">
                      <div className="course-overview">
                        <h3 className="heading-title">توضیحات دوره</h3>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                          برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                          و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                          را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                          فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                          توان امید داشت که تمام و دشواری موجود در ارائه
                          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                          نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                          پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                          گیرد.
                        </p>
                        <p className="mb--60">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                          برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                          و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                          را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                          فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                          توان امید داشت که تمام و دشواری موجود در ارائه
                          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                          نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                          پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                          گیرد..
                        </p>
                        <h5 className="title">چه چیزی یاد خواهید گرفت؟</h5>
                        <ul className="mb--60">
                          <li>
                            آموزش استفاده حرفه ای از پایتون، یادگیری پایتون 2 و
                            پایتون 3!
                          </li>
                          <li>
                            ۶ پروژه زیبای دنیای واقعی برای نمونه کار خود بسازید
                            (نه برنامه های اسباب بازی خسته کننده)
                          </li>
                          <li>
                            تئوری پشت Vue.js را درک کنید و از آن در پروژه های
                            واقعی استفاده کنید
                          </li>
                          <li>
                            طرح‌بندی‌های واکنش‌گرا، در دسترس و زیبا ایجاد کنید
                          </li>
                        </ul>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                          برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                          و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                          را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                          فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                          توان امید داشت که تمام و دشواری موجود در ارائه
                          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                          نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                          پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                          گیرد.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tabId === 'instructor' && 'active show'
                    }`}
                    id="instructor"
                    role="tabpanel"
                    aria-labelledby="instructor-tab"
                  >
                    <div className="course-tab-content">
                      <div className="course-instructor">
                        <div className="thumbnail">
                          <Image
                            width={170}
                            height={170}
                            mg
                            src="/images/course/author-01.png"
                            alt="Author Images"
                          />
                        </div>
                        <div className="author-content">
                          <h6 className="title">ادوارد نورتن </h6>
                          <span className="subtitle">موسس و مدیر عامل </span>
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
                            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد، در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
                            پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.
                          </p>
                          <ul className="social-share">
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
                            <li>
                              <a href="#">
                                <i className="icon-youtube"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tabId === 'review' && 'active show'
                    }`}
                    id="review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <div className="course-tab-content">
                      <div className="course-review">
                        <h3 className="heading-title">رتبه بندی دوره</h3>
                        <p>5.00 میانگین امتیاز بر اساس رتبه 7</p>
                        <div className="row g-0 align-items-center">
                          <div className="col-sm-4">
                            <div className="rating-box">
                              <div className="rating-number">5.0</div>
                              <div className="rating">
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                              </div>
                              <span>7 بررسی </span>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="review-wrapper">
                              <div className="single-progress-bar">
                                <div className="rating-text">
                                  5 <i className="icon-23"></i>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '100%' }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <span className="rating-value">7</span>
                              </div>

                              <div className="single-progress-bar">
                                <div className="rating-text">
                                  4 <i className="icon-23"></i>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <span className="rating-value">0</span>
                              </div>

                              <div className="single-progress-bar">
                                <div className="rating-text">
                                  4 <i className="icon-23"></i>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <span className="rating-value">0</span>
                              </div>

                              <div className="single-progress-bar">
                                <div className="rating-text">
                                  4 <i className="icon-23"></i>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <span className="rating-value">0</span>
                              </div>

                              <div className="single-progress-bar">
                                <div className="rating-text">
                                  4 <i className="icon-23"></i>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <span className="rating-value">0</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="comment-area">
                          <h3 className="heading-title">بررسی </h3>
                          <div className="comment-list-wrapper">
                            <div className="comment">
                              <div className="thumbnail">
                                <img
                                  src="/images/blog/comment-01.jpg"
                                  alt="Comment Images"
                                />
                              </div>
                              <div className="comment-content">
                                <div className="rating">
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                </div>
                                <h5 className="title">هیلی بنت </h5>
                                <span className="date">10 آذر 1401</span>
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                  از صنعت چاپ، و با استفاده از طراحان گرافیک
                                  است، چاپگرها و متون بلکه روزنامه و مجله در
                                  ستون و سطرآنچنان که لازم است، و برای شرایط
                                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                                  هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                                  زیادی در شصت و سه درصد گذشته حال و آینده،
                                  شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                                  نرم افزارها شناخت بیشتری را برای طراحان رایانه
                                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                  زبان فارسی ایجاد کرد، در این صورت می توان امید
                                  داشت که تمام و دشواری موجود در ارائه راهکارها،
                                  و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                                  شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                  سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                                  استفاده قرار گیرد.
                                </p>
                              </div>
                            </div>

                            <div className="comment">
                              <div className="thumbnail">
                                <img
                                  src="/images/blog/comment-02.jpg"
                                  alt="Comment Images"
                                />
                              </div>
                              <div className="comment-content">
                                <div className="rating">
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                </div>
                                <h5 className="title">سیمون بیکر </h5>
                                <span className="date">10 آذر 1401</span>
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                  از صنعت چاپ، و با استفاده از طراحان گرافیک
                                  است، چاپگرها و متون بلکه روزنامه و مجله در
                                  ستون و سطرآنچنان که لازم است، و برای شرایط
                                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                                  هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                                  زیادی در شصت و سه درصد گذشته حال و آینده،
                                  شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                                  نرم افزارها شناخت بیشتری را برای طراحان رایانه
                                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                  زبان فارسی ایجاد کرد، در این صورت می توان امید
                                  داشت که تمام و دشواری موجود در ارائه راهکارها،
                                  و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                                  شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                  سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                                  استفاده قرار گیرد.
                                </p>
                              </div>
                            </div>

                            <div className="comment">
                              <div className="thumbnail">
                                <img
                                  src="/images/blog/comment-03.jpg"
                                  alt="Comment Images"
                                />
                              </div>
                              <div className="comment-content">
                                <div className="rating">
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                  <i className="icon-23"></i>
                                </div>
                                <h6 className="title">ریچارد گیر </h6>
                                <span className="date">10 آذر 1401</span>
                                <p>
                                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                  از صنعت چاپ، و با استفاده از طراحان گرافیک
                                  است، چاپگرها و متون بلکه روزنامه و مجله در
                                  ستون و سطرآنچنان که لازم است، و برای شرایط
                                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                                  هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                                  زیادی در شصت و سه درصد گذشته حال و آینده،
                                  شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                                  نرم افزارها شناخت بیشتری را برای طراحان رایانه
                                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                  زبان فارسی ایجاد کرد، در این صورت می توان امید
                                  داشت که تمام و دشواری موجود در ارائه راهکارها،
                                  و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                                  شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                  سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                                  استفاده قرار گیرد.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="comment-form-area">
                          <h3 className="heading-title">یک نظر بنویسید</h3>
                          <div className="rating-icon">
                            <h6 className="title">رتبه در اینجا</h6>
                            <div className="rating">
                              <i className="icon-23"></i>
                              <i className="icon-23"></i>
                              <i className="icon-23"></i>
                              <i className="icon-23"></i>
                              <i className="icon-23"></i>
                            </div>
                          </div>
                          <form className="comment-form">
                            <div className="row g-5">
                              <div className="form-group col-lg-6">
                                <input
                                  type="text"
                                  name="comm-title"
                                  id="comm-title"
                                  placeholder="Review Title"
                                />
                              </div>
                              <div className="form-group col-lg-6">
                                <input
                                  type="text"
                                  name="comm-name"
                                  id="comm-name"
                                  placeholder="Reviewer name"
                                />
                              </div>
                              <div className="form-group col-12">
                                <input
                                  type="email"
                                  name="comm-email"
                                  id="comm-email"
                                  placeholder="Reviewer email"
                                />
                              </div>
                              <div className="form-group col-12">
                                <textarea
                                  name="comm-message"
                                  id="comm-message"
                                  cols="30"
                                  rows="5"
                                  placeholder="Review summary"
                                ></textarea>
                              </div>
                              <div className="form-group col-12">
                                <button
                                  type="submit"
                                  className="edu-btn submit-btn"
                                >
                                  ارسال بررسی
                                  <i className="icon-west"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="course-sidebar-3 sidebar-top-position">
                <div className="edu-course-widget widget-course-summery">
                  <div className="inner">
                    <div className="thumbnail">
                      <Image
                        width={320}
                        height={235}
                        src="/images/course/course-46.jpg"
                        alt="Courses"
                      />
                    </div>
                    <div className="content">
                      <h4 className="widget-title">موارد دوره :</h4>
                      <ul className="course-item">
                        <li>
                          <span className="label">
                            <i className="icon-60"></i>قیمت:
                          </span>
                          <span className="value price">$70.00</span>
                        </li>
                        <li>
                          <span className="label">
                            <i className="icon-62"></i>مدرس :{' '}
                          </span>
                          <span className="value">ادوارد نورتنn</span>
                        </li>
                        <li>
                          <span className="label">
                            <i className="icon-61"></i>مدت زمان دوره:
                          </span>
                          <span className="value">3 هفته </span>
                        </li>
                        <li>
                          <span className="label">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.84"
                              height="17.75"
                              viewBox="0 0 19.84 17.75"
                              className="svgInject"
                            >
                              <path
                                className="cls-1"
                                d="M1244.3,708.6c-0.57-1.6-1.78-.867-1.43-1.008l-2.52,1.008v-1.314a0.719,0.719,0,0,0-.65-0.658h-9.86a0.6,0.6,0,0,0-.66.658v16.43a0.6,0.6,0,0,0,.66.657h9.86a0.6,0.6,0,0,0,.65-0.657v-11.83s3.14,8.9,3.82,10.812a1.069,1.069,0,0,0,1.44.361s2.23-.89,3.01-1.206a1,1,0,0,0,.28-1.423Zm-3.79,1.262,2.59-1.069,1.01,2.695-2.35,1.016Zm-1.47,2.024h-3.29v-3.943h3.29v3.943Zm-4.6-3.943v3.943h-3.95v-3.943h3.95Zm-3.95,5.258h3.95v9.858h-3.95V713.2Zm5.26,0h3.29v9.858h-3.29V713.2Zm6.46,0.388,2.45-.933,3.06,8.347-2.45.994Z"
                                transform="translate(-1229.19 -706.625)"
                                style={{
                                  strokeDasharray: '208, 210',
                                  strokeDashoffset: '0',
                                  paddingLeft: '4px',
                                }}
                              ></path>
                            </svg>
                            دروس:{' '}
                          </span>
                          <span className="value">8</span>
                        </li>
                        <li>
                          <span className="label">
                            <i className="icon-63"></i>ثبت نام کرد :{' '}
                          </span>
                          <span className="value">65 دانشجو</span>
                        </li>
                        <li>
                          <span className="label">
                            <i className="icon-59"></i>زبان:{' '}
                          </span>
                          <span className="value">انگلیسی</span>
                        </li>
                        <li>
                          <span className="label">
                            <i className="icon-64"></i>مدرک :
                          </span>
                          <span className="value">بله</span>
                        </li>
                      </ul>
                      <div className="read-more-btn">
                        <Link href="/flashCards/flash" className="edu-btn">
                          شروع کنید <i className="icon-west"></i>
                        </Link>
                      </div>
                      <div className="share-area">
                        <h4 className="title">اشتراک گذاری در:</h4>
                        <ul className="social-share">
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
                          <li>
                            <a href="#">
                              <i className="icon-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gap-bottom-equal">
        <div className="container">
          <div
            className="section-title section-left"
            data-aos-delay="150"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h3 className="title">دوره های بیشتر برای شما</h3>
          </div>
          <div className="row g-5">
            {courseData.courses.slice(0, 3).map((c, k) => (
              <div
                className={`col-12 col-xl-4 col-lg-6 col-md-6 ${
                  (k + 1) % 2 === 0
                    ? 'course-style-3-even'
                    : 'course-style-3-odd'
                }`}
                key={k}
              >
                <CourseTypeThree course={c} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default course_detail
