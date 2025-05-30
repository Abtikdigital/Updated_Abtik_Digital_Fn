import { useState, useEffect } from "react";
import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import DesignImage from "../assets/Portfolio/DesignImage.jpeg";
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
      title: "Project One",
      description:
        "Revamped a corporate website with responsive design, intuitive navigation, and optimized performance, boosting user engagement by 30%.",
      link: "https://projectone.com/",
      imageUrl: ProjectOneImage,
      category: "UIUX",
    },
    {
      title: "BLUE WINGS (SHIVA TOURS & TRAVELS)",
      description:
        "Crafted a localized SEO strategy and vibrant social media ads for a travel agency, driving a 35% increase in tour bookings.",
      link: "#",
      imageUrl: BlueWingsImage,
      category: "Digital Marketing",
    },
    {
      title: "MAGPIE SHIPPING PRIVATE LIMITED",
      description:
        "Refined Google Ads with precise keyword targeting and optimized landing pages, increasing leads by 40% at reduced costs.",
      link: "#",
      imageUrl: DesignImage,
      category: "Digital Marketing",
    },
    {
      title: "SLOKI SOFTWARE TECHNOLOGIES PRIVATE LIMITED",
      description:
        "Built an automated email marketing funnel with personalized content, enhancing customer retention for a tech firm by 25%.",
      link: "https://www.sloki.in/",
      imageUrl: SlokImage,
      category: "Digital Marketing",
    },
    {
      title: "Wood County Private Limited",
      description:
        "Developed a visually striking Instagram and Pinterest campaign, increasing e-commerce sales by 20% for a retail brand.",
      link: "#",
      imageUrl: DesignImage,
      category: "Digital Marketing",
    },
    {
      title: "RAJASTHAN AGRO ORGANICS PRIVATE LIMITED",
      description:
        "Created engaging blog and video content to promote organic products, doubling organic traffic for an agro company.",
      link: "#",
      imageUrl: DesignImage,
      category: "Digital Marketing",
    },
    {
      title: "Hari Om Kathiyawadi",
      description:
        "Enhanced a restaurant’s online presence with local SEO and dynamic visuals, boosting foot traffic by 25%.",
      link: "https://hariomkathiyawadi.com/",
      imageUrl: HariOmDigitalMarketingImage,
      category: "Digital Marketing",
    },
    {
      title: "Patrika",
      description:
        "Enhanced a restaurant’s online presence with local SEO and dynamic visuals, boosting foot traffic by 25%.",
      link: "https://hariomkathiyawadi.com/",
      imageUrl: Patrika,
      category: "Digital Marketing",
    },
    {
      title: "NAVRACHANA AROGYA PRIVATE LIMITED",
      description:
        "Designed a multi-channel digital campaign for a healthcare brand, increasing patient inquiries by 30% through SEO and ads.",
      link: "#",
      imageUrl: DesignImage,
      category: "Digital Marketing",
    },
    {
      title: "SLOKI SOFTWARE TECHNOLOGIES PRIVATE LIMITED",
      description:
        "Developed a real-time analytics dashboard with customizable widgets and sleek UI, streamlining business decision-making.",
      link: "https://www.sloki.in/",
      imageUrl: SlokImage,
      category: "UIUX",
    },
    {
      title: "CLICKFLUENCE LLP",
      description:
        "Redesigned an e-commerce platform with A/B-tested UX and fast checkout, improving conversion rates by 20%.",
      link: "https://clickfluence.in/",
      imageUrl: ClikcFluenceImage,
      category: "UIUX",
    },
    {
      title: "MIGHTY FISH AQUAFARM",
      description:
        "Built an e-commerce UI with intuitive filters and responsive design, enhancing user satisfaction and sales by 15%.",
      link: "#",
      imageUrl: DesignImage,
      category: "Graphic Design",
    },
    {
      title: "RIYA DITYA EDU LLP",
      description:
        "Created an accessible educational platform with interactive UI, improving student engagement by 25%.",
      link: "#",
      imageUrl: DesignImage,
      category: "Graphic Design",
    },
    {
      title: "NEXTSTEP CORPORATE SOLUTIONS PRIVATE LIMITED",
      description:
        "Designed a professional service portal with clean UX and dynamic content, increasing client interactions by 15%.",
      link: "https://nextstepcorporate.com/",
      imageUrl: NextStepImage,
      category: "UIUX",
    },
    {
      title: "METAMORPH IT SYSTEMS PRIVATE LIMITED (ADS 360)",
      description:
        "Developed an ad management dashboard with real-time metrics and user-friendly UI, optimizing campaign performance.",
      link: "https://www.metamorphsystems.com/",
      imageUrl: MetaMorphImage,
      category: "UIUX",
    },
    {
      title: "OMMNETZ TECHNOLOGIES LLP",
      description:
        "Crafted a tech service platform with clear CTAs and responsive layouts, reducing user drop-off by 20%.",
      link: "#",
      imageUrl: DesignImage,
      category: "Graphic Design",
    },
    {
      title: "WOOD COUNTY PRIVATE LIMITED",
      description:
        "Enhanced an e-commerce site with personalized recommendations and smooth UI, boosting customer retention by 18%.",
      link: "https://woodcounty.in/",
      imageUrl: WoodCompany,
      category: "UIUX",
    },
    {
      title: "AURATRIX GREEN TECH (OPC) PRIVATE LIMITED",
      description:
        "Designed a green tech website with eco-friendly UI and interactive features, promoting sustainable solutions effectively.",
      link: "#",
      imageUrl: DesignImage,
      category: "Graphic Design",
    },
    {
      title: "FUSINEVIT SOLUTION PVT. LTD.",
      description:
        "Built a SaaS platform with intuitive workflows and responsive UI, streamlining operations for 500+ users.",
      link: "https://fusinevit.com/",
      imageUrl: FusinevitImage,
      category: "UIUX",
    },
    {
      title: "Hari Om Kathiyawadi",
      description:
        "Revamped a restaurant website with vibrant UI and online ordering, increasing reservations by 20%.",
      link: "https://hariomkathiyawadi.com/",
      imageUrl: HariOmKathiyavadiImage,
      category: "UIUX",
    },
    {
      title: "MIHRAB INNOVATE PRIVATE LIMITED",
      description:
        "Developed a scalable real-time messaging platform on AWS with secure APIs and responsive design for 10,000+ users.",
      link: "#",
      imageUrl: MihrabImage,
      category: "Development",
    },
    {
      title: "RUDRALAY.COM (OPC) PRIVATE LIMITED",
      description:
        "Built a full-stack inventory management app with real-time updates and AWS deployment, improving efficiency by 30%.",
      link: "#",
      imageUrl: RudryaLayImage,
      category: "Development",
    },
    {
      title: "H ONE GLOBAL TECHNOLOGY PRIVATE LIMITED",
      description:
        "Created a tech solutions website with robust backend and interactive frontend, boosting user engagement by 15%.",
      link: "#",
      imageUrl: HoneImage,
      category: "Development",
    },
    {
      title: "YUEV INNOVATION PVT. LTD.",
      description:
        "Developed an innovation hub with scalable APIs and dynamic content, showcasing solutions for 5,000+ monthly visitors.",
      link: "#",
      imageUrl: DesignImage,
      category: "Graphic Design",
    },
    {
      title: "LIFESIGN INFOTECH PVT. LTD.",
      description:
        "Built a full-stack IT services platform with secure APIs and modern frontend, increasing conversions by 20%.",
      link: "#",
      imageUrl: LifeSignImage,
      category: "Development",
    },
  ],
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
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
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
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-semibold text-white bg-[#f56015] rounded-md cursor-pointer hover:bg-[#d14e10] transition-all duration-300"
                          onClick={(e) => e.stopPropagation()} // Prevent parent a's onClick
                        >
                          View More
                        </a>
                      )}
                    </div>
                  </div>
                </a>
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