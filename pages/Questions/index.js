import Link from "next/link";
import BreadCrumbTwo from "../../components/common/BreadCrumbTwo";
import SectionTitle from "../../components/common/SectionTitle";
import Layout from "../../components/Layout";

function index() {
  return (
    <Layout>
      <BreadCrumbTwo title="سوالات" />
      <SectionTitle
        title="لطفا متد نمایش سوالات را انتخاب کنید"
        alignment="section-center mb-3"
      />
      <section className="select-method">
        <Link href="/Questions/Quiz/test">
          <span className="h2">آزمون</span>
          <p className="my-2 fs-4">توضیحات</p>
        </Link>
        <Link href="/Questions/Quiz/test">
          <span className="h2">مطالعه</span>
          <p className="my-2 fs-4">توضیحات</p>
        </Link>
      </section>
    </Layout>
  );
}
// <Link href="/Questions/Study">

export default index;
