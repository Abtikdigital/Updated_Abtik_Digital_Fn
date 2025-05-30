import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";

import IphoneImage from "../assets/IphoneImage/iPhone.png";
import WebDevelopmentThumbnail from "../../public/blog-images/WEB_DEVELOPMENT/webDevelopmentThumbnail.jpg"
import WebDevelopmentBlogImage1 from "../../public/blog-images/WEB_DEVELOPMENT/webDevelopmentBlogImage1.jpg"
import WebDevelopmentBlogImage2 from "../../public/blog-images/WEB_DEVELOPMENT/webDevelopmentImage1.jpeg"


import GraphiThumbnail from "../../public/blog-images/GRAPHIC_DESIGN/image1.jpg"
import GraphicImage1 from "../../public/blog-images/GRAPHIC_DESIGN/graphicDesignBlogImage1.jpg"
import GraphicImage2 from "../../public/blog-images/GRAPHIC_DESIGN/graphicDesignImage1.jpeg"

import SeoThumbnail from "../../public/blog-images/SEO/seoThumbnail.jpg"
import SeoImage1 from "../../public/blog-images/SEO/seoBlogImage1.jpg"
import SeoImage3 from "../../public/blog-images/SEO/SeoImage3.jpeg"
import SeoImage2 from "../../public/blog-images/SEO/SeoImage2.jpeg"


import DigitalMarketingThumbnail from "../../public/blog-images/DIGITAL_MARKETING/digitalMarketingThumbnail.jpg";
import DigitalMarketingImage1 from "../../public/blog-images/DIGITAL_MARKETING/digitalMarketingImage1.jpeg";

