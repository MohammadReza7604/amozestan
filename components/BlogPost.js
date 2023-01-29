import Image from 'next/image'
import Link from 'next/link'

function BlogPost({
  category,
  title,
  date,
  comment,
  excerpt,
  imgSrc,
  extraClass,
}) {
  return (
    <div className="edu-blog blog-style-1">
      <div className="inner">
        <div className={`thumbnail ${extraClass}`}>
          <Link href="/blog/blog-details">
            <Image
              width={370}
              height={370}
              src={`/images/blog/blog-one/${imgSrc}`}
              alt="blogInfo.alt"
            />
          </Link>
        </div>
        <div className="content position-top">
          <div className="read-more-btn">
            <Link href="/blog/blog-details" className="btn-icon-round">
              <i className="icon-4"></i>
            </Link>
          </div>
          <div className="category-wrap">
            <Link href="/blog/blog-masonry" className="blog-category">
              {' '}
              {category}
            </Link>
          </div>
          <h5 className="title">
            {' '}
            <Link href="/blog/blog-details">{title}</Link>
          </h5>
          <ul className="blog-meta">
            <li>
              <i className="icon-27"></i>
              {date}
            </li>
            <li>
              <i className="icon-28"></i>
              {comment}
            </li>
          </ul>
          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
