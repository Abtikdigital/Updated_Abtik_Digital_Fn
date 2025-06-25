import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import WebDevelopmentBlogImage1 from "../../public/blog-images/WEB_DEVELOPMENT/webDevelopmentBlogImage1.jpg";

import GraphiThumbnail from "../../public/blog-images/GRAPHIC_DESIGN/image1.jpg";

import SeoThumbnail from "../../public/blog-images/SEO/seoThumbnail.jpg";

import DigitalMarketingThumbnail from "../../public/blog-images/DIGITAL_MARKETING/digitalMarketingThumbnail.jpg";


// Define interfaces for BlogData structure
interface BlogSection {
  heading?: string;
  text?: string;
  lists?: string[];
  description?:any;
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
      category: "",
      imageUrl: WebDevelopmentBlogImage1,
      heading: "Introduction",
      sections: [
        {
          heading: "Summary",
          text: "The way people browse, shop, and engage online has changed dramatically. In 2025, websites are more than digital brochures—they’re dynamic, intelligent platforms that convert visitors into customers. Modern web trends like AI chatbots, voice search, fast-loading design, and mobile-first experiences aren’t optional anymore—they’re essential for business growth. For digital marketers and business owners alike, keeping up means staying ahead.",
        },
        {
          heading: "What Are Modern Web Trends?",
          text: "Modern web trends refer to the evolving technologies and design strategies that make websites faster, smarter, and more engaging. They focus on user experience (UX), performance, personalization, and conversion—all pillars of effective digital marketing.",
      
        },
        {
          heading: "Key Web Trends in 2025 You Should Know",
          text: "",
          lists:["➢ AI chatbots help answer customer questions automatically.","➢ Simple and dark designs make websites look clean and easy to read.", "➢ Mobile-friendly layouts work smoothly on phones and tablets.", "➢ Voice search support helps people find you by speaking, not typing.", "➢ Websites that work like apps are faster and can be used offline.", "➢ Accessible websites are built so everyone, including people with disabilities, can use them.", ]
        },
        {
          heading: "Why These Trends Matter for Your Digital Marketing Strategy",
          text: "",
           lists:["➢ Easy-to-use websites keep visitors on your site longer.","➢ Modern features help your website rank higher on Google.","➢ Faster websites lead to more leads, sales, and signups.","➢ A clean design makes your brand look more professional and trustworthy."]
        },
        {
          heading: "The Business Opportunity Behind Web Trends",
          text: "For agencies, marketers, and businesses, riding the wave of modern web trends means:",
          lists:["➢ Upselling website revamps with measurable ROI","➢ Offering AI integrations as part of automation solutions","➢ Providing performance-optimized SEO/SEM campaigns" ]
        },
        {
          heading: "How You Can Get Started",
          text: "",
          lists:["➢ Redesign your site with a mobile-first, user-focused approach.","➢ Use analytics tools like GA4 or Hotjar to guide design decisions.","➢ Integrate AI for chat, personalization, and marketing automation.","➢ Optimize performance for fast load times and Core Web Vitals." ]
        },
         {
          heading: "Challenges You May Face",
          text: "",
          lists:["➢ Budget Constraints: Trendy websites require investment, but offer higher long-term returns.","➢ Tech Overload: With too many tools, it’s easy to get overwhelmed—focus on impact-first improvements.","➢ Legacy Systems: Older websites may need total redesigns to catch up","➢ Security & Compliance: New trends must still meet privacy (GDPR) and security standards." ]
        },
         {
          heading: "What We’re Doing at Abtik Digital",
          text: "At Abtik Digital, we help businesses grow online with smart, modern, and result-driven solutions.",
          lists:["➢ Website Development – Fast, responsive websites built on WordPress, Shopify, or custom code.","➢ E-Commerce Solutions – User-friendly online stores designed to increase sales.","➢ Digital Marketing – Targeted ad campaigns on Google, Facebook, and Instagram.","➢ SEO Services – Boost rankings with keyword strategy, on-page SEO, and technical fixes.","➢ Social Media Management – Grow your brand with planned content and consistent engagement.", "➢ Graphic Design & Branding – Professional logos, brochures, and brand visuals.", "➢ Content Creation – High-quality blogs, web copy, and social media content.", "➢ Video & Reel Creation – Short videos and reels that capture attention and drive results.", "➢ Performance Ads – Data-driven ad campaigns that deliver maximum ROI." ]
        },
         {
          heading: "Conclusion",
          text: "Modern web trends are key to creating faster, smarter, and more engaging digital experiences. Businesses that adapt stay ahead in the competitive online space. At Abtik Digital, we combine design, technology, and strategy to help you grow online. Let’s upgrade your digital presence—partner with us today.",
          lists:[]
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
      category: "",
      imageUrl: GraphiThumbnail,
      heading: "Design Principles",
      sections: [
        {
          text: "",
        },
        {
          heading: "Summary",
          text: "User expectations are higher than ever. In 2025, great design isn’t just about how a website looks—it’s about how it works. Effective UI (User Interface) and UX (User Experience) practices are critical for converting visitors into loyal customers. From intuitive navigation to fast-loading pages and mobile-friendly layouts, a well-designed experience can make or break your online presence. For businesses and marketers, getting UI/UX right is key to standing out and succeeding online.",
        },
        {
          heading: "What Is UI/UX Design?",
          text: "UI refers to the visual elements—buttons, menus, colors, layout—while UX focuses on the overall experience of a user navigating a website or app. Together, UI/UX ensures your site is not only attractive but also easy to use, engaging, and built to convert.",
        },
        {
          heading: "Effective UI/UX Practices to Follow in 2025",
          text: "",
          lists:["➢ Simple, clean layouts help users focus and find information quickly.","➢ Clear navigation menus guide users easily through your site.","➢ Mobile-first design ensures a great experience on any device.","➢ Consistent colors and typography create a strong, trustworthy brand identity.", "➢ Clickable elements and CTAs should be visible, intuitive, and easy to interact with.", "➢ User-friendly forms with fewer fields improve lead generation." ]
        },
        {
          heading: "Why These Practices Matter for Your Digital Marketing",
          text: "",
          lists: ["➢ Better design means better engagement and longer time on site.","➢ User-friendly experiences lead to more leads, sign-ups, and sales.","➢ Google rewards well-structured, mobile-optimized websites.","➢ Good UI/UX builds trust and leaves a lasting impression on visitors."]
        },
        {
          heading: "The Business Opportunity Behind Good UI/UX",
          text: "For businesses, agencies, and marketers, applying modern UI/UX best practices means:",
          lists: ["➢ Improving website performance with measurable results","➢ Offering UI/UX audits and redesigns as high-value services","➢ Boosting campaign effectiveness through better landing pages and user flows"]
        },
         {
          heading: "  Challenges You May Face",
          text: "",
          lists: ["➢ Budget Limits: UI/UX upgrades may require design and dev resources.","➢ Outdated Design Systems: Old templates can slow down new improvements.","➢ Inconsistent Branding: Without UI/UX guidelines, your site may feel disjointed.","➢ Lack of Data: Not tracking user behavior can make improvement efforts guesswork."]
        },
         {
          heading: "What We’re Doing at Abtik Digital",
          text: "At Abtik Digital, we help businesses grow online with smart, modern, and result-driven solutions.",
          lists:["➢ Website Development – Fast, responsive websites built on WordPress, Shopify, or custom code.","➢ E-Commerce Solutions – User-friendly online stores designed to increase sales.","➢ Digital Marketing – Targeted ad campaigns on Google, Facebook, and Instagram.","➢ SEO Services – Boost rankings with keyword strategy, on-page SEO, and technical fixes.","➢ Social Media Management – Grow your brand with planned content and consistent engagement.", "➢ Graphic Design & Branding – Professional logos, brochures, and brand visuals.", "➢ Content Creation – High-quality blogs, web copy, and social media content.", "➢ Video & Reel Creation – Short videos and reels that capture attention and drive results.", "➢ Performance Ads – Data-driven ad campaigns that deliver maximum ROI." ]
        },
         {
          heading: "Conclusion",
          text: "A great website isn’t just about how it looks—it’s about how it works for your users. Effective UI/UX helps your business stand out, engage better, and convert more visitors. In a digital world where attention is short and options are many, creating a seamless user experience is essential. At Abtik Digital, we’re here to turn great design into real results.",
          lists:[]
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
      category: "",
      imageUrl: SeoThumbnail,
      heading: "SEO Evolution",
      sections: [
        {
          text: "",
        },
        {
          heading: "Summary",
          text: "Search Engine Optimization (SEO) has changed dramatically over the years—and 2025 is no different. With the rise of AI-driven search engines, voice queries, zero-click results, and user-focused algorithms, SEO is now less about keywords and more about delivering real value. To grow online, businesses must embrace smarter strategies, better content, and optimized user experience. In 2025, SEO is not just a ranking game—it’s a brand-building tool.",
        },
        {
          heading: "What Is SEO in 2025?",
          text: "SEO in 2025 goes beyond traditional tactics like keyword stuffing or backlink farming. It’s about providing fast, relevant, secure, and engaging content that answers real user intent. Search engines are smarter, and so your SEO strategy needs to focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), structured data, and human-friendly design.",
        },
        {
          heading: "Key SEO Trends in 2025 You Should Know",
          text: "",
          lists: ["➢ AI-Powered Search Engines understand context, not just keywords.", "➢ Core Web Vitals (speed, stability, responsiveness) directly impact rankings.", "➢ Mobile-First Indexing means Google ranks your mobile version first.", "➢ Semantic Search & Intent Matching require well-structured, relevant content.", "➢ Local SEO + Maps Integration helps businesses get discovered nearby.", "➢ Video & Visual SEO are essential as Google ranks multimedia content higher."]
        },
        {
          heading: "Why SEO Still Matters for Your Digital Growth",
          text: "",
          lists: ["➢ Drives high-intent organic traffic to your website.","➢ Builds long-term visibility and brand credibility.","➢ Reduces ad spend by attracting free search traffic.","➢ Improves user experience with better content and structure.","➢ Supports every stage of the buyer’s journey."]
        },
         {
          heading: "How You Can Get Started",
          text: "",
          lists: ["➢ Audit your website for speed, structure, and mobile performance.","➢ Update existing content to match current search intent and keyword trends.","➢ Add schema markup for better visibility in featured results.","➢ Create content hubs (pillar pages and clusters) for better internal linking.","➢ Focus on E-E-A-T in blogs, landing pages, and service content."]
        },
         {
          heading: "Challenges You May Face",
          text: "",
          lists: ["➢ Algorithm updates can shift rankings overnight—stay flexible.","➢ High competition requires smart content, not just more content.","➢ Technical SEO like schema and speed needs expert handling","➢ Tracking ROI takes time and consistent measurement."]
        },
         {
          heading: "What We’re Doing at Abtik Digital",
          text: "At Abtik Digital, we help businesses grow online with smart, modern, and result-driven solutions.",
          lists:["➢ Website Development – Fast, responsive websites built on WordPress, Shopify, or custom code.","➢ E-Commerce Solutions – User-friendly online stores designed to increase sales.","➢ Digital Marketing – Targeted ad campaigns on Google, Facebook, and Instagram.","➢ SEO Services – Boost rankings with keyword strategy, on-page SEO, and technical fixes.","➢ Social Media Management – Grow your brand with planned content and consistent engagement.", "➢ Graphic Design & Branding – Professional logos, brochures, and brand visuals.", "➢ Content Creation – High-quality blogs, web copy, and social media content.", "➢ Video & Reel Creation – Short videos and reels that capture attention and drive results.", "➢ Performance Ads – Data-driven ad campaigns that deliver maximum ROI." ]
        },
        {
          heading: "Recommended Tools",
          lists: ["✔ Google Search Console", "✔ Ahrefs", "✔ Semrush", "✔ Screaming Frog"],
        },
         {
          heading: "Conclusion",
          text: "SEO in 2025 is more advanced, more user-focused, and more important than ever. To rank, convert, and grow, businesses must embrace smarter, ethical, and intent-driven strategies. At Abtik Digital, we help brands stay visible, relevant, and competitive in this fast-changing search landscape.",
          lists:[]
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
      title: "Digital Marketing in 2025",
      category: "",
      imageUrl: DigitalMarketingThumbnail,
      heading: "",
      sections: [
        {
          text: "",
        },
        {
          heading: "Summary",
          text: "Digital marketing in 2025 is more intelligent, personalized, and automated than ever before. With AI, voice search, privacy-first strategies, and short-form content leading the way, businesses must evolve fast or risk getting left behind. This blog explores what digital marketing looks like in 2025, key trends, why it matters, and how businesses can turn upcoming challenges into growth opportunities.",
          lists: [],
        },
        {
          heading: "What Is Digital Marketing in 2025?",
          text: "In 2025, digital marketing is no longer just about running ads or managing social media—it’s about delivering real-time, data-driven, personalized experiences across every customer touchpoint. It integrates advanced technologies like AI, machine learning, automation, and predictive analytics to better understand and serve consumers.",
          lists: [
            "✔ AI-powered content creation and chatbots",
            "✔ Hyper-personalized email and social campaigns",
            "✔ Voice and visual search optimization",
            "✔ Real-time data analysis and behavior prediction",
            "✔ Seamless omnichannel experiences",
          ],
        },
        {
          heading: "Why It Matters for Your Business Growth",
          text: "Digital marketing in 2025 isn’t just about staying trendy—it’s a growth engine.",
          lists: [
            "✔ Higher ROI: AI automation reduces cost and increases efficiency.",
            "✔ Customer Loyalty: Personalized experiences build lasting relationships.",
            "✔ Faster Conversions: Predictive tools shorten the buyer journey.",
            "✔ Wider Reach: Omnichannel strategies ensure you’re where your audience is.",
          ],
          description: "Businesses that embrace these changes will not only grow—but dominate their markets."
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
          heading: "The Business Opportunity in 2025",
          text: "If you adapt early, you get ahead. Here’s where the real opportunity lies:",
          lists: [
            "✔ Hyper-targeted campaigns with higher engagement",
            "✔ Lower acquisition costs through smarter ad targeting",
            "✔ Global access to customers via voice, mobile, and video",
            "✔ Building brand trust in a privacy-conscious world",
            "✔ New markets and niches through influencer-led micro-communities",
          ],
          description: "Digital marketing in 2025 is a level playing field—startups and small businesses can compete with giants using the right strategies and tools."
        },
        {
          heading: "Challenges You May Face",
          text: "Despite the opportunities, businesses must overcome key challenges:",
          lists: [
            "✓ Keeping up with tech: The pace of change is fast. Tools evolve monthly.",
            "✓ Data privacy laws: You’ll need consent-based marketing strategies.",
            "✓ Complex analytics: Interpreting AI data and performance metrics requires skill.",
            "✓ Ad fatigue and content saturation: Standing out takes creativity and authenticity.",
            "✓ Tool overload: Choosing the right tech stack can be overwhelming..",
          ],
        },
        {
          heading: "Conclusion",
          text: "Digital marketing in 2025 is about more than just being online—it’s about being intelligent, fast, and human-centric. Brands that embrace AI, focus on real value, and adapt to new behaviors will lead the next decade of growth. Whether you’re a small business, startup, or growing brand—this is the moment to invest in smarter marketing.",
          lists: [],
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
      const res: AxiosResponse<ApiResponse> = await axios.post("/api/blogApis.js", data);
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
                      <ul className="list-none list-inside space-y-2 mt-2">
                        {section.lists.map((item, idx) => {
                          const isBold = item.startsWith("**") && item.endsWith("**");
                          return (
                            <li key={idx} className="text-white text-lg ">
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
                    {
                      section?.description&&(
                        <p>
                          {section.description}
                        </p>
                      )
                    }
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