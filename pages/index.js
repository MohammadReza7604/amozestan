import Layout from '../components/Layout'
import Banner from '../components/homePage/Banner'
import Features from '../components/homePage/Features'
import Categories from '../components/homePage/Categories'
import About from '../components/homePage/About'
import ContactInfo from '../components/homePage/ContactInfo'
import CTA from '../components/common/CTA'
import Blog from '../components/homePage/Blog'
import Course from '../components/homePage/Course'
import Fact from '../components/homePage/Fact'

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Features />
      <Categories />
      <About />
      <Course />
      <Fact />
      <ContactInfo />
      <CTA />
      <Blog />
    </Layout>
  )
}
