import MouseMove from '../animation/MouseMove'
import SectionTitle from '../common/SectionTitle'
import blogData from '../../data/blog.json'
import BlogPost from '../BlogPost'

function Blog() {
  return (
    <div className="edu-blog-area blog-area-1 edu-section-gap">
      <div className="container">
        <SectionTitle
          showMark={true}
          preTitle="جدید ترین مقالات"
          title="دانستی های جذاب آموزستان"
          alignment="section-center"
        />

        <div className="row g-5">
          {blogData.blogs.slice(0, 3).map((b, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 col-12"
              data-aos-delay="100"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <BlogPost
                extraClass={'edu-home'}
                category={b.category}
                title={b.title}
                imgSrc={b.imgSrc}
                date={b.date}
                comment={b.comment}
                excerpt={b.excerpt}
              />
            </div>
          ))}
        </div>
        <ul className="shape-group">
          <MouseMove
            addClassName="shape-1"
            dataDepth="-1.4"
            imgSrc="/images/about/shape-02.png"
          />
          <li className="scene shape-2">
            <span data-depth="2.5"></span>
          </li>
          <MouseMove
            addClassName="shape-3"
            dataDepth="-2.3"
            imgSrc="/images/counterup/shape-05.png"
          />
        </ul>
      </div>
    </div>
  )
}

export default Blog
