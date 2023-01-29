import Link from 'next/link'
import Layout from '../components/Layout'
import BreadCrumbTwo from '../components/common/BreadCrumbTwo'
import productsData from '../data/products'

function cart() {
  return (
    <Layout>
      <BreadCrumbTwo title="سبد خرید" />

      <section className="cart-page-area edu-section-gap">
        <div className="container">
          <div className="table-responsive">
            <table className="table cart-table">
              <thead>
                <tr>
                  <th scope="col" className="product-remove"></th>
                  <th scope="col" className="product-thumbnail"></th>
                  <th scope="col" className="product-title">
                    نام محصول
                  </th>
                  <th scope="col" className="product-price">
                    قیمت
                  </th>
                  <th scope="col" className="product-quantity">
                    تعداد
                  </th>
                  <th scope="col" className="product-subtotal">
                    جمع فرعی
                  </th>
                </tr>
              </thead>

              <tbody>
                {productsData.slice(0, 3).map((product) => (
                  <tr key={product.id}>
                    <td className="product-remove">
                      <a href="#" className="remove-wishlist">
                        <i className="icon-73"></i>
                      </a>
                    </td>
                    <td className="product-thumbnail">
                      <Link href="/">
                        <img
                          src={'/images/shop/' + product.imgSrc}
                          alt={product.title + ' Thumbnail'}
                        />
                      </Link>
                    </td>
                    <td className="product-title">
                      <Link href="/shop/product-details">{product.title}</Link>
                    </td>
                    <td className="product-price" data-title="Price">
                      <span className="currency-symbol">$</span>70.30
                    </td>
                    <td className="product-quantity" data-title="Qty">
                      <div className="pro-qty">
                        <span className="dec qtybtn">-</span>
                        <input type="text" value="1" />
                        <span className="inc qtybtn">+</span>
                      </div>
                    </td>
                    <td className="product-subtotal" data-title="Subtotal">
                      <span className="currency-symbol">$</span>
                      {product.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-update-btn-area">
            <div className="input-group product-cupon">
              <input placeholder="کد تخفیف..." type="text" />
              <button type="submit" className="submit-btn">
                <i className="icon-west"></i>
              </button>
            </div>
            <div className="update-btn">
              <Link href="/" className="edu-btn btn-border btn-medium disabled">
                به روز رسانی سبد خرید <i className="icon-west"></i>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
              <div className="order-summery">
                <h4 className="title">مجموع سبد خرید</h4>
                <table className="table summery-table">
                  <tbody>
                    <tr className="order-subtotal">
                      <td>جمع فرعی</td>
                      <td>700.000 تومان</td>
                    </tr>
                    <tr className="order-total">
                      <td>کل سفارش</td>
                      <td>700.000 تومان</td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  href="/checkout"
                  className="edu-btn btn-medium checkout-btn"
                >
                  فرآیند پرداخت <i className="icon-west"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default cart
