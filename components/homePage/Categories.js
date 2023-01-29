import SectionTitle from "../common/SectionTitle";

function Categories() {
  const categories = [
    {
      title: "مدیرید کسب و کار",
      iconClass: "icon-9",
      colorClass: "color-primary-style",
      extraClass: "business-management"
    },
    {
      title: "هنر و طراحی",
      iconClass: "icon-10",
      colorClass: "color-secondary-style",
      extraClass: "art-design"
    },
    {
      title: "توسعه فردی",
      iconClass: "icon-11",
      colorClass: "color-extra01-style",
      extraClass: "personal-development"
    },
    {
      title: "تناسب اندام و سلامت",
      iconClass: "icon-12",
      colorClass: "color-tertiary-style",
      extraClass: "health-fitness"
    },
    {
      title: "علم داده",
      iconClass: "icon-13",
      colorClass: "color-extra02-style",
      extraClass: "data-science"
    },
    {
      title: "مارکتینگ",
      iconClass: "icon-14",
      colorClass: "color-extra03-style",
      extraClass: "marketing"
    },
    {
      title: "کسب و کار و مال",
      iconClass: "icon-15",
      colorClass: "color-extra04-style",
      extraClass: "business-finance"
    },
    {
      title: "علم کامپیوتر",
      iconClass: "icon-16",
      colorClass: "color-extra05-style",
      extraClass: "computer-science"
    },
    {
      title: "عکاسی و فیلمبرداری",
      iconClass: "icon-17",
      colorClass: "color-extra06-style",
      extraClass: "video-photography"
    }
  ]
  return (
    <div className="edu-categorie-area categorie-area-2 edu-section-gap">
      <div className="container">
        <SectionTitle showMark={true}
                      alignment="section-center"
                      title="دسته بندی های برتر"
                      subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" />

        <div className="row g-5">
          {categories.map((category, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className={`categorie-grid categorie-style-2 ${category.colorClass}`}>
                <div className="icon">
                  <i className={category.iconClass + ' ' + category.extraClass}></i>
                </div>
                <div className="content">
                  <h5 className="title">{category.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </div >
  );
}

export default Categories;