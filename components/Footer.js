import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = (props) => {
  const [showFooter, setShowFooter] = useState(true);
  return (
    <footer className="edu-footer footer-lighten bg-image footer-style-1">
      <div className="footer-top footer-top-2">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="edu-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      width={158}
                      height={50}
                      className="logo-dark"
                      src="/images/logo/logo-white.png"
                      alt="Light Logo"
                    />
                  </Link>
                </div>
                <p className="description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <div className="widget-information">
                  <ul className="information-list">
                    <li>
                      <span>آدرس : </span>ایران - تهران
                    </li>
                    <li>
                      <span>تماس : </span>
                      <a className="ltr" href="tel:+011235641231">
                        +98 912 000 00 00
                      </a>
                    </li>
                    <li>
                      <span>ایمیل : </span>
                      <a href="mailto:info@amoozestan.com" target="_blank">
                        info@amoozestan.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="edu-footer-widget explore-widget">
                <h4 className="widget-title">بستر آنلاین</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <Link href="/about-us-one">درباره</Link>
                    </li>
                    <li>
                      <Link href="/course/course-one">دوره ها</Link>
                    </li>
                    <li>
                      <Link href="/pricing-table">قیمت گذاری </Link>
                    </li>
                    <li>
                      <Link href="/instructor/instructor-one">مدرس</Link>
                    </li>
                    <li>
                      <Link href="/event/event-grid">مناسبت ها</Link>
                    </li>
                    <li>
                      <Link href="/instructor/instructor-profile">
                        پروفایل مدرس
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="edu-footer-widget quick-link-widget">
                <h4 className="widget-title">لینک ها</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <Link href="/faq">اطلاعات سایت</Link>
                    </li>
                    <li>
                      <Link href="/gallery-grid">گالری </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-standard">اخبار و مقالات </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">حخظ حریم شحصی</Link>
                    </li>
                    <li>
                      <Link href="/my-account">ثبت نام </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">تماس با ما </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="edu-footer-widget">
                <h4 className="widget-title">ارتباط</h4>
                <div className="inner">
                  <p className="description">
                    آدرس ایمیل خود را برای ثبت نام در اشتراک خبرنامه ما وارد
                    کنید
                  </p>
                  <div className="input-group footer-subscription-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="آدرس ایمیل"
                    />
                    <button className="edu-btn btn-medium" type="button">
                      اشتراک در <i className="icon-west"></i>
                    </button>
                  </div>
                  <ul className="social-share icon-transparent">
                    <li>
                      <a
                        href="https://facebook.com/"
                        target="_blank"
                        className="color-fb"
                      >
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/"
                        target="_blank"
                        className="color-linkd"
                      >
                        <i className="icon-linkedin2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        className="color-ig"
                      >
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        className="color-twitter"
                      >
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        className="color-yt"
                      >
                        <i className="icon-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <p>
                  Copyright {new Date().getFullYear()}{" "}
                  <Link href="/">Amoozestan</Link> طراحی توسط{" "}
                  <a href="https://parsa.today" target="_blank">
                    {" "}
                    Parsa.today{" "}
                  </a>{" "}
                  کلیه حقوق محفوظ است{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
