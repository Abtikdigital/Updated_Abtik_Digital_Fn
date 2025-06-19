import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import DigitalMarketingImage from "../assets/OurServices/DigitalMarkeingSection.jpg";
import { useDispatch } from "react-redux";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, ReactNode } from "react";


// Define interfaces for data objects
interface Service {
  title: string;
  description: string;
}

// Animation variants for smooth fade-in effect
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

const DigitalMarketing: FC = () => {
  const dispatch = useDispatch<any>();

  const handleOpenGetQuote = () => {
    dispatch({ type: "open" });
  };

  const benefits: string[] = [
    "Targeted reach to the right audience.",
    "Real-time performance tracking and analysis.",
    "Cost-effective strategy for brand awareness and lead generation.",
    "Improved engagement and customer loyalty.",
    "Increased sales and conversion rates.",
  ];

  const services: Service[] = [
    {
      title: "WhatsApp Green Tick Verification",
      description:
        "Get verified on WhatsApp and enhance your brand’s credibility with the green tick, improving trust and engagement.",
    },
    {
      title: "Social Media Post & Banner Creation",
      description:
        "Custom-designed, platform-optimized visuals that resonate with your audience across Instagram, Facebook, LinkedIn, and more.",
    },
    {
      title: "Social Media Account Handling",
      description:
        "From strategy to daily posts and replies, we manage your presence and drive consistent growth across channels.",
    },
    {
      title: "Paid Advertising",
      description:
        "Google Ads, Meta campaigns, and more — we craft performance-focused campaigns that generate ROI.",
    },
  ];

  return (
    <Mainlayout>
      <div className="min-h-screen w-full bg-[#0F172A] text-white">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* Left Side - Heading */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
            <h2 className="max-w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
              Digital Marketing
            </h2>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={IphoneImage}
              alt="iPhone Preview"
              className="w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Intro Section */}
        <SectionWithAnimation
          className="px-6 md:px-16 py-16 text-center"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Digital Marketing Services That Drive Engagement
            </h1>
            <p className="text-lg md:text-xl">
              Boost your online presence and engage with your audience using expert digital marketing strategies tailored to your goals.
            </p>
          </div>
        </SectionWithAnimation>

        {/* What is Digital Marketing */}
        <SectionWithAnimation className="px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              What is Digital Marketing?
            </h2>
            <p className="text-lg leading-relaxed">
              Digital marketing is the promotion of products or services through digital channels like social media, search engines, email, and websites — reaching your target audience, increasing visibility, and driving results.
            </p>
          </div>
        </SectionWithAnimation>

        {/* Why It Matters */}
        <SectionWithAnimation className="px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Why Digital Marketing Matters
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Whether you're a startup or enterprise, digital marketing allows you to connect, analyze, and grow at scale in a digital-first world.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                {benefits.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <img
              src={DigitalMarketingImage}
              alt="Digital Marketing Visual"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </SectionWithAnimation>

        {/* Services Offered */}
        <SectionWithAnimation className="bg-white text-[#0F172A] px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              Our Digital Marketing Services
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </SectionWithAnimation>

        {/* CTA */}
        <SectionWithAnimation className="px-6 md:px-16 py-16 text-center bg-[#0F172A] text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-lg mb-8">
              Let’s collaborate to craft a digital strategy that delivers results.
            </p>
            <motion.button
              onClick={handleOpenGetQuote}
              className="bg-[#f56015] hover:bg-[#d14e10] text-white font-bold py-3 px-8 rounded-full transition-colors"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Free Consultation
            </motion.button>
          </div>
        </SectionWithAnimation>
      </div>
    </Mainlayout>
  );
};

// Reusable Section Component with Intersection Observer
interface SectionWithAnimationProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SectionWithAnimation: FC<SectionWithAnimationProps> = ({ children, className, style }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
};

// Reusable Service Card Component with Intersection Observer
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 30% of the card is visible
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-[#f56015] text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>
    </motion.div>
  );
};

export default DigitalMarketing;