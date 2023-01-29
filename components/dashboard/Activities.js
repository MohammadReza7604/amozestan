import { useState } from 'react'
import Activity from './Activity'
import data from '../../data/activities.json'

function Activities() {
  const [filter, setFilter] = useState('all')
  const filteredData =
    filter === 'all' ? data : data.filter((a) => a.type === filter)
  return (
    <div
      className="tab-pane fade active show"
      id="activities-tab"
      role="tabpanel"
      aria-labelledby="activities-tab"
    >
      <div class="edu-sorting">
        <div class="icon">
          <i class="icon-55"></i>
        </div>
        <select
          className="edu-select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">همه</option>
          <option value="purchase">خرید ها</option>
          <option value="quiz">ازمون ها</option>
          <option value="flashcard">فلش کارت ها</option>
        </select>
      </div>
      <div className="pt-4">
        {filteredData.map((activity, i) =>
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
      </div>
    </div>
  )
}

export default Activities