const BlogData = {
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
          text: "That’s where Abtik Digital comes in — with strategies that don’t just chase trends but drive measurable business growth."
        },
        {
          heading: "Frontend Development",
          imageUrl: WebDevelopmentBlogImage1,
          text: "Modern frontend stacks like React, Vue, and Svelte are enabling responsive, component-driven UIs with lightning-fast performance. React is widely preferred for its ecosystem, reusability, and community support."
        },
        {
          heading: "Backend Technologies",
          imageUrl: WebDevelopmentBlogImage2,
          text: "Node.js, Django, and Laravel power scalable backends with APIs, authentication, and real-time features. Node.js is preferred for full-stack JavaScript, speed, and non-blocking architecture."
        },
        {
          heading: "Database Management",
          imageUrl: WebDevelopmentBlogImage2,
          text: "MongoDB, PostgreSQL, and Firebase are popular choices for structured and unstructured data. Cloud databases improve availability and scaling effortlessly."
        },
        {
          heading: "Web Performance & Core Vitals",
          imageUrl: WebDevelopmentBlogImage1,
          text: "Performance directly impacts SEO and conversions. Techniques like lazy loading, code splitting, and optimized media are key. Tools like Lighthouse and WebPageTest help monitor vitals."
        },
        {
          heading: "Why It Matters",
          imageUrl: WebDevelopmentBlogImage2,
          text: "Your website is your digital storefront. A fast, secure, and accessible site boosts engagement and drives results."
        },
        {
          heading: "Contact Us",
          imageUrl: WebDevelopmentBlogImage2,
          text: "📞 <a href='tel:+918928138434' style='color:#f56015;'>+91 89281 38434</a> for a free consultation.<br>🌐 Visit: <a href='https://www.abtikdigital.com' style='color:#f56015;'>www.abtikdigital.com</a>"
        }
      ]
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
          text: "Learn key design principles and patterns that boost user satisfaction and conversions."
        },
        {
          heading: "Consistency & Accessibility",
          imageUrl: GraphicImage1,
          text: "Consistency, clarity, and accessibility are essential elements in great UI/UX design."
        },
        {
          heading: "User Psychology",
          imageUrl: GraphicImage2,
          text: "Designing based on how users think and behave ensures higher engagement and ease of use."
        },
        {
          heading: "Wireframes & Prototypes",
          imageUrl: GraphicImage2,
          text: "Tools like Figma, Adobe XD, and Sketch help visualize ideas before development, saving time and cost."
        },
        {
          heading: "Usability Testing",
          imageUrl: GraphicImage2,
          text: "Test early, test often. Real user feedback helps refine design decisions and improve experience."
        },
        {
          heading: "Why It’s Important",
          imageUrl: GraphicImage1,
          text: "Great design enhances trust, usability, and conversions. Poor UX drives users away."
        },
        {
          heading: "Contact Us",
          imageUrl: GraphicImage1,
          text: "📞 <a href='tel:+918928138434' style='color:#f56015;'>+91 89281 38434</a><br>🌐 Visit: <a href='https://www.abtikdigital.com' style='color:#f56015;'>www.abtikdigital.com</a>"
        }
      ]
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
          text: "Discover how search engine optimization is evolving with AI and user behavior shifts."
        },
        {
          heading: "Search Trends",
          imageUrl: SeoImage1,
          text: "Semantic search and voice queries are reshaping how content is structured. Focus on natural language and context."
        },
        {
          heading: "Performance Metrics",
          imageUrl: SeoImage2,
          text: "Core Web Vitals and real user metrics continue to influence rankings. Tools like Google Search Console and PageSpeed Insights are essential."
        },
        {
          heading: "AI-Powered Content",
          imageUrl: SeoImage3,
          text: "AI tools like ChatGPT and Jasper help create SEO-friendly articles faster, focusing on search intent and keywords."
        },
        {
          heading: "Technical SEO",
          imageUrl: SeoImage2,
          text: "Schema markup, mobile-first indexing, and crawl efficiency help search engines understand and rank content better."
        },
        {
          heading: "Local SEO & Maps",
          imageUrl: SeoImage1,
          text: "Google Business Profiles, citations, and customer reviews boost visibility in local search results."
        },
        {
          heading: "Recommended Tools",
          imageUrl: SeoImage2,
          text: "✅ Google Search Console<br>✅ Ahrefs<br>✅ Semrush<br>✅ Screaming Frog"
        },
        {
          heading: "Let’s Boost Your Search Visibility",
          imageUrl: SeoImage1,
          text: "📞 <a href='tel:+918928138434' style='color:#f56015;'>+91 89281 38434</a><br>🌐 <a href='https://www.abtikdigital.com' style='color:#f56015;'>www.abtikdigital.com</a>"
        }
      ]
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
          text: "Digital Marketing in 2025: “Visibility Isn’t Optional. It’s Everything.”\n\nIn today’s hyper-connected world, your brand must be seen, heard, and remembered."
        },
        {
          heading: "Eligibility – Who Needs Digital Marketing?",
          imageUrl: DigitalMarketingImage1,
          text: "If you’re any of the following, digital marketing is critical:",
          lists: [
            "A startup or local business trying to build brand awareness",
            "An e-commerce store seeking higher conversions",
            "A service-based business looking for quality leads",
            "A brand aiming to outshine competitors online"
          ]
        },
        {
          heading: "Top Benefits of Digital Marketing",
          imageUrl: DigitalMarketingImage1,
          lists: [
            "✅ Maximum Visibility",
            "✅ Lead Generation",
            "✅ Brand Building",
            "✅ Smart Analytics",
            "✅ Cost Efficiency"
          ]
        },
        {
          heading: "Our Core Services",
          imageUrl: DigitalMarketingImage1,
          lists: [
            "✅ Social Media Marketing — Scroll-stopping content & engagement",
            "✅ SEO — Technical fixes to content optimization",
            "✅ Performance Ads — Google & Meta campaigns",
            "✅ Email & WhatsApp Marketing — Automation & retargeting",
            "✅ Content Strategy — Funnels & copy that convert",
            "✅ WhatsApp Banner Design — Branded message creatives",
            "✅ LinkedIn Post Creation — Professional brand content",
            "✅ Logo & Branding Design — Eye-catching visuals",
            "✅ UI/UX Design — Flexible & conversion-focused layouts"
          ]
        },
        {
          heading: "Top Trends for 2025",
          imageUrl: DigitalMarketingImage1,
          lists: [
            "✅ AI-Powered Campaigns",
            "✅ Voice & Visual Search",
            "✅ Video-First Strategies",
            "✅ Omnichannel Funnels",
            "✅ Privacy-Ready Ads"
          ]
        },
        {
          heading: "How We Support You",
          imageUrl: DigitalMarketingImage1,
          lists: [
            "✔ Customized Strategy",
            "✔ Campaign Execution",
            "✔ Performance Tracking",
            "✔ Design & Content Support",
            "✔ Growth Hacking Solutions"
          ]
        },
        {
          heading: "How We Help You Win",
          imageUrl: DigitalMarketingImage1,
          lists: [
            "✓ You don’t need to learn algorithms — we handle it all",
            "✓ We scale your brand across platforms",
            "✓ We track and optimize every campaign",
            "✓ You get a full marketing team — not just a service"
          ]
        },
        {
          heading: "Ready to Dominate Digital?",
          imageUrl: DigitalMarketingImage1,
          text: "📞 <a href='tel:+918928138434' style='color:#f56015;'>+91 89281 38434</a> to book your free strategy session.<br>🌐 <a href='https://www.abtikdigital.com' style='color:#f56015;'>www.abtikdigital.com</a>"
        }
      ]
    }
  ]
};





const ExpandedBlog = () => {
  const { pathname } = useLocation();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const slug = pathname.split("/").pop();
    const found = BlogData.blogPosts.find((post) => post.slug === slug);
    setBlog(found || null);
  }, [pathname]);

  const createMarkup = (html: string) => {
    return { __html: html };
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
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0">
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

        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4 text-white">{blog.title}</h1>
          <p className="text-white italic mb-10">{blog.category}</p>

          <div className="space-y-20">
            {blog.sections.map((section: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } items-center gap-6`}
              >
                <img
                  src={section.imageUrl}
                  alt={`Section ${index + 1}`}
                  className="w-full md:w-1/2 rounded-xl shadow-md"
                />
                <div className="md:w-1/2 text-lg text-white leading-relaxed space-y-4">
                  {/* Optional heading */}
                  {section.heading && (
                    <h3 className="text-2xl font-semibold text-[#f56015]">
                      {section.heading}
                    </h3>
                  )}

                  {/* Render HTML from text */}
                  {section.text && (
                    <div
                      className="text-white text-lg whitespace-pre-line"
                      dangerouslySetInnerHTML={createMarkup(section.text)}
                    />
                  )}

                  {/* Bullet list if present */}
                  {section.lists && section.lists.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      {section.lists.map((item: string, idx: number) => {
                        const isBold = item.startsWith("**") && item.endsWith("**");
                        return (
                          <li key={idx} className="text-white text-lg list-none">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default ExpandedBlog;
