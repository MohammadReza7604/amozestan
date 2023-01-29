import courseData from "../../data/course.json";
import Layout from "../../components/Layout";
import BreadCrumbTwo from "../../components/common/BreadCrumbTwo";
import Course from "../../components/courses/CourseTypeOne";
import { useState } from "react";
import Sidebar from "../../components/courses/Sidebar";
import CourseTypeTwo from "../../components/courses/CourseTypeTwo";

function index() {
  const [row, setRow] = useState(false);
  const [defaultNumber, setDefaultNumber] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => setDefaultNumber((p) => p + 4);
  const grid = () => setRow((p) => !p);

  const perPage = 9;
  const pageCount = Math.ceil(courseData.courses.length / perPage);
  const start = (currentPage - 1) * perPage;
  const end = currentPage * perPage;

  return (
    <Layout>
      <BreadCrumbTwo title="دوره" />

      {!row ? (
        <div className="edu-course-area course-area-1 gap-tb-text">
          <div className="container">
            <div className="edu-sorting-area">
              <div className="sorting-left">
                <h6 className="showing-text">
                  {" "}
                  ما پیدا کردیم <span>{courseData.courses.length}</span>دوره
                  هایی مناسب برای شما{" "}
                </h6>
              </div>
              <div className="sorting-right">
                <div className="layout-switcher">
                  <label>درجه بندی </label>
                  <ul className="switcher-btn">
                    <li>
                      <a className={!row ? "active" : undefined} onClick={grid}>
                        <i className="icon-53"></i>
                      </a>
                    </li>
                    <li>
                      <a className={row ? "active" : undefined} onClick={grid}>
                        <i className="icon-54"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="edu-sorting">
                  <div className="icon">
                    <i className="icon-55"></i>
                  </div>
                  <select className="edu-select">
                    <option>فیلتر ها</option>
                    <option>کم به زیاد </option>
                    <option> زیاد به کم </option>
                    <option>آخرین بازدید</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row g-5">
              {courseData.courses.slice(0, defaultNumber).map((c) => (
                <div className="col-md-6 col-lg-4" key={c.id}>
                  <Course course={c} extraclassName="course-box-shadow" />
                </div>
              ))}
            </div>

            <div className="load-more-btn">
              {defaultNumber < courseData.courses.length && (
                <button className="edu-btn" onClick={loadMore}>
                  بارگذاری بیشتر <i className="icon-56"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="edu-course-area course-area-1 section-gap-equal">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-3">
                <Sidebar />
              </div>

              <div className="col-lg-9 col-pl--35">
                <div className="edu-sorting-area">
                  <div className="sorting-left">
                    <h6 className="showing-text">
                      ما پیدا کردیم <span>{courseData.courses.length}</span>{" "}
                      دوره هایی مناسب برای شما{" "}
                    </h6>
                  </div>
                  <div className="sorting-right">
                    <div className="layout-switcher">
                      <label>درجه بندی </label>
                      <ul className="switcher-btn">
                        <li>
                          <a
                            className={!row ? "active" : undefined}
                            onClick={grid}
                          >
                            <i className="icon-53"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className={row ? "active" : undefined}
                            onClick={grid}
                          >
                            <i className="icon-54"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="edu-sorting">
                      <div className="icon">
                        <i className="icon-55"></i>
                      </div>
                      <select className="edu-select">
                        <option>فیلتر ها </option>
                        <option>کم به زیاد </option>
                        <option>زیاد به کم </option>
                        <option>آخرین بازدید</option>
                      </select>
                    </div>
                  </div>
                </div>

                {courseData.courses.slice(start, end).map((c) => (
                  <CourseTypeTwo course={c} key={c.id} />
                ))}

                <ul className="edu-pagination pt--50">
                  <li
                    onClick={() =>
                      currentPage != 1 && setCurrentPage((p) => p - 1)
                    }
                  >
                    <a>
                      <i className="icon-east"></i>
                    </a>
                  </li>
                  {[...Array(pageCount)].map((_, i) => (
                    <li
                      key={i}
                      className={currentPage === i + 1 ? "active" : undefined}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      <a>{i + 1}</a>
                    </li>
                  ))}
                  <li
                    onClick={() =>
                      currentPage != pageCount && setCurrentPage((p) => p + 1)
                    }
                  >
                    <a>
                      <i className="icon-west"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default index;
