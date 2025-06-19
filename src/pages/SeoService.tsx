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
              Seo
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