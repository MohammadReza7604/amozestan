import Link from 'next/link'
import MouseMove from '../animation/MouseMove'

function BreadCrumbTwo({ title }) {
  return (
    <div className="edu-breadcrumb-area">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="page-title">
            <h1 className="title">{title}</h1>
          </div>
          <ul className="edu-breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">خانه</Link>
            </li>
            <li className="separator">
              <i className="icon-angle-left"></i>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
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
  )
}

export default BreadCrumbTwo
