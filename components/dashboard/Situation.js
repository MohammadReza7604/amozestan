import Image from 'next/image'
import Link from 'next/link'
import data from '../../data/activities.json'
import Activity from './Activity'
import Courses from './Courses'

function Situation({ func }) {
  return (
    <div
      className="tab-pane fade active show"
      id="situation-tab"
      role="tabpanel"
      aria-labelledby="situation-tab"
    >
      <div className="dashboard-area-box">
        <div id="progresschart">
          <Image src="/images/progressChart.svg" width={140} height={140} />
          <span className="t">سرعت</span>
          <span className="r">سطح</span>
          <span className="b">فعالیت</span>
          <span className="l">دستاوردها</span>
        </div>
        <p className="m-0 text-end">
          وضعیت کلی خود رابا توجه به نمودار آنالیز کنید
        </p>
      </div>
      <div className="dashboard-area-box justify-content-between">
        <div className="rectangle">
          <span>31</span>
        </div>
        <div className="row">
          <div className="rectangle">
            <span>1401</span>
          </div>
          <div className="rectangle">
            <span>آذر</span>
          </div>
        </div>

        <div className="smr">
          <div>
            <span> -- </span>
            <span>فعالیت امروز</span>
          </div>
          <div>
            <span> -- </span>
            <span> سوالات امروز</span>
          </div>
        </div>
      </div>
      <div className="dashboard-area-box">
        <div className="d-flex">
          <div className="d-count">
            <div className="rectangle warning">
              <span>4</span>
            </div>
            <span>نزده</span>
          </div>
          <div className="d-count">
            <div className="rectangle">
              <span>9</span>
            </div>
            <span>صحیح</span>
          </div>
          <div className="d-count">
            <div className="rectangle danger">
              <span>1</span>
            </div>
            <span>نادرست</span>
          </div>
        </div>
        <div>
          <p className="m-0 text-center">نیازمند دوره هستید ؟</p>
          <Link href="/courses" className="btn-gradient2">
            مشاهده دوره ها
          </Link>
        </div>
      </div>
      <div className="w-100 text-end my-5 px-md-5">
        <h4>:فعالیت های اخیر</h4>
        <div className="w-100 d-flex flex-column mx-auto pt-3">
          {data
            .slice(0, 6)
            .map((activity, i) =>
              activity.type === 'achievement' ? (
                <Activity
                  key={i}
                  data={activity}
                  imgSrc="/images/achievement.svg"
                  size={60}
                />
              ) : activity.type === 'purchase' ? (
                <Activity
                  key={i}
                  data={activity}
                  extraClass={'purchase-act'}
                  imgSrc="/images/dollarsign.svg"
                  size={24}
                />
              ) : (
                <Activity
                  key={i}
                  data={activity}
                  extraClass={'complete-act'}
                  imgSrc="/images/cap.svg"
                  size={34}
                />
              ),
            )}
          <button class="edu-btn mx-auto mt-2 float-start" onClick={func}>
            <i class="icon-west" />
            مشاهده فعالیت های بیشتر
          </button>
        </div>
      </div>
      <Courses />
    </div>
  )
}

export default Situation
