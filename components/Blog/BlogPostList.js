import Image from 'next/image'
import Link from 'next/link'

function BlogPostList({ blogInfo }) {
  return (
    <div className="edu-blog blog-style-list">
      <div className="inner">
        <div className={`thumbnail`}>
          <Link href="/Blog/Blog_details">
            <Image
              src={'/images/blog/blog-list/' + blogInfo.imgSrc}
              alt="blogInfo.alt"
              width={300}
              height={230}
            />
          </Link>
        </div>
        <div className="content">
          <h5 className="title">
            <Link href="/Blog/Blog_details">{blogInfo.title}</Link>
          </h5>
          <ul className="blog-meta">
            <li className="d-flex">
              <i className="icon-27"></i>
              {blogInfo.date}
            </li>
            <li className="d-flex">
              <i className="icon-28"></i>
              {blogInfo.comment}
            </li>
          </ul>
          <p>{blogInfo.excerpt}</p>
          <div className="read-more-btn">
            <Link
              href="/Blog/Blog_details"
              className="edu-btn btn-border btn-medium"
            >
              بیشتر <i className="icon-west"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostList
