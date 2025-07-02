
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, FC, memo } from "react";
import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import SlokImage from "../assets/Portfolio/New Images/3.jpg";
import ClikcFluenceImage from "../assets/Portfolio/2.jpg";
import NextStepImage from "../assets/Portfolio/New Images/11.jpg";
import MetaMorphImage from "../assets/Portfolio/New Images/10.jpg";
import WoodCompany from "../assets/Portfolio/New Images/9.jpg";
import FusinevitImage from "../assets/Portfolio/6.jpg";
import HariOmKathiyavadiImage from "../assets/Portfolio/New Images/8.jpg";
import MihrabImage from "../assets/Portfolio/New Images/6.jpg";
import HoneImage from "../assets/Portfolio/New Images/5.jpg";
import RudryaLayImage from "../assets/Portfolio/New Images/4.jpg";
import LifeSignImage from "../assets/Portfolio/New Images/2.jpg";
import OmNetsImage from "../assets/Portfolio/OmmNetz.jpeg";
import AlankritaGraphicImage from "../assets/Portfolio/AlankritaGraphicDesign.jpg";
import HrGraphiDesignImage from "../assets/Portfolio/HrGraphicDesign.jpg";
import NextStepGraphicDesign from "../assets/Portfolio/NextStepGraphicDesign.jpg";
import NobleCraft from "../assets/Portfolio/New Images/1.jpg"
import HariOmDigitalMarketing from "../assets/Portfolio/hariommockup.jpg"
import SJBWImage from "../assets/Portfolio/SJBWMOCKUP.jpg"

// commented Images
// Define TypeScript interfaces for portfolioData
// import BlueWingsImage from "../assets/Portfolio/Graphic/3.jpg";
// import HariOmDigitalMarketingImage from "../assets/Portfolio/Graphic/2.jpg";
// import Patrika from "../assets/Portfolio/Graphic/1.jpg";
// import NavrachnaDigitalMarketing from "../assets/Portfolio/NavrachnaDigital.jpg";
interface PortfolioItem {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  category: string;
}

interface PortfolioData {
  portfolioItems: PortfolioItem[];
}

