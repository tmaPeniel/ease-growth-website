
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
