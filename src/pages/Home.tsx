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
import FadeInSection from "../utils/Fadein";

const Home = () => {
  return (
    <Mainlayout>
    

      <Hero />
   
      {/* <Partner /> */}
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Events />
      </FadeInSection>
      <FadeInSection>
        <ClientStats />
      </FadeInSection>
      <FadeInSection>
        <Testimonial />
      </FadeInSection>
      {/* <HeroSection /> */}
      <FadeInSection>
        <Faq />
      </FadeInSection>
      <FadeInSection>
        <ContactUs />
      </FadeInSection>
    </Mainlayout>
  );
};

export default Home;