const portfolioData: PortfolioData = {
  portfolioItems: [
    {
      title: "Mihrab",
      description:
        "We designed a modern website interface for Mihrab, focusing on a clean layout, improved accessibility, and enhanced user flow to boost engagement.",
      link: "#",
      imageUrl: MihrabImage,
      category: "UIUX",
    },
    // {
    //   title: "BLUE WINGS (SHIVA TOURS & TRAVELS)",
    //   description:
    //     "We created and posted engaging travel content and promotional offers on social media platforms, significantly increasing tour inquiries.",
    //   link: "#",
    //   imageUrl: BlueWingsImage,
    //   category: "Digital Marketing",
    // },
    // {
    //   title: "RAJASTHAN AGRO ORGANICS PRIVATE LIMITED",
    //   description:
    //     "We developed informative social media posts and blog articles to educate audiences about organic living, enhancing product visibility and reach.",
    //   link: "#",
    //   imageUrl: Patrika,
    //   category: "Digital Marketing",
    // },
    {
      title: "Hari Om Kathiyawadi",
      description:
        "We curated appetizing food visuals and optimized local SEO content, leading to a consistent increase in dine-in and delivery sales.",
      link: "#",
      imageUrl: HariOmDigitalMarketing,
      category: "Digital Marketing",
    },
    {
      title: "SJBW",
      description:
        "Our clients share how digital marketing with us transformed their online presence",
      link: "#",
      imageUrl: SJBWImage,
      category: "Digital Marketing",
    },
    // {
    //   title: "NAVRACHANA AROGYA PRIVATE LIMITED",
    //   description:
    //     "We promoted healthcare awareness through strategic SEO content and engaging campaign creatives across social media, improving patient inquiries.",
    //   link: "#",
    //   imageUrl: NavrachnaDigitalMarketing,
    //   category: "Digital Marketing",
    // },
    {
      title: "SLOKI SOFTWARE TECHNOLOGIES PRIVATE LIMITED",
      description:
        "We designed a professional dashboard UI featuring modular layouts, theme options, and a seamless user experience across devices.",
      link: "#",
      imageUrl: SlokImage,
      category: "UIUX",
    },
    {
      title: "CLICKFLUENCE LLP",
      description:
        "We crafted a user-centric e-commerce layout with refined product navigation and a conversion-optimized checkout experience.",
      link: "#",
      imageUrl: ClikcFluenceImage,
      category: "UIUX",
    },
    {
      title: "ALANKRITA",
      description:
        "We designed elegant logos and e-commerce product creatives that reflected the brand's ethnic appeal and enhanced visual storytelling.",
      link: "#",
      imageUrl: AlankritaGraphicImage,
      category: "Graphic Design",
    },
    {
      title: "HR",
      description:
        "We created a memorable brand identity with a custom logo and educational social media graphics to boost audience engagement.",
      link: "#",
      imageUrl: HrGraphiDesignImage,
      category: "Graphic Design",
    },
    {
      title: "NEXTSTEP CORPORATE SOLUTIONS PRIVATE LIMITED",
      description:
        "We designed a clean and modern service website UI tailored for corporate users, emphasizing intuitive layout and user flow.",
      link: "#",
      imageUrl: NextStepImage,
      category: "UIUX",
    },
    {
      title: "METAMORPH IT SYSTEMS PRIVATE LIMITED (ADS 360)",
      description:
        "We created a streamlined dashboard design for ad tracking, highlighting key metrics and enhancing user navigation for better decision-making.",
      link: "#",
      imageUrl: MetaMorphImage,
      category: "UIUX",
    },
    {
      title: "OMMNETZ TECHNOLOGIES LLP",
      description:
        "We developed branding visuals and sleek logo concepts tailored for a tech-based service provider to reflect innovation and trust.",
      link: "#",
      imageUrl: OmNetsImage,
      category: "Graphic Design",
    },
    {
      title: "WOOD COUNTY PRIVATE LIMITED",
      description:
        "We designed a clean product layout and smooth navigation for a furniture brand, enhancing product discovery and customer experience.",
      link: "#",
      imageUrl: WoodCompany,
      category: "UIUX",
    },
    {
      title: "NEXTSTEP",
      description:
        "We developed a nature-themed brand identity with eco-conscious graphics and illustrations that support their green initiative.",
      link: "#",
      imageUrl: NextStepGraphicDesign,
      category: "Graphic Design",
    },
    {
      title: "FUSINEVIT SOLUTION PVT. LTD.",
      description:
        "We built a responsive SaaS platform with robust user authentication, dashboards, and API integrations for enterprise workflows.",
      link: "#",
      imageUrl: FusinevitImage,
      category: "UIUX",
    },
    {
      title: "Hari Om Kathiyawadi",
      description:
        "We developed a vibrant restaurant website featuring food galleries, an online ordering system, and mobile responsiveness.",
      link: "#",
      imageUrl: HariOmKathiyavadiImage,
      category: "UIUX",
    },
    {
      title: "MIHRAB INNOVATE PRIVATE LIMITED",
      description:
        "We engineered a secure, real-time messaging platform using AWS and scalable backend services for large-scale communication.",
      link: "#",
      imageUrl: MihrabImage,
      category: "Development",
    },
    {
      title: "RUDRALAY.COM (OPC) PRIVATE LIMITED",
      description:
        "We developed a full inventory management system with barcode scanning, real-time stock updates, and cloud deployment.",
      link: "#",
      imageUrl: RudryaLayImage,
      category: "Development",
    },
    {
      title: "H ONE GLOBAL TECHNOLOGY PRIVATE LIMITED",
      description:
        "We built a business website from the ground up with secure backend, user management, and service integrations.",
      link: "#",
      imageUrl: HoneImage,
      category: "Development",
    },
    {
      title: "NOBLE CRAFT PRIVATE LIMITED",
      description:
        "We built a business website from the ground up with secure backend, user management, and service integrations.",
      link: "#",
      imageUrl: NobleCraft,
      category: "Development",
    },
    {
      title: "LIFESIGN INFOTECH PVT. LTD.",
      description:
        "We created a full-stack IT service portal with responsive UI, secure login, and dynamic data handling to boost client engagement.",
      link: "#",
      imageUrl: LifeSignImage,
      category: "Development",
    },
  ],
};

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.05 },
  }),
};

const filterVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut", delay: i * 0.1 },
  }),
};

// Separate component for each portfolio card
interface PortfolioCardProps {
  project: PortfolioItem;
  index: number;
  isFlipped: boolean;
  handleFlip: (index: number, e: React.MouseEvent<HTMLSpanElement>) => void;
}

const PortfolioCard: FC<PortfolioCardProps> = memo(({ project, index, isFlipped, handleFlip }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the card is visible
  });

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      custom={index}
      rel="noopener noreferrer"
      className="relative w-full sm:w-[48%] md:w-[23%] h-80 group [perspective:1000px] cursor-pointer md:hover:[transform:none]"
      onClick={(e) => handleFlip(index, e)}
      aria-label={`View project: ${project.title}`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] bg-[#0F172A] border-[#0F172A] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
          } md:group-hover:[transform:rotateY(180deg)]`}
      >
        <div className="absolute inset-0 rounded-lg overflow-hidden shadow-md bg-[#0F172A] [backface-visibility:hidden]">
          <div className="relative w-full h-full">
            <img
              src={project.imageUrl}
              draggable="false"
              alt={project.title}
              loading="lazy"
              className="w-full h-[calc(100%-4rem)] object-cover "
            />
            <div className="absolute bottom-0 w-full h-18 bg-[#0F172A] bg-opacity-60  text-center flex items-center justify-center">
              <span className="w-full text-xl font-semibold wrap-break-word truncate text-white">
                {project.title}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-lg bg-[#ffe8db] p-4 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-start justify-between">
          <div className="flex flex-col justify-center items-start h-full">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{project.title}</h3>
            <p className="text-sm text-[#0F172A] leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.span>
  );
});

PortfolioCard.displayName = "PortfolioCard";

const Portfolio: FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(6);

  const initialItems = 8;
  const itemsPerLoad = 4;
  const filters = ["All", "Digital Marketing", "UIUX", "Graphic Design", "Development"];
  const filteredItems =
    activeFilter === "All"
      ? portfolioData.portfolioItems
      : portfolioData.portfolioItems.filter((item) => item.category === activeFilter);

  // Reset visible items when filter changes
  useEffect(() => {
    setVisibleItemsCount(initialItems);
    setFlippedIndex(null); // Reset flipped state to avoid stale indices
  }, [activeFilter]);

  const handleFlip = (index: number, e: React.MouseEvent<HTMLSpanElement>) => {
    if (window.innerWidth < 768) {
      if (
        flippedIndex === index &&
        !(e.target instanceof Element && e.target.closest("a")?.textContent === "View More")
      ) {
        return;
      }
      e.preventDefault();
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  const handleLoadMore: () => void = () => {
    setVisibleItemsCount((prevCount) => prevCount + itemsPerLoad);
  };

  const visibleItems = filteredItems.slice(0, visibleItemsCount);

  return (
    <Mainlayout>
      <div className="min-h-screen bg-[#0F172A]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="relative flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0"
          style={{
            background: `
      radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
      radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
      #0F172A`,
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
              Abtik Portfolio
            </h2>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center z-10">
            <img
              src={IphoneImage}
              draggable="false"
              alt="iPhone Preview"
              loading="lazy"
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


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-full rounded-md px-6 md:px-16 py-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
            Our Work
          </h2>
          <div className="mb-8 flex gap-6 flex-wrap justify-center">
            {filters.map((filter, i) => (
              <motion.button
                key={filter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={filterVariants}
                custom={i}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 text-sm text-white font-semibold transition-all duration-300 rounded-md cursor-pointer group hover:bg-[#f56015] ${activeFilter === filter ? "bg-[#f56015] text-white" : ""
                  }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {visibleItems.map((project, index) => (
              <PortfolioCard
                key={index}
                project={project}
                index={index}
                isFlipped={flippedIndex === index}
                handleFlip={handleFlip}
              />
            ))}
          </div>

          {visibleItemsCount < filteredItems.length && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="mt-8 flex justify-center"
            >
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 text-sm rounded-md font-semibold cursor-pointer text-white bg-[#f56015] hover:bg-[#d14e10] transition-all duration-300"
              >
                Load More
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Mainlayout>
  );
};

export default Portfolio;
