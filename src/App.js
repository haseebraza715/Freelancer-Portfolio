import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components for better performance
const AboutUs = React.lazy(() => import("./components/AboutUs"));
const Services = React.lazy(() => import("./components/Services"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const Contact = React.lazy(() => import("./components/Contact"));
const CallToAction = React.lazy(() => import("./components/CallToAction"));

const App = () => {
  return (
    <>
      {/* Helmet for SEO and Metadata */}
      <Helmet>
        <title>Freelancer Portfolio</title>
        <meta
          name="description"
          content="A professional freelancer portfolio showcasing skills, services, and projects."
        />
        <meta
          name="keywords"
          content="freelancer, portfolio, web development, design, services"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Freelancer Portfolio" />
        <meta
          property="og:description"
          content="A professional freelancer portfolio showcasing skills, services, and projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
      </Helmet>

    

      {/* Error Boundary to catch errors */}
      <ErrorBoundary>
        <Header />
        <Hero />

        {/* Lazy-loaded components with Suspense fallback */}
        <Suspense fallback={<div>Loading...</div>}>
          <AboutUs />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
          <CallToAction />
        </Suspense>

        <Footer />
        <ScrollToTop />
      </ErrorBoundary>
    </>
  );
};

export default App;