import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import WebDevelopmentBlogImage1 from "../../public/blog-images/WEB_DEVELOPMENT/webDevelopmentBlogImage1.jpg";
import WebDevelopmentBlogImage2 from "../../public/blog-images/WEB_DEVELOPMENT/webDevelopmentImage1.jpeg";
import GraphiThumbnail from "../../public/blog-images/GRAPHIC_DESIGN/image1.jpg";
import GraphicImage1 from "../../public/blog-images/GRAPHIC_DESIGN/graphicDesignBlogImage1.jpg";
import GraphicImage2 from "../../public/blog-images/GRAPHIC_DESIGN/graphicDesignImage1.jpeg";
import SeoThumbnail from "../../public/blog-images/SEO/seoThumbnail.jpg";
import SeoImage1 from "../../public/blog-images/SEO/seoBlogImage1.jpg";
import SeoImage3 from "../../public/blog-images/SEO/SeoImage3.jpeg";
import SeoImage2 from "../../public/blog-images/SEO/SeoImage2.jpeg";
import DigitalMarketingThumbnail from "../../public/blog-images/DIGITAL_MARKETING/digitalMarketingThumbnail.jpg";
import DigitalMarketingImage1 from "../../public/blog-images/DIGITAL_MARKETING/digitalMarketingImage1.jpeg";

// Define interfaces for BlogData structure
interface BlogSection {
  heading?: string;
  text?: string;
  lists?: string[];
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  heading: string;
  sections: BlogSection[];
}

interface BlogData {
  blogPosts: BlogPost[];
}

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define interface for API response
interface ApiResponse {
  message: string;
}

// Define BlogData as a typed constant
const BlogData: BlogData = {
  blogPosts: [
    {
      id: 1,
      slug: "modern-web-trends",
      title: "Modern Web Trends",
      category: "Web Development",
      imageUrl: WebDevelopmentBlogImage1,
      heading: "Introduction",
      sections: [
        {
          text: "That’s where Abtik Digital comes in — with strategies that don’t just chase trends but drive measurable business growth.",
        },
        {
          heading: "Frontend Development",
          text: "Modern frontend stacks like React, Vue, and Svelte are enabling responsive, component-driven UIs with lightning-fast performance. React is widely preferred for its ecosystem, reusability, and community support.",
        },
        {
          heading: "Backend Technologies",
          text: "Node.js, Django, and Laravel power scalable backends with APIs, authentication, and real-time features. Node.js is preferred for full-stack JavaScript, speed, and non-blocking architecture.",
        },
        {
          heading: "Database Management",
          text: "MongoDB, PostgreSQL, and Firebase are popular choices for structured and unstructured data. Cloud databases improve availability and scaling effortlessly.",
        },
        {
          heading: "Web Performance & Core Vitals",
          text: "Performance directly impacts SEO and conversions. Techniques like lazy loading, code splitting, and optimized media are key. Tools like Lighthouse and WebPageTest help monitor vitals.",
        },
        {
          heading: "Why It Matters",
          text: "Your website is your digital storefront. A fast, secure, and accessible site boosts engagement and drives results.",
        },
        {
          heading: "Contact Us",
          text: "📞 <a href='tel:+918928138434' style='color:#f56015;'>+91 89281 38434</a> for a free consultation.<br>🌐 Visit: <a href='https://www.abtikdigital.com' style='color:#f56015;'>www.abtikdigital.com</a>",
        },
      ],
    },
    {
      id: 2,
      slug: "effective-ui-ux-practices",
      title: "Effective UI/UX Practices",
      category: "UIUX",
      imageUrl: GraphiThumbnail,
      heading: "Design Principles",
      sections: [
        {
          text: "Learn key design principles and patterns that boost user satisfaction and conversions.",
        },
        {
          heading: "Consistency & Accessibility",
          text: "Consistency, clarity, and accessibility are essential elements in great UI/UX design.",
        },
        {
          heading: "User Psychology",
          text: "Designing based on how users think and behave ensures higher engagement and ease of use.",
        },
        {
          heading: "Wireframes & Prototypes",
          text: "Tools like Figma, Adobe XD, and Sketch help visualize ideas before development, saving time and cost.",
        },
        {
          heading: "Usability Testing",
          text: "Test early, test often. Real user feedback helps refine design decisions and improve experience.",
        },
        {
          heading: "Why It’s Important",
          text: "Great design enhances trust, usability, and conversions. Poor UX drives users away.",
        },
        {
          heading: "Contact Us",
          text: "📞 <a href='tel:+918928138434' style='color:#f56015;'>+91 89281 38434</a><br>🌐 Visit: <a href='https://www.abtikdigital.com' style='color:#f56015;'>www.abtikdigital.com</a>",
        },
      ],
    },
    {
      id: 3,
      slug: "seo-in-2025",
      title: "SEO in 2025",
      category: "SEO",
      imageUrl: SeoThumbnail,
      heading: "SEO Evolution",
      sections: [
        {
          text: "Discover how search engine optimization is evolving with AI and user behavior shifts.",
        },
        {
          heading: "Search Trends",
          text: "Semantic search and voice queries are reshaping how content is structured. Focus on natural language and context.",
        },
        {
          heading: "Performance Metrics",
          text: "Core Web Vitals and real user metrics continue to influence rankings. Tools like Google Search Console and PageSpeed Insights are essential.",
        },
        {
          heading: "AI-Powered Content",
          text: "AI tools like ChatGPT and Jasper help create SEO-friendly articles faster, focusing on search intent and keywords.",
        },
        {
          heading: "Technical SEO",
          text: "Schema markup, mobile-first indexing, and crawl efficiency help search engines understand and rank content better.",
        },
        {
          heading: "Local SEO & Maps",
          text: "Google Business Profiles, citations, and customer reviews boost visibility in local search results.",
        },
        {
          heading: "Recommended Tools",
          lists: ["✔ Google Search Console", "✔ Ahrefs", "✔ Semrush", "✔ Screaming Frog"],
        },
        {
          heading: "Let’s Boost Your Search Visibility",
          text: "📞 <a href='tel:+918928138434' style='color:#f56015;'>+91 89281 38434</a><br>🌐 <a href='https://www.abtikdigital.com' style='color:#f56015;'>www.abtikdigital.com</a>",
        },
      ],
    },
    {
      id: 4,
      slug: "digital-marketing-in-2025",
      title: "Digital Marketing in 2025: “Visibility Isn’t Optional. It’s Everything.”",
      category: "Digital Marketing",
      imageUrl: DigitalMarketingThumbnail,
      heading: "Introduction",
      sections: [
        {
          text: "Digital Marketing in 2025: “Visibility Isn’t Optional. It’s Everything.”\n\nIn today’s hyper-connected world, your brand must be seen, heard, and remembered.",
        },
        {
          heading: "Eligibility – Who Needs Digital Marketing?",
          text: "If you’re any of the following, digital marketing is critical:",
          lists: [
            "A startup or local business trying to build brand awareness",
            "An e-commerce store seeking higher conversions",
            "A service-based business looking for quality leads",
            "A brand aiming to outshine competitors online",
          ],
        },
        {
          heading: "Top Benefits of Digital Marketing",
          lists: [
            "✔ Maximum Visibility",
            "✔ Lead Generation",
            "✔ Brand Building",
            "✔ Smart Analytics",
            "✔ Cost Efficiency",
          ],
        },
        {
          heading: "Our Core Services",
          lists: [
            "✔ Social Media Marketing — Scroll-stopping content & engagement",
            "✔ SEO — Technical fixes to content optimization",
            "✔ Performance Ads — Google & Meta campaigns",
            "✔ Email & WhatsApp Marketing — Automation & retargeting",
            "✔ Content Strategy — Funnels & copy that convert",
            "✔ WhatsApp Banner Design — Branded message creatives",
            "✔ LinkedIn Post Creation — Professional brand content",
            "✔ Logo & Branding Design — Eye-catching visuals",
            "✔ UI/UX Design — Flexible & conversion-focused layouts",
          ],
        },
        {
          heading: "Top Trends for 2025",
          lists: [
            "✔ AI-Powered Campaigns",
            "✔ Voice & Visual Search",
            "✔ Video-First Strategies",
            "✔ Omnichannel Funnels",
            "✔ Privacy-Ready Ads",
          ],
        },
        {
          heading: "How We Support You",
          lists: [
            "✔ Customized Strategy",
            "✔ Campaign Execution",
            "✔ Performance Tracking",
            "✔ Design & Content Support",
            "✔ Growth Hacking Solutions",
          ],
        },
        {
          heading: "How We Help You Win",
          lists: [
            "✓ You don’t need to learn algorithms — we handle it all",
            "✓ We scale your brand across platforms",
            "✓ We track and optimize every campaign",
            "✓ You get a full marketing team — not just a service",
          ],
        },
        {
          heading: "Ready to Dominate Digital?",
          text: "📞 <a href='tel:+918928138434' style='color:#f56015;'>+91 89281 38434</a> to book your free strategy session.<br>🌐 <a href='https://www.abtikdigital.com' style='color:#f56015;'>www.abtikdigital.com</a>",
        },
      ],
    },
  ],
};

const ExpandedBlog: React.FC = () => {
  const { pathname } = useLocation();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    const slug = pathname.split("/").pop() || "";
    const found = BlogData.blogPosts.find((post) => post.slug === slug);
    setBlog(found || null);
  }, [pathname]);

  const createMarkup = (html: string): { __html: string } => {
    return { __html: html };
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsDisabled(true);
      const res: AxiosResponse<ApiResponse> = await axios.post("/api/contactApis", data);
      if (res?.status === 201) {
        Swal.fire({
          icon: "success",
          text: res?.data?.message,
          confirmButtonColor: "#f56015",
          draggable: true,
        });
        reset();
      }
    } catch (error: any) {
      if (error?.response?.status === 400) {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#f56015",
          text: error?.response?.data?.message,
          draggable: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: error?.response?.data?.message || "An error occurred while submitting your application",
          confirmButtonColor: "#f56015",
          draggable: true,
        });
      }
      console.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  if (!blog) {
    return (
      <Mainlayout>
        <div className="text-center py-20 text-gray-500 text-xl">
          Blog not found
        </div>
      </Mainlayout>
    );
  }

  return (
    <Mainlayout>
      <div className="min-h-screen bg-[#0F172A]">
        <div
          className="relative flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* Animated SVG Lines - Desktop */}
          <div className="hidden lg:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
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

          {/* Animated SVG Lines - Mobile */}
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

          {/* Left - Heading */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center z-10">
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
              Abtik Blog
            </h2>
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center z-10">
            <img
              src={IphoneImage}
              alt="iPhone Preview"
              className="w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
            />
          </div>

          {/* Animation Keyframes */}
          <style>{`
            @keyframes drawCurvedLine {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-2">
              {/* Blog Image */}
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
                />
              )}

              {/* Blog Title */}
              <h1 className="text-4xl font-bold mb-4 text-white">{blog.title}</h1>
              <p className="text-white italic mb-10">{blog.category}</p>

              {/* Sections: Description and Points */}
              <div className="space-y-8">
                {blog.sections.map((section, index) => (
                  <div key={index} className="text-lg text-white leading-relaxed space-y-4">
                    {section.heading && (
                      <h3 className="text-2xl font-semibold text-[#f56015]">
                        {section.heading}
                      </h3>
                    )}
                    {section.text && (
                      <div
                        className="text-white text-lg whitespace-pre-line"
                        dangerouslySetInnerHTML={createMarkup(section.text)}
                      />
                    )}
                    {section.lists && section.lists.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 mt-2">
                        {section.lists.map((item, idx) => {
                          const isBold = item.startsWith("**") && item.endsWith("**");
                          return (
                            <li key={idx} className="text-white text-lg">
                              {isBold ? (
                                <span className="font-semibold text-[#f56015]">
                                  {item.replace(/\*\*/g, "")}
                                </span>
                              ) : (
                                item
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="mt-12 bg-[#0F172A] p-6 rounded-lg shadow-md border border-white">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Contact Us
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "* Name is required" })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white bg-[#1E293B]"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "* Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "* Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white bg-[#1E293B]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white bg-[#1E293B]"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#f56015] text-white rounded-md hover:bg-[#e04e13] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isDisabled}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="bg-[#D9D9D9] p-6 shadow-md rounded-lg h-auto self-start">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 border-b pb-2">
                Latest Posts
              </h3>
              <ul className="space-y-5">
                {BlogData.blogPosts.map((post, index) => (
                  <li key={index}>
                    <Link
                      to={`/expandedBlog/${post.slug}`}
                      className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-md transition"
                    >
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base text-gray-800 hover:text-gray-600 transition">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Read more →
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default ExpandedBlog;