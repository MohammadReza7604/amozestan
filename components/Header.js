import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenuLink from "./common/MobileMenuLink";

function Header({ func, sign, changeState }) {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const menus = [
    {
      url: "",
      title: "خانه",
      submenu: [
        {
          url: "/",
          title: "آموزش در آموزستان",
          tag: "جدید",
          tagClass: "badge-1",
        },
        {
          url: "/distant-learning",
          title: "لینک دلخواه",
        },
        {
          url: "/university",
          title: "لینک دلخواه",
        },
        {
          url: "/online-academy",
          title: "لینک دلخواه",
        },
        {
          url: "/modern-schooling ",
          title: "لینک دلخواه",
          tag: "جدید",
          tagClass: "badge",
        },
        {
          url: "/kitchen-coach",
          title: "لینک دلخواه",
        },
        {
          url: "/yoga-instructor",
          title: "لینک دلخواه",
        },
        {
          url: "/kindergarten",
          title: "لینک دلخواه",
        },
        {
          url: "/health-coch",
          title: "لینک دلخواه",
          tag: "جدید",
          tagClass: "badge",
        },
        {
          url: "/landing-demo",
          title: "لینک دلخواه",
        },
      ],
    },
    {
      url: "/Questions/Quiz",
      title: "سوالات",
    },
    {
      url: "",
      title: "فلش کارت",
      submenu: [
        {
          url: "/courses",
          title: "فلش کارت ها",
        },
        {
          url: "/flashcard",
          title: "صفحه تست",
        },
        {
          url: "/flashcard",
          title: "صفحه تست",
        },
        {
          url: "/flashcard",
          title: "صفحه تست",
        },
        {
          url: "/flashcard",
          title: "صفحه تست",
        },
        {
          url: "/flashcard",
          title: "صفحه تست",
        },
        {
          url: "/flashcard",
          title: "صفحه تست",
        },
      ],
    },
    {
      url: "",
      title: "وبلاگ",
      submenu: [
        {
          url: "/Blog",
          title: "لیست وبلاگ",
        },
        {
          url: "/Blog/Blog_details",
          title: "جزئیات وبلاگ",
        },
      ],
    },
    {
      url: "/contact_us",
      title: "تماس با ما",
    },
  ];

  return (
    <header className="edu-header header-style-1 header-fullwidth">
      <div id="edu-sticky-placeholder"></div>
      <div className={`header-mainmenu edu-sticky`}>
        <div className="container-fluid">
          <div className="header-navbar">
            <div className="header-brand">
              <div className="logo">
                <Link href="/">
                  <Image
                    className="logo-dark"
                    src="/images/logo/logo-white.png"
                    height={50}
                    width={158}
                    alt="Corporate Logo"
                  />
                </Link>
              </div>
              <div className="header-category">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="has-droupdown">
                      <a href="404.html#">
                        <i className="icon-1" />
                        دسته بندی
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="course-one.html">طراحی </a>
                        </li>
                        <li>
                          <a href="course-one.html">توسعه </a>
                        </li>
                        <li>
                          <a href="course-one.html">معماری</a>
                        </li>
                        <li>
                          <a href="course-one.html">زندگی شخصی</a>
                        </li>
                        <li>
                          <a href="course-one.html">علوم و داده </a>
                        </li>
                        <li>
                          <a href="course-one.html">بازرگانی</a>
                        </li>
                        <li>
                          <a href="course-one.html">موسیقی</a>
                        </li>
                        <li>
                          <a href="course-one.html">عکاسی</a>
                        </li>
                        <li>
                          <a href="course-one.html"> سرمایه گذاری </a>
                        </li>
                        <li>
                          <a href="course-one.html">انگیزه</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-mainnav">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  {menus.map((l, i) =>
                    l.submenu ? (
                      <li className="has-droupdown" key={i}>
                        <Link href={l.url}>{l.title}</Link>
                        <ul className="submenu">
                          {l.submenu.map((link, i) => (
                            <li key={i}>
                              <Link href={link.url}>
                                {link.title + " "}
                                {link.tag && (
                                  <span className={link.tagClass}>
                                    {link.tag}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : l.megamenu ? (
                      <li className="has-droupdown" key={i}>
                        <Link href={l.url}>{l.title}</Link>
                        <ul className="mega-menu">
                          {l.megamenu.map((m, i) => (
                            <li key={i}>
                              <h6 className="menu-title">{m.title}</h6>
                              <ul className="submenu mega-sub-menu-01">
                                {m.submenu.map((link, i) => (
                                  <li key={i}>
                                    <a href={link.url}>{link.title}</a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={i}>
                        <Link href={l.url}>{l.title}</Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <ul className="header-action">
                <li className="search-bar">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button className="search-btn" type="button">
                      <i className="icon-2"></i>
                    </button>
                  </div>
                </li>
                <li className="icon search-icon">
                  <a
                    className="search-trigger"
                    role="button"
                    onClick={() => setSearch((p) => !p)}
                  >
                    <i className="icon-2"></i>
                  </a>
                </li>
                <li className="icon cart-icon">
                  <Link href={"/cart"} className="cart-icon">
                    <i className="icon-3"></i>
                    <span className="count">0</span>
                  </Link>
                </li>

                <li className="header-btn">
                  {sign ? (
                    <Link href="/dashboard" className="border-0 ms-2">
                      <Image
                        alt="profile pic"
                        className="rounded-circle"
                        src="/images/blog/blog-thumb/small-post-01.jpg"
                        width={45}
                        height={45}
                      />
                    </Link>
                  ) : (
                    <a
                      role={"button"}
                      onClick={func}
                      className="edu-btn btn-medium"
                    >
                      رایگان امتحان کن <i className="icon-west"></i>
                    </a>
                  )}
                </li>

                <li className="mobile-menu-bar d-block d-xl-none">
                  <button
                    className="hamberger-button"
                    onClick={() => setMenu((p) => !p)}
                  >
                    <i className="icon-54"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`popup-mobile-menu ${menu && "active"}`}>
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link href="/">
                <Image
                  width={142.2}
                  height={45}
                  className="logo-dark"
                  src="/images/logo/logo-white.png"
                  alt="Corporate Logo"
                />
              </Link>
            </div>
            <div className="close-menu">
              <button
                className="close-button"
                onClick={() => setMenu((p) => !p)}
              >
                <i className="icon-73"></i>
              </button>
            </div>
          </div>
          <ul className="mainmenu">
            {sign && (
              <li>
                <Link href="/dashboard" className="account-btn">
                  <h4 className="m-0">
                    پارسا براتی <br />
                    <span className="text-muted fs-4">دانشجو</span>
                  </h4>
                  <Image
                    alt="profile pic"
                    className="rounded-3"
                    src="/images/blog/blog-thumb/small-post-01.jpg"
                    width={60}
                    height={60}
                  />
                </Link>
              </li>
            )}
            {menus.map((l, i) => (
              <MobileMenuLink key={i} l={l} index={i} />
            ))}
            {!sign ? (
              <li
                className="header-btn-mobile mt-1"
                onClick={() => {
                  setMenu(false);
                  func();
                }}
              >
                <a role="button" className="edu-btn btn-medium">
                  رایگان امتحان کن
                  <i className="icon-west"></i>
                </a>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => changeState(false)}
                  className="btn btn-danger mx-auto px-5 fs-3 rounded-3 mt-4 d-flex align-items-center"
                >
                  خروج
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width={20}
                    height={20}
                  >
                    <path
                      fill="white"
                      d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"
                    />
                  </svg>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className={`edu-search-popup ${search && "open"}`}>
        <div className="content-wrap">
          <div className="site-logo">
            <Image
              width={158}
              height={50}
              className="logo-dark"
              src="/images/logo/logo-white.png"
              alt="Corporate Logo"
            />
          </div>
          <div className="close-button">
            <button
              className="close-trigger"
              onClick={() => setSearch((p) => !p)}
            >
              <i className="icon-73"></i>
            </button>
          </div>
          <div className="inner">
            <form className="search-form" action="404.html#">
              <input
                type="text"
                className="amoozestan-search-popup-field"
                placeholder="در اینجا جستجو کنید..."
              />
              <button className="submit-button">
                <i className="icon-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
