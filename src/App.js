import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CallToAction from "./components/CallToAction";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
