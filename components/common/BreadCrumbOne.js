import Link from 'next/link'

function BreadCrumbOne({ title }) {
  return (
    <div className="edu-breadcrumb-area breadcrumb-style-5">
      <div className="container">
        <div className="breadcrumb-inner">
          <ul className="edu-breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
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
    </div>
  )
}

export default BreadCrumbOne
