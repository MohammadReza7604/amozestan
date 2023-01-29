function Sidebar() {
  return (
    <div className="edu-course-sidebar">
      <div className="edu-course-widget widget-category">
        <div className="inner">
          <h5 className="widget-title">فیلتر بر اساس دسته بندی</h5>
          <div className="content">
            <div className="edu-form-check">
              <input type="checkbox" id="cat-check1" defaultChecked={true} />
              <label htmlFor="cat-check1">دسته بندی تست<span>(7)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="cat-check2" />
              <label htmlFor="cat-check2">دسته بندی تست <span>(2)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="cat-check3" />
              <label htmlFor="cat-check3">دسته بندی تست<span>(3)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="cat-check4" />
              <label htmlFor="cat-check4">دسته بندی تست<span>(6)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="cat-check5" />
              <label htmlFor="cat-check5">دسته بندی تست<span>(2)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="cat-check6" />
              <label htmlFor="cat-check6">دسته بندی تست<span>(9)</span></label>
            </div>
          </div>
        </div>
      </div>
      <div className="edu-course-widget widget-level">
        <div className="inner">
          <h5 className="widget-title">سطح</h5>
          <div className="content">
            <div className="edu-form-check">
              <input type="checkbox" id="level-check1" />
              <label htmlFor="level-check1">تمام سطوح <span>(23)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="level-check2" />
              <label htmlFor="level-check2">مبتدی <span>(7)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="level-check3" />
              <label htmlFor="level-check3">حرفه ای <span>(10)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="level-check4" />
              <label htmlFor="level-check4">پیشرفته <span>(13)</span></label>
            </div>
          </div>
        </div>
      </div>
      <div className="edu-course-widget widget-language">
        <div className="inner">
          <h5 className="widget-title">زبان</h5>
          <div className="content">
            <div className="edu-form-check">
              <input type="checkbox" id="lang-check1" />
              <label htmlFor="lang-check1">انگلیسی <span>(12)</span></label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="lang-check2" />
              <label htmlFor="lang-check2">فارسی <span>(7)</span></label>
            </div>
          </div>
        </div>
      </div>
      <div className="edu-course-widget widget-price">
        <div className="inner">
          <h5 className="widget-title">قیمت</h5>
          <div className="content">
            <div className="edu-form-check">
              <input type="checkbox" id="price-check1" />
              <label htmlFor="price-check1">تمام قیمت ها</label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="price-check2" />
              <label htmlFor="price-check2">رایگان</label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="price-check3" />
              <label htmlFor="price-check3">کم به زیاد</label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="price-check4" />
              <label htmlFor="price-check4">زیاد به کم</label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="price-check5" />
              <label htmlFor="price-check5">پرداخت شده</label>
            </div>
          </div>
        </div>
      </div>
      <div className="edu-course-widget widget-rating">
        <div className="inner">
          <h5 className="widget-title">امتیاز</h5>
          <div className="content">
            <div className="edu-form-check">
              <input type="checkbox" id="rating-check1" />
              <label htmlFor="rating-check1">
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <span>(7)</span>
              </label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="rating-check2" />
              <label htmlFor="rating-check2">
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="off icon-23"></i>
                <span>(2)</span>
              </label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="rating-check3" />
              <label htmlFor="rating-check3">
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="off icon-23"></i>
                <i className="off icon-23"></i>
                <span>(3)</span>
              </label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="rating-check4" />
              <label htmlFor="rating-check4">
                <i className="icon-23"></i>
                <i className="icon-23"></i>
                <i className="off icon-23"></i>
                <i className="off icon-23"></i>
                <i className="off icon-23"></i>
                <span>(6)</span>
              </label>
            </div>
            <div className="edu-form-check">
              <input type="checkbox" id="rating-check5" />
              <label htmlFor="rating-check5">
                <i className="icon-23"></i>
                <i className="off icon-23"></i>
                <i className="off icon-23"></i>
                <i className="off icon-23"></i>
                <i className="off icon-23"></i>
                <span>(2)</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;