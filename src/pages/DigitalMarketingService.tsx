import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import DigitalMarketingImage from "../assets/OurServices/DigitalMarktingService.jpeg";
import { useDispatch } from "react-redux";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, ReactNode, useState, useEffect } from "react";

// Define interfaces for data objects
interface Service {
  title: string;
  description: string;
}

// Smooth fade-in animation variant
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1], // Smooth easing
      delay: 0.2, // Slight delay for polish
    },
  },
};

const DigitalMarketing: FC = () => {
  const dispatch = useDispatch<any>();
  const [imagesLoaded, setImagesLoaded] = useState({ iphone: false, digital: false });

  const handleOpenGetQuote = () => {
    dispatch({ type: "open" });
  };

  // Preload images to prevent layout shifts
  useEffect(() => {
    const images = [
      { src: IphoneImage, key: "iphone" },
      { src: DigitalMarketingImage, key: "digital" },
    ];

    images.forEach(({ src, key }) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setImagesLoaded((prev) => ({ ...prev, [key]: true }));
      img.onerror = () => setImagesLoaded((prev) => ({ ...prev, [key]: true }));
    });
  }, []);

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
   <SectionWithAnimation
  className="relative flex flex-col md:flex-row items-center  justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0"
  style={{
    background: `
      radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
      radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
      #0F172A
    `,
  }}
>
  {/* SVG Line Animation - Desktop */}
  <div className="hidden lg:block absolute top-[20%] inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M1920,280 L960,280 Q940,280 940,300 L940,580 Q940,600 920,600 L0,600"
        fill="none"
        stroke="#a33cc4"
        strokeWidth="32"
        strokeDasharray="2800"
        strokeDashoffset="2800"
        className="animate-[drawCurvedLine_3s_ease-in-out_0.5s_forwards]"
      />
      <path
        d="M1920,340 L900,340 Q880,340 880,360 L880,640 Q880,660 860,660 L0,660"
        fill="none"
        stroke="#f9a825"
        strokeWidth="32"
        strokeDasharray="2800"
        strokeDashoffset="2800"
        className="animate-[drawCurvedLine_3s_ease-in-out_1s_forwards]"
      />
      <path
        d="M1920,400 L840,400 Q820,400 820,420 L820,700 Q820,720 800,720 L0,720"
        fill="none"
        stroke="#9c274f"
        strokeWidth="32"
        strokeDasharray="2800"
        strokeDashoffset="2800"
        className="animate-[drawCurvedLine_3s_ease-in-out_1.5s_forwards]"
      />
    </svg>
  </div>

  {/* Mobile Curved Lines */}
  <div className="block sm:hidden absolute top-[20%] w-full h-full overflow-hidden pointer-events-none z-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 414 896"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M414,180 L207,180 Q197,180 197,190 L197,350 Q197,360 187,360 L0,360"
        fill="none"
        stroke="#a33cc4"
        strokeWidth="32"
        strokeDasharray="800"
        strokeDashoffset="800"
        className="animate-[drawCurvedLine_2.5s_ease-in-out_0.5s_forwards]"
      />
      <path
        d="M414,240 L187,240 Q177,240 177,250 L177,410 Q177,420 167,420 L0,420"
        fill="none"
        stroke="#f9a825"
        strokeWidth="32"
        strokeDasharray="800"
        strokeDashoffset="800"
        className="animate-[drawCurvedLine_2.5s_ease-in-out_1s_forwards]"
      />
      <path
        d="M414,300 L167,300 Q157,300 157,310 L157,470 Q157,480 147,480 L0,480"
        fill="none"
        stroke="#9c274f"
        strokeWidth="32"
        strokeDasharray="800"
        strokeDashoffset="800"
        className="animate-[drawCurvedLine_2.5s_ease-in-out_1.5s_forwards]"
      />
    </svg>
  </div>

  {/* Left Side - Heading */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center z-10">
    <h2 className="max-w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
      Digital <br/>Marketing
    </h2>
  </div>

  {/* Right Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center items-center z-10">
    <div className="relative w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md">
      {!imagesLoaded.iphone && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg"></div>
      )}
      <img
        src={IphoneImage}
        alt="iPhone Preview"
        className="w-full h-auto object-contain drop-shadow-lg"
        loading="eager"
        style={{ opacity: imagesLoaded.iphone ? 1 : 0 }}
      />
    </div>
  </div>

  {/* Animation Styles */}
  <style>{`
    @keyframes drawCurvedLine {
      to {
        stroke-dashoffset: 0;
      }
    }

    .floating-icon {
      animation: floating-icon 3s ease-in-out infinite;
    }
  `}</style>
</SectionWithAnimation>


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
            <div className="relative">
              {!imagesLoaded.digital && (
                <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg"></div>
              )}
              <img
                src={DigitalMarketingImage}
                alt="Digital Marketing Visual"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
                style={{ opacity: imagesLoaded.digital ? 1 : 0 }}
              />
            </div>
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
            <button
              onClick={handleOpenGetQuote}
              className="bg-[#f56015] hover:bg-[#d14e10] text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Schedule a Free Consultation
            </button>
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
    threshold: 0.1, // Trigger when 10% of the section is visible
    rootMargin: "0px", // No extra margin
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

// Reusable Service Card Component
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-[#f56015] text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
};

export default DigitalMarketing;