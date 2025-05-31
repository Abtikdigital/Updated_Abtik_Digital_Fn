import { useState, useEffect } from "react";
import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";

import SlokImage from "../assets/Portfolio/1.jpg"
import ClikcFluenceImage from "../assets/Portfolio/2.jpg"
import ProjectOneImage from "../assets/Portfolio/projectOneImage.jpg"
import NextStepImage from "../assets/Portfolio/3.jpg"
import MetaMorphImage from "../assets/Portfolio/4.jpg"
import WoodCompany from "../assets/Portfolio/5.jpg"
import FusinevitImage from "../assets/Portfolio/6.jpg"
import HariOmKathiyavadiImage from "../assets/Portfolio/7.jpg"
import MihrabImage from "../assets/Portfolio/Mihrab.jpg"
import HoneImage from "../assets/Portfolio/10.jpg"
import RudryaLayImage from "../assets/Portfolio/11.jpg"
import LifeSignImage from "../assets/Portfolio/12.jpg"
import BlueWingsImage from "../assets/Portfolio/Graphic/3.jpg"
import HariOmDigitalMarketingImage from "../assets/Portfolio/Graphic/2.jpg"
import Patrika from "../assets/Portfolio/Graphic/1.jpg"
import OmNetsImage from "../assets/Portfolio/OmmNetz.jpeg"
import AlankritaGraphicImage from "../assets/Portfolio/AlankritaGraphicDesign.jpg"
import HrGraphiDesignImage from "../assets/Portfolio/HrGraphicDesign.jpg"
import NextStepGraphicDesign from "../assets/Portfolio/NextStepGraphicDesign.jpg"
import NavrachnaDigitalMarketing from "../assets/Portfolio/NavrachnaDigital.jpg"
// Define TypeScript interfaces for portfolioData
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
  {
    title: "BLUE WINGS (SHIVA TOURS & TRAVELS)",
    description:
      "We created and posted engaging travel content and promotional offers on social media platforms, significantly increasing tour inquiries.",
    link: "#",
    imageUrl: BlueWingsImage,
    category: "Digital Marketing",
  },
  {
    title: "RAJASTHAN AGRO ORGANICS PRIVATE LIMITED",
    description:
      "We developed informative social media posts and blog articles to educate audiences about organic living, enhancing product visibility and reach.",
    link: "#",
    imageUrl: Patrika,
    category: "Digital Marketing",
  },
  {
    title: "Hari Om Kathiyawadi",
    description:
      "We curated appetizing food visuals and optimized local SEO content, leading to a consistent increase in dine-in and delivery sales.",
    link: "#",
    imageUrl: HariOmDigitalMarketingImage,
    category: "Digital Marketing",
  },
  {
    title: "NAVRACHANA AROGYA PRIVATE LIMITED",
    description:
      "We promoted healthcare awareness through strategic SEO content and engaging campaign creatives across social media, improving patient inquiries.",
    link: "#",
    imageUrl: NavrachnaDigitalMarketing,
    category: "Digital Marketing",
  },
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
    title: "LIFESIGN INFOTECH PVT. LTD.",
    description:
      "We created a full-stack IT service portal with responsive UI, secure login, and dynamic data handling to boost client engagement.",
    link: "#",
    imageUrl: LifeSignImage,
    category: "Development",
  },
]

};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(6); // Initial number of items

  const initialItems = 8;
  const itemsPerLoad = 4; // Number of items to load each time
  const filters = ["All", "Digital Marketing", "UIUX", "Graphic Design", "Development"];
  const filteredItems =
    activeFilter === "All"
      ? portfolioData.portfolioItems
      : portfolioData.portfolioItems.filter(
        (item) => item.category === activeFilter
      );

  // Reset visible items when filter changes
  useEffect(() => {
    setVisibleItemsCount(initialItems);
  }, [activeFilter]);

  const handleFlip = (index: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth < 768) {
      // Allow navigation if card is flipped and click is not on "View More"
      if (flippedIndex === index && !(e.target instanceof Element && e.target.closest('a')?.textContent === "View More")) {
        return; // Let the parent <a> navigate
      }
      e.preventDefault(); // Prevent navigation to flip the card
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  const handleLoadMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + itemsPerLoad);
  };

  // Slice items to show only up to visibleItemsCount
  const visibleItems = filteredItems.slice(0, visibleItemsCount);

  return (
    <Mainlayout>
      <div className="min-h-screen bg-[#0F172A]">
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fadeIn 0.5s ease-out forwards;
            }
          `}
        </style>
        <div
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
              Abtik Portfolio
            </h2>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={IphoneImage}
              draggable="false"
              alt="iPhone Preview"
              className="w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
            />
          </div>
        </div>

        <div className="max-w-full rounded-md px-6 md:px-16 py-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
            Our Work
          </h2>
          {/* Filter Buttons */}
          <div className="mb-8 flex gap-6 flex-wrap justify-center ">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 text-sm text-white font-semibold transition-all duration-300 rounded-md cursor-pointer group hover:bg-[#f56015] ${activeFilter === filter && "bg-[#f56015] text-white"}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="flex flex-wrap gap-6 justify-center">
            {visibleItems.map((project: PortfolioItem, index: number) => {
              const isFlipped = flippedIndex === index;

              return (
                <span
                  key={index}
                
                 
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-[48%] md:w-[23%] h-80 group [perspective:1000px] cursor-pointer md:hover:[transform:none] animate-fade-in"
                  onClick={(e) => handleFlip(index, e)}
                  aria-label={`View project: ${project.title}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] bg-[#0F172A] border-[#0F172A] ${isFlipped ? "[transform:rotateY(180deg)]" : ""} md:group-hover:[transform:rotateY(180deg)]`}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden shadow-md bg-[#0F172A] [backface-visibility:hidden]">
                      <div className="relative w-full h-full">
                        <img
                          src={project.imageUrl}
                          draggable="false"
                          alt={project.title}
                          className="w-full h-[calc(100%-4rem)] object-cover"
                        />
                        <div className="absolute bottom-0 w-full h-18 bg-[#0F172A] bg-opacity-60 text-white text-center flex items-center justify-center">
                          <span className="w-full text-xl font-semibold wrap-break-word truncate">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 rounded-lg bg-[#ffe8db] p-4 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-start justify-between">
                      <div className="flex flex-col justify-center items-start h-full">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#0F172A] leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    
                    </div>
                  </div>
                </span>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleItemsCount < filteredItems.length && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 text-sm rounded-md font-semibold cursor-pointer text-white bg-[#f56015] rounded-md인가cursor-pointer hover:bg-[#d14e10] transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </Mainlayout>
  );
};

export default Portfolio;