import blogData from '../../data/blog.json'
import BlogSidebar from '../../components/Blog/BlogSidebar'
import Layout from '../../components/Layout'
import BreadCrumbTwo from '../../components/common/BreadCrumbTwo'
import CTA from '../../components/common/CTA'
import Image from 'next/image'
import Link from 'next/link'

function Blog_details() {
  return (
    <Layout>
      <BreadCrumbTwo pageTitle="جزئیات وبلاگ" title="جزئیات وبلاگ" />

      <div className="blog-details-area section-gap-equal">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <div className="entry-content">
                  <span className="category">توسعه دهنده</span>
                  <h3 className="title">
                    چگونه مهندس نرم افزار روزهای کاری کامپیوتر شویم؟
                  </h3>
                  <ul className="blog-meta">
                    <li className="d-flex">
                      <i className="icon-27"></i>10 آذر 1401
                    </li>
                    <li className="d-flex">
                      <i className="icon-28"></i>9 کامنت
                    </li>
                  </ul>
                  <div className="thumbnail">
                    <Image
                      width={750}
                      height={420}
                      src="/images/blog/blog-large-1.jpg"
                      alt="Blog Image"
                    />
                  </div>
                </div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <ul>
                  <li>
                    ۶ پروژه زیبای دنیای واقعی برای نمونه کار خود بسازید (نه
                    برنامه های اسباب بازی خسته کننده)
                  </li>
                  <li>
                    تئوری پشت Vue.js را درک کنید و از آن در پروژه های واقعی
                    استفاده کنید
                  </li>
                  <li> طرح‌بندی‌های واکنش‌گرا، در دسترس و زیبا ایجاد کنید </li>
                </ul>
                <blockquote>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است،
                  </p>
                  <h5 className="author">پارسا براتی</h5>
                </blockquote>
                <h3 className="title">کامتازیا کامل</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
                <div className="features-image">
                  <div className="row g-md-5">
                    <div className="col-6">
                      <div className="thumb">
                        <Image
                          width={360}
                          height={270}
                          src="/images/blog/features-1.jpg"
                          alt="Features Images"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="thumb">
                        <Image
                          width={360}
                          height={270}
                          src="/images/blog/features-2.jpg"
                          alt="Features Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  نخبگان آدیپیسیسیک به دست می آید اما در همان زمان به همین صورت
                  می دهم تا با درد و رنج فراوان به کمترین حد ممکن برسم بهترین
                  تمرین ما کیست؟ نتیجه شک یا درد ناخوشایند در ملامت در لذت او می
                  خواهد یک مو باشد و بگذار از درد بگریزد، زیرا کسی او را به دنیا
                  نمی آورد لذت، چون لذت است، تحقیر می کند یا متنفر است یا فرار
                  می کند زیرا باعث دردهای شدید می شوند.
                </p>
                <p>
                  نتیجه شک یا درد ناخوشایند در ملامت در لذت او می خواهد یک مو
                  باشد و بگذار از درد بگریزد، زیرا کسی او را به دنیا نمی آورد
                  لذت، چون لذت است، تحقیر می کند یا متنفر است یا فرار می کند
                  زیرا باعث دردهای شدید می شوند.
                </p>
                <h3 className="title">انگیزه درونی</h3>
                <p>
                  نتیجه شک یا درد ناخوشایند در ملامت در لذت او می خواهد یک مو
                  باشد و بگذار از درد بگریزد، زیرا کسی او را به دنیا نمی آورد
                  لذت، چون لذت است، تحقیر می کند یا متنفر است یا فرار می کند
                  زیرا باعث دردهای شدید می شوند.
                </p>
                <ul>
                  <li>وگرنه درد به گردن او انداخته می شود</li>
                  <li>شهوات تاریک بیرون نمی آیند، تقصیر دارند</li>
                  <li>وگرنه درد به گردن او انداخته می شود</li>
                </ul>
                <div className="blog-share-area">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <div className="blog-tags">
                        <h6 className="title">Tags:</h6>
                        <div className="tag-list">
                          <a href="#">Language</a>
                          <a href="#">eLearn</a>
                          <a href="#">Tips</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="blog-share">
                        <h6 className="title">اشتراک گذاری در :</h6>
                        <ul className="social-share icon-transparent">
                          <li>
                            <a href="#">
                              <i className="icon-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-author">
                <div className="thumbnail">
                  <img src="/images/blog/author-01.jpg" alt="Author Images" />
                </div>
                <div className="author-content">
                  <h5 className="title">یک بنده خدا</h5>
                  <p>
                    برای شرایط خاص، ممکن است شادی در چیزی باشد که ما تحمل می
                    کنیم، درد، درد است، اما در نتیجه شرایط خاص، شادی ممکن است در
                    رنج و اندوهی باشد که تحمل می کنیم.
                  </p>
                  <ul className="social-share icon-transparent">
                    <li>
                      <a href="#">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="blog-pagination">
                <div className="row g-5">
                  <div className="col-lg-6">
                    <div className="blog-pagination-list prev-post">
                      <Link href="/">
                        <i className="icon-east"></i>
                        <span>طراحی آموزشی و یادگیرندگان بزرگسال</span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="blog-pagination-list next-post">
                      <Link href="/">
                        <span>صلاحیت برای میزان رضایت دانشجویان</span>
                        <i className="icon-west"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comment-area">
                <h3 className="heading-title">نظرات</h3>
                <div className="comment-list-wrapper">
                  <div className="comment">
                    <div className="thumbnail">
                      <Image
                        width={80}
                        height={80}
                        src="/images/blog/comment-01.jpg"
                        alt="Comment Images"
                      />
                    </div>
                    <div className="comment-content">
                      <h5 className="title">Haley Bennet</h5>
                      <span className="date">Oct 10, 2021</span>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است،
                      </p>
                      <div className="reply-btn-wrapper">
                        <a className="reply-btn" href="#">
                          پاسخ
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment comment-reply">
                    <div className="thumbnail">
                      <Image
                        width={80}
                        height={80}
                        src="/images/blog/comment-02.jpg"
                        alt="Comment Images"
                      />
                    </div>
                    <div className="comment-content">
                      <h5 className="title">Simon Baker</h5>
                      <span className="date">Oct 10, 2021</span>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است،
                      </p>
                      <div className="reply-btn-wrapper">
                        <a className="reply-btn" href="#">
                          پاسخ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-form-area">
                <h3 className="heading-title">نظر خود را اینجا بنویسید</h3>
                <form className="comment-form">
                  <div className="row g-5">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="comm-name"
                        id="comm-name"
                        placeholder="نام*"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        type="email"
                        name="comm-email"
                        id="comm-email"
                        placeholder="ایمیل*"
                      />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="comm-message"
                        id="comm-message"
                        cols="30"
                        rows="5"
                        placeholder="پیام بگذارید"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <div className="edu-form-check">
                        <input type="checkbox" id="save-info" />
                        <label for="save-info">
                          برای دفعه بعد که نظر می دهم نام، ایمیل و وب سایت من را
                          در این مرورگر ذخیره کنید.
                        </label>
                      </div>
                    </div>
                    <div className="form-group col-12">
                      <button type="submit" className="edu-btn submit-btn">
                        ارسال پیام <i className="icon-west"></i>
                      </button>
                    </div>
                  </div>
                </form>
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
      </div>

      <CTA addClassName={'m-0'} />
    </Layout>
  )
}

export default Blog_details
