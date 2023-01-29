import Image from 'next/image'
import Link from 'next/link'

function BlogSidebar({ blogItems, categories, archives, tags }) {
  return (
    <>
      <div className="edu-blog-sidebar">
        <div className="edu-blog-widget widget-search">
          <div className="inner">
            <h4 className="widget-title">جستجو</h4>
            <div className="content">
              <form className="blog-search" action="#">
                <button className="search-button">
                  <i className="icon-2"></i>
                </button>
                <input type="text" placeholder="جستجو" />
              </form>
            </div>
          </div>
        </div>

        <div className="edu-blog-widget widget-latest-post">
          <div className="inner">
            <h4 className="widget-title">آخرین پست ها</h4>
            <div className="content latest-post-list">
              {blogItems.slice(0, 3).map((blog) => (
                <div className="latest-post" key={blog.id}>
                  <div className="thumbnail">
                    <Link href="/Blog/Blog_details">
                      <Image
                        src={'/images/blog/blog-thumb/' + blog.thumbSrc}
                        alt="blog.alt"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <h6 className="title">
                      <Link href="/Blog/Blog_details">{blog.title}</Link>
                    </h6>
                    <ul className="blog-meta">
                      <li className="d-flex">
                        <i className="icon-27"></i>
                        <span>{blog.date}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="edu-blog-widget widget-categories">
          <div className="inner">
            <h4 className="widget-title">دسته بندی ها</h4>
            <div className="content">
              <ul className="category-list">
                {categories.slice(0, 6).map((cat, i) => (
                  <li key={i}>
                    <Link href="/Blog">
                      {cat.title} <span>({cat.number})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="edu-blog-widget widget-action">
          <div className="inner">
            <h4 className="title">
              آموزش آنلاین با <span>آموزستان </span>
            </h4>
            <span className="shape-line">
              <i className="icon-19"></i>
            </span>
            <br />
            <br />
            <br />
            <Link href="/course/course-one" className="edu-btn btn-medium">
              شروع کنید <i className="icon-west"></i>
            </Link>
          </div>
        </div>

        <div className="edu-blog-widget widget-categories">
          <div className="inner">
            <h4 className="widget-title">آرشیوها</h4>
            <div className="content">
              <ul className="category-list">
                {archives.slice(0, 5).map((archive, i) => (
                  <li key={i}>
                    <Link href="/Blog">
                      {archive.title} <span>({archive.number})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="edu-blog-widget widget-tags">
          <div className="inner">
            <h4 className="widget-title">تگ ها</h4>
            <div className="content">
              <div className="tag-list">
                {tags.slice(0, 5).map((tag, i) => (
                  <Link href="/Blog" key={i}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSidebar
