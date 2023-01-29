import Image from 'next/image'
function Activity({ data, extraClass, imgSrc, size }) {
  return (
    <div className="activity">
      <div className={`activity-icon ${extraClass}`}>
        <Image src={imgSrc} width={size} height={size} />
      </div>
      <div className="text-end flex-1">
        {data.msg}
        <div className="text-muted">{data.date}</div>
      </div>
      <div className="ps-4">
        {(data.price && 'مبلغ: ' + data.price) ||
          (data.type === 'achievement' ? (
            <button className="btn">
              <i className="icon-west me-1" />
              مشاهده
            </button>
          ) : (
            <span className="badge-3 rounded-pill fs-4 lh-base">
              به اتمام رسید
            </span>
          ))}
      </div>
    </div>
  )
}

export default Activity
