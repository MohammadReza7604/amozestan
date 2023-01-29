import { useState } from 'react'
import blogData from '../../data/blog.json'
import Layout from '../../components/Layout'
import BreadCrumbTwo from '../../components/common/BreadCrumbTwo'
import CTA from '../../components/common/CTA'
import BlogPostList from '../../components/Blog/BlogPostList'
import BlogSidebar from '../../components/Blog/BlogSidebar'

function Blog() {
  const [currentPage, setCurrentPage] = useState(1)

  const perPage = 7
  const pageCount = Math.ceil(blogData.blogs.length / perPage)
  const start = (currentPage - 1) * perPage
  const end = currentPage * perPage
  return (
    <Layout>
      <BreadCrumbTwo title="لیست بلاگ" />

      <section className="section-gap-equal">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-8">
              {blogData.blogs.slice(start, end).map((blog) => (
                <div className="blog-standard-each-item" key={blog.id}>
                  <BlogPostList blogInfo={blog} />
                </div>
              ))}

              <div>
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
                      className={currentPage === i + 1 ? 'active' : undefined}
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

            <div className="col-lg-4">
              <BlogSidebar
                blogItems={blogData.blogs}
                categories={blogData.categories}
                archives={blogData.archives}
                tags={blogData.tags}
              />
            </div>
          </div>
        </div>
      </section>

      <CTA addClassName={'m-0'} />
    </Layout>
  )
}

export default Blog
