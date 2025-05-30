import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";

const Loader = lazy(() => import("./pages/Loader"));
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
// const Services = lazy(() => import("./pages/Service"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Technologies = lazy(() => import("./pages/Technologies"));
const ScrollToTop = lazy(() => import("./utils/ScrollToTop"));
const Career = lazy(() => import("./pages/Career"));
const WebDevelopmentService = lazy(() => import("./pages/WebDevelopmentService"));
const SeoService = lazy(() => import("./pages/SeoService"));
const UIUXService = lazy(() => import("./pages/UIUXService"));
const DigitalMarketingService = lazy(
  () => import("./pages/DigitalMarketingService")
);
const PortFolio = lazy(() => import("./pages/Protfolio"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Blog=lazy(()=>import("./pages/Blog"))
const ExpandedBlog=lazy(()=>import("./pages/ExpandedBlog"))
// const Test=lazy(()=>import("./pages/Test"))

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/services/webDevelopment" element={<WebDevelopmentService />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="/services/seo" element={<SeoService />} />
            <Route path="/services/uiux" element={<UIUXService />} />
            <Route
              path="/services/digitalmarketing"
              element={<DigitalMarketingService />}
            />
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* <Route path="/test" element={<Test />} /> */}

            <Route path="/technologies" element={<Technologies />} />
            <Route path="/career" element={<Career />} />
            <Route path="/expandedBlog/:slug" element={<ExpandedBlog />} />


            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
