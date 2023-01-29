import About from "../components/aboutPage/About";
import ContactInfo from "../components/aboutPage/ContactInfo";
import Fact from "../components/aboutPage/Fact";
import Instructor from "../components/aboutPage/Instructor";
import WhyChoose from "../components/aboutPage/WhyChoose";
import BreadCrumbOne from "../components/common/BreadCrumbOne";
import Layout from "../components/Layout";

function about() {
  return (
    <Layout>
      <BreadCrumbOne title='About Us 3' />
      <About />
      <Fact />
      <WhyChoose />
      <ContactInfo />
      <Instructor />
    </Layout>
  );
}

export default about;