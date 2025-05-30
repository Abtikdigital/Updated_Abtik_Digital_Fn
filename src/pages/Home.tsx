import Mainlayout from "../layout/Mainlayout";
import Hero from "../section/Hero";
// import HeroSection from "../section/HeroSection1";
// import Partner from "./Partner";
import ClientStats from "./ClientStats";
import Faq from "../pages/Faq";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ContactUs from "../section/Contact";
import Events from "./Events";

const Home = () => {
  return (
    <Mainlayout>
      <Hero />
      {/* <Partner /> */}
      <Services/>
      <Events/>
      <ClientStats/>
      <Testimonial/>
      {/* <HeroSection /> */}
      <Faq />
      <ContactUs/>
    </Mainlayout>
  );
};

export default Home;
