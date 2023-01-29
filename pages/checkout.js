import Layout from '../components/Layout'
import BreadCrumbTwo from '../components/common/BreadCrumbTwo'
import { useState } from 'react'

function checkout() {
  const [show, setShow] = useState(false)
  return (
    <Layout>
      <BreadCrumbTwo title="صفحه پرداخت" />
      <section className="checkout-page-area section-gap-equal">
        <div className="container">
          <form>
            <div className="checkout-notice">
              <div className="coupn-box">
                <h6 className={`toggle-bar ${show ? 'active' : ''}`}>
                  {' '}
                  کد تخفیف دارید؟{' '}
                  <a
                    onClick={() => setShow((p) => !p)}
                    className="toggle-btn"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    در اینجا کد تخفیف را وارد کنید
                  </a>
                </h6>

                <div className={`toggle-open ${show ? 'd-block' : 'd-none'}`}>
                  <p>اگر کد تخفیف دارید، لطفاً آن را در زیر اعمال کنید.</p>
                  <div className="input-group">
                    <input placeholder="کد تخفیف را وارد کنید" type="text" />
                    <div className="apply-btn">
                      <button type="submit" className="edu-btn btn-medium">
                        اعمال کردن
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row--25">
              <div className="col-lg-6">
                <div className="checkout-billing">
                  <h3 className="title">اطلاعات خرید</h3>
                  <div className="row g-lg-5">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>نام*</label>
                        <input type="text" id="first-name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>نام خانوادگی*</label>
                        <input type="text" id="last-name" />
                      </div>
                    </div>
                  </div>
                  {/*<div className="form-group">*/}
                  {/*  <label>Company Name</label>*/}
                  {/*  <input type="text" id="company-name" />*/}
                  {/*</div>*/}
                  {/*<div className="form-group">*/}
                  {/*  <label>Email Address*</label>*/}
                  {/*  <input type="email" id="email" />*/}
                  {/*</div>*/}
                  {/*<div className="row g-lg-5">*/}
                  {/*  <div className="col-lg-6">*/}
                  {/*    <div className="form-group">*/}
                  {/*      <label>Phone*</label>*/}
                  {/*      <input type="tel" id="phone" />*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  <div className="col-lg-6">*/}
                  {/*    <div className="form-group">*/}
                  {/*      <label>Country*</label>*/}
                  {/*      <select id="country">*/}
                  {/*        <option value="0">Select Option</option>*/}
                  {/*        <option value="3">Australia</option>*/}
                  {/*        <option value="4">England</option>*/}
                  {/*        <option value="6">New Zealand</option>*/}
                  {/*        <option value="5">Switzerland</option>*/}
                  {/*        <option value="1">United Kindom (UK)</option>*/}
                  {/*        <option value="2">United States (USA)</option>*/}
                  {/*      </select>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="form-group">*/}
                  {/*  <label>Address*</label>*/}
                  {/*  <input type="text" id="address1" />*/}
                  {/*  <input type="text" id="address2" />*/}
                  {/*</div>*/}
                  {/*<div className="form-group">*/}
                  {/*  <label>Town/ City*</label>*/}
                  {/*  <input type="text" id="town" />*/}
                  {/*</div>*/}
                  {/*<div className="row g-lg-5">*/}
                  {/*  <div className="col-lg-6">*/}
                  {/*    <div className="form-group">*/}
                  {/*      <label>State*</label>*/}
                  {/*      <select id="state">*/}
                  {/*        <option value="0">Select Option</option>*/}
                  {/*        <option value="1">Australia</option>*/}
                  {/*        <option value="2">England</option>*/}
                  {/*        <option value="3">New Zealand</option>*/}
                  {/*        <option value="4">Switzerland</option>*/}
                  {/*        <option value="5">United Kindom (UK)</option>*/}
                  {/*        <option value="6">United States (USA)</option>*/}
                  {/*      </select>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  <div className="col-lg-6">*/}
                  {/*    <div className="form-group">*/}
                  {/*      <label>Zip Code*</label>*/}
                  {/*      <input type="tel" id="phone" />*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  <div className="form-group">
                    <div className="edu-form-check">
                      <input type="checkbox" id="crt-accnt" className="w-25" />
                      <label htmlFor="crt-accnt">اکانت ساخته شود</label>
                    </div>
                  </div>
                  <div className="form-group mt--50 mb-0">
                    <label>توضیحات سفارش</label>
                    <textarea
                      id="notes"
                      rows="4"
                      placeholder="توضیحات سفارش شما"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="order-summery checkout-summery">
                  <div className="summery-table-wrap">
                    <h4 className="title">سفارش شما</h4>
                    <table className="table summery-table">
                      <tbody>
                        <tr>
                          <td>
                            پکیج فلش کارت 1{' '}
                            <span className="quantity">x 1</span>
                          </td>
                          <td>700,000 تومان</td>
                        </tr>
                        <tr>
                          <td>
                            پکیج فلش کارت 1{' '}
                            <span className="quantity">x 1</span>
                          </td>
                          <td>700,000 تومان</td>
                        </tr>
                        <tr>
                          <td>
                            پکیج فلش کارت 1{' '}
                            <span className="quantity">x 1</span>
                          </td>
                          <td>700,000 تومان</td>
                        </tr>
                        <tr className="order-subtotal">
                          <td>جمع کل</td>
                          <td>700,000 تومان</td>
                        </tr>
                        <tr className="order-total">
                          <td>قابل پرداخت</td>
                          <td>700,000 تومان</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="order-payment">
                  <h4 className="title">پرداخت</h4>
                  <div className="payment-method">
                    <div className="form-group">
                      <div className="edu-form-check">
                        <input type="radio" id="pay-bank" name="payment" />
                        <label htmlFor="pay-bank">پرداخت مستقیم</label>
                      </div>
                      <p>ارسال مستقیم مبلغ به حساب بانکی سایت</p>
                    </div>
                    <div className="form-group">
                      <div className="edu-form-check">
                        <input type="radio" id="pay-pal" name="payment" />
                        <label htmlFor="pay-pal"> زرین پال </label>
                        <a href="#"> زرین پال چیست؟ </a>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="edu-btn order-place">
                    ثبت سفارش <i className="icon-west"></i>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default checkout
