import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import Course from '../components/courses/CourseTypeOne'
import courseData from '../data/course'
import Situation from '../components/dashboard/Situation'
import Edit from '../components/dashboard/Edit'
import Activities from '../components/dashboard/Activities'

function dashboard() {
  const [userName, setUserName] = useState('کاربر ۱۵۷۶۸')
  const [activeTab, setActiveTab] = useState('situation')
  const tabs = [
    { label: 'situation', txt: 'وضعیت' },
    { label: 'myFlashCards', txt: 'فلش کارت های من' },
    { label: 'activities', txt: 'فعالیت ها' },
    { label: 'achievements', txt: 'دستاوردها' },
    { label: 'edit', txt: 'ویرایش' },
  ]
  return (
    <Layout>
      <section className="dashboard-area">
        <div className="dashboard-area-header">
          <div>
            <Image src="/avatar.svg" width={108} height={108} />
            <span className="me-sm-4 me-2">
              <span className="gradient-text">{userName}</span>
              <span className="badge-2">جدید</span>
              <div className="text-green fw-lighter ltr text-end">
                15768@amoozestan.com
              </div>
            </span>
          </div>
          <div>
            <div className="cup ms-sm-5 ms-2">
              <Image src="/images/progressCup.svg" width={90} height={84.6} />
              <div className="cup-header">میزان فعالیت</div>
              <div className="cup-count">--</div>
            </div>
            <div className="cup">
              <Image src="/images/questionCup.svg" width={90} height={84.6} />
              <div className="cup-header">سوالات مشاهده شده</div>
              <div className="cup-count">--</div>
            </div>
          </div>
        </div>
        <ul className="nav dashboard-nav-tabs" id="myTab" role="tablist">
          {tabs.map((t, i) => (
            <li
              key={i}
              onClick={() => setActiveTab(t.label)}
              className={activeTab === t.label ? 'active-tab' : undefined}
              role="tab"
            >
              {t.txt}
            </li>
          ))}
          <div className="nav-bar" />
        </ul>
        <div className="tab-content" id="myTabContent">
          {activeTab === 'situation' ? (
            <Situation
              func={() => {
                setActiveTab('activities')
              }}
            />
          ) : activeTab === 'myFlashCards' ? (
            <div
              className="tab-pane fade active show"
              id="myFlashCards-tab"
              role="tabpanel"
              aria-labelledby="myFlashCards-tab"
            >
              <div className="row g-5">
                {courseData.courses.map((c) => (
                  <div className="col-md-6 col-lg-4 col-xl-3" key={c.id}>
                    <Course
                      bought={true}
                      blockPrice={true}
                      course={c}
                      extraclassName="course-box-shadow"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'activities' ? (
            <Activities />
          ) : activeTab === 'achievements' ? (
            ''
          ) : (
            activeTab === 'edit' && <Edit name={userName} />
          )}
        </div>
      </section>
    </Layout>
  )
}

export default dashboard
