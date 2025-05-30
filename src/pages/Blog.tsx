import { useState } from "react";
import Mainlayout from "../layout/Mainlayout";
import WebDevelopmentThumbnail from "../../public/blog-images/WEB_DEVELOPMENT/webDevelopmentThumbnail.jpg";
import GraphiThumbnail from "../../public/blog-images/GRAPHIC_DESIGN/image2.jpg";
import SeoThumbnail from "../../public/blog-images/SEO/seoThumbnail.jpg";
import DigitalMarketingThumbnail from "../../public/blog-images/DIGITAL_MARKETING/digitalMarketingThumbnail.jpg";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import { Link } from "react-router-dom";

// Define TypeScript interfaces for BlogData
interface BlogSection {
  imageUrl: string;
  text: string;
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  heading: string;
  sections: BlogSection[];
}

interface BlogData {
  blogPosts: BlogPost[];
}

const BlogData: BlogData = {
  blogPosts: [
    {
      id: 1,
      slug: "modern-web-trends",
      title: "Modern Web Trends",
      category: "Web Development",
      heading: "Introduction",
      sections: [
        {
          imageUrl: WebDevelopmentThumbnail,
          text: "That’s where Abtik Digital comes in — with strategies that don’t just chase trends but drive measurable business growth.",
        },
      ],
    },
    {
      id: 2,
      slug: "effective-ui-ux-practices",
      title: "Effective UI/UX Practices",
      category: "UIUX",
      heading: "Design Principles",
      sections: [
        {
          imageUrl: GraphiThumbnail,
          text: "Learn key design principles and patterns that boost user satisfaction and conversions.",
        },
      ],
    },
    {
      id: 3,
      slug: "seo-in-2025",
      title: "SEO in 2025",
      category: "SEO",
      heading: "SEO Evolution",
      sections: [
        {
          imageUrl: SeoThumbnail,
          text: "Discover how search engine optimization is evolving with AI and user behavior shifts.",
        },
      ],
    },
    {
      id: 4,
      slug: "digital-marketing-in-2025",
      title: "Digital Marketing in 2025: “Visibility Isn’t Optional. It’s Everything.”",
      category: "Digital Marketing",
      heading: "Introduction",
      sections: [
        {
          imageUrl: DigitalMarketingThumbnail,
          text: "Digital Marketing in 2025: “Visibility Isn’t Optional. It’s Everything.”\n\nIn today’s hyper-connected world, your brand must be seen, heard, and remembered.",
        },
      ],
    },
  ],
};

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const filters = ["All", "Web Development", "UIUX", "SEO", "Digital Marketing"];
  const filteredItems =
    activeFilter === "All"
      ? BlogData.blogPosts
      : BlogData.blogPosts.filter((item) => item.category === activeFilter);

  const handleFlip = (index: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth < 768) {
      // Allow navigation if card is flipped and click is not on "View More"
      if (flippedIndex === index && !(e.target instanceof Element && e.target.closest('a')?.textContent === "View More")) {
        return; // Let the parent <Link> navigate
      }
      e.preventDefault(); // Prevent navigation to flip the card
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  return (
    <Mainlayout>
      <div className="min-h-screen bg-[#0F172A]">
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
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
              Abtik Blog
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={IphoneImage}
              alt="iPhone Preview"
              className="w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
            />
          </div>
        </div>

        <div
          className="px-6 md:px-16 py-10"
          style={{
            background: `
              radial-gradient(ellipse 50% 100% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 100% at bottom right, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
            Latest Articles
          </h2>

          {/* Filters */}
          <div className="mb-8 flex gap-6 flex-wrap justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-semibold cursor-pointer text-white rounded-md transition-all duration-300 group hover:bg-[#f56015] ${
                  activeFilter === filter && "bg-[#f56015]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="flex flex-wrap gap-6 justify-center">
            {filteredItems.map((post: BlogPost, index: number) => {
              const isFlipped = flippedIndex === index;

              return (
                <Link
                  key={index}
                  to={`/expandedBlog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-[48%] md:w-[23%] h-72 group [perspective:1000px] cursor-pointer md:hover:[transform:none]"
                  onClick={(e) => handleFlip(index, e)}
                  aria-label={`View blog post: ${post.title}`}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    } md:group-hover:[transform:rotateY(180deg)]`}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden shadow-md bg-[#0F172A] [backface-visibility:hidden]">
                      <img
                        src={post.sections[0].imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-[#0F172A] bg-opacity-60 text-white text-center p-4 text-lg font-semibold">
                        {post.title.split(" ").slice(0, 4).join(" ") +
                          (post.title.split(" ").length > 4 ? "..." : "")}
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 rounded-lg bg-[#ffe8db] p-4 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-start justify-between">
                      <div className="flex flex-col justify-center items-start h-full">
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#0F172A] leading-relaxed">
                          {post.sections[0].text}
                        </p>
                      </div>
                      <Link
                        to={`/expandedBlog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-semibold text-white bg-[#f56015] rounded-md cursor-pointer hover:bg-[#d14e10] transition-all duration-300"
                        onClick={(e) => e.stopPropagation()} // Prevent parent Link's onClick
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Blog;