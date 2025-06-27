import Mainlayout from "../layout/Mainlayout";
import WhySeoImportantImage from "../assets/SeoService/WhySeoImportant.jpg";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import { useDispatch } from "react-redux";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, ReactNode } from "react";


// Define interfaces for data objects
interface SeoAccelerate {
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

const SeoService: FC = () => {
  const dispatch = useDispatch<any>();

  const handleOpenGetQuote = () => {
    dispatch({ type: "open" });
  };

  const seoMatters: string[] = [
    "Over 90% of online experiences begin with a search engine.",
    "Top-ranking websites get the majority of clicks and traffic.",
    "SEO builds trust, credibility, and brand authority over time.",
    "Organic traffic has better conversion rates than paid ads.",
    "SEO brings long-term, sustainable growth to your business.",
  ];

  const seoAccelerates: SeoAccelerate[] = [
    {
      title: "Higher Rankings",
      description:
        "Appear at the top of Google search results for your keywords.",
    },
    {
      title: "More Website Traffic",
      description:
        "Drive consistent, high-quality visitors who are ready to buy.",
    },
    {
      title: "Increased Revenue",
      description:
        "Turn visitors into loyal customers and grow your bottom line.",
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
  className="relative flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0"
  style={{
    background: `
      radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
      radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
      #0F172A
    `,
  }}
>
  {/* SVG Line Animation for Desktop */}
  <div className="hidden lg:block absolute inset-0 top-[20%] w-full h-full overflow-hidden pointer-events-none z-0">
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
      Seo
    </h2>
  </div>

  {/* Right Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center items-center z-10">
    <img
      src={IphoneImage}
      alt="iPhone Preview"
      className="hover:scale-105 cursor-pointer transition-transform duration-500 floating-icon w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
    />
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
</motion.div>

        <div
          className="w-full"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* Hero */}
          <SectionWithAnimation className="text-center px-6 md:px-16 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                SEO Services That Drive Real Results
              </h1>
              <p className="text-lg md:text-xl">
                Boost your online visibility and grow your business with expert
                SEO strategies.
              </p>
            </div>
          </SectionWithAnimation>

          {/* What is SEO */}
          <SectionWithAnimation className="text-white px-6 md:px-16 py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                What is SEO?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                SEO (Search Engine Optimization) is the process of optimizing
                your website to rank higher on search engines like Google. It
                involves enhancing your site’s content, structure, keywords, and
                backlinks to attract organic traffic and customers — all without
                paying for ads.
              </p>
            </div>
          </SectionWithAnimation>

          {/* Why SEO is Important */}
          <SectionWithAnimation className="text-white px-6 md:px-16 py-16">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <img
                src={WhySeoImportantImage}
                alt="SEO Strategy Illustration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  Why SEO Matters for Your Business
                </h2>
                <ul className="list-disc list-inside text-white text-lg leading-relaxed space-y-3">
                  {seoMatters.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionWithAnimation>
        </div>

        {/* SEO Accelerates Growth */}
        <SectionWithAnimation className="bg-white text-black px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              How SEO Accelerates Business Growth
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              SEO puts your brand in front of the people who are actively
              searching for your products or services. It drives targeted,
              high-intent traffic that converts into paying customers — building
              a strong foundation for lasting business success.
            </p>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {seoAccelerates.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl shadow-md bg-white"
                  variants={fadeIn}
                >
                  <h3 className="font-semibold text-xl mb-3 text-[#f56015]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionWithAnimation>

        {/* Call to Action */}
        <SectionWithAnimation className="bg-[#0F172A] text-white text-center px-6 md:px-16 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="text-lg mb-8">
              Let’s create a powerful SEO strategy that drives more traffic and
              sales to your business.
            </p>
            <motion.button
              className="bg-[#f56015] hover:bg-[#d14e10] text-white cursor-pointer font-bold py-3 px-8 rounded-full transition-colors"
              onClick={handleOpenGetQuote}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Free SEO Consultation
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
}

const SectionWithAnimation: FC<SectionWithAnimationProps> = ({ children, className }) => {
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
    >
      {children}
    </motion.section>
  );
};

export default SeoService;