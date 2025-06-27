import { CheckCircle, Code, ChartColumnIncreasing, Brush } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import Mainlayout from "../layout/Mainlayout";
import Image1 from "../assets/AboutUs/Image1.jpeg";
import Image2 from "../assets/AboutUs/Image2.jpeg"
import Image3 from "../assets/AboutUs/Image3.jpeg"
import IphonImage from "../assets/IphoneImage/iPhone.png";


const sectionData = [
  {
    title: "Strategic Digital Solutions",
    text: "We begin every project by understanding your unique business needs. Our team blends research, analytics, and creative thinking to develop custom strategies that drive measurable results. From market analysis to platform selection, we tailor each approach to fit your goals.",
    listItems: [
      "Data-driven planning",
      "Targeted brand messaging",
      "Scalable growth strategies",
    ],
    imgSrc: Image1,
  },
  {
    title: "Design That Engages & Converts",
    text: "Design is more than aesthetics—it's about creating a user experience that captures attention and drives action. Our team crafts visually striking graphics, websites, and mobile interfaces that are intuitive, responsive, and conversion-focused.",
    listItems: [
      "Logo & brand identity",
      "UI/UX design for web and mobile",
      "Motion graphics & interactive visuals",
    ],
    imgSrc: Image2,
  },
  {
    title: "Full-Spectrum Development & Marketing",
    text: "We combine cutting-edge development with high-performance marketing. From building robust websites and mobile apps to executing ROI-driven ad campaigns, we ensure that your brand not only stands out—but also scales effectively.",
    listItems: [
      "Web & mobile development",
      "SEO, social media, and paid ads",
      "Continuous optimization and reporting",
    ],
    imgSrc: Image3,
  },
];

const AboutUs = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const setSectionRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      if (el) {
        sectionsRef.current[index] = el;
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Mainlayout>
      <main className="text-white    min-h-screen w-full bg-[#0F172A] ">
        <style>
          {`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fadeInUp 0.5s ease-out forwards;
            }
            .active {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
          `}
        </style>

        {/* About Section */}
        <section
          ref={setSectionRef(0)}
          className="relative flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0 text-white opacity-0 transition-all duration-500 overflow-hidden"
          style={{
            background: `               
      radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),               
      radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),               
      #0F172A`,
          }}
        >
          {/* SVG Line Animation for Desktop (Large screens) */}
          <div className="hidden lg:block absolute inset-0 top-[20%] w-full h-full overflow-hidden pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 1080"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Main curved line: right to center, curve down, then to left */}
              <path
                id="about-curved-line"
                d="M1920,280 L960,280 Q940,280 940,300 L940,580 Q940,600 920,600 L0,600"
                fill="none"
                stroke="#a33cc4"
                strokeWidth="32"
                strokeDasharray="2800"
                strokeDashoffset="2800"
                className="animate-[drawCurvedLine_3s_ease-in-out_0.5s_forwards]"
              />

              {/* Secondary curved line with slight offset */}
              <path
                id="about-curved-line-2"
                d="M1920,340 L900,340 Q880,340 880,360 L880,640 Q880,660 860,660 L0,660"
                fill="none"
                stroke="#f9a825"
                strokeWidth="32"
                strokeDasharray="2800"
                strokeDashoffset="2800"
                className="animate-[drawCurvedLine_3s_ease-in-out_1s_forwards]"
              />

              {/* Third curved line with more offset */}
              <path
                id="about-curved-line-3"
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

          {/* Mobile Curved Lines Animation (Small screens only) */}
          <div
            className="block sm:hidden absolute top-[20%] md:inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 414 896"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Mobile curved line: right to center, curve down, then to left */}
              <path
                id="mobile-curved-line1"
                d="M414,180 L207,180 Q197,180 197,190 L197,350 Q197,360 187,360 L0,360"
                fill="none"
                stroke="#a33cc4"
                strokeWidth="32"
                strokeDasharray="800"
                strokeDashoffset="800"
                className="animate-[drawCurvedLine_2.5s_ease-in-out_0.5s_forwards]"
              />
              <path
                id="mobile-curved-line2"
                d="M414,240 L187,240 Q177,240 177,250 L177,410 Q177,420 167,420 L0,420"
                fill="none"
                stroke="#f9a825"
                strokeWidth="32"
                strokeDasharray="800"
                strokeDashoffset="800"
                className="animate-[drawCurvedLine_2.5s_ease-in-out_1s_forwards]"
              />
              <path
                id="mobile-curved-line3"
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

          {/* Left Side - Heading + Paragraph */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left z-10">
            <h2 className="max-w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
              About Abtik
            </h2>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center z-10">
            <img
              src={IphonImage}
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
        </section>

        {/* Alternating Value Propositions */}
        {sectionData.map((item, i) => (
          <section
            key={i}
            ref={setSectionRef(i + 1)}
            className={`value-prop-section flex flex-col md:flex-row px-6 md:px-16 py-10 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-4 space-x-4 group delay-${i + 1} opacity-0 translate-y-10 transition-all duration-500`}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full md:w-1/2 h-[400px] transition-transform duration-500 group-hover:scale-105 floating-icon cursor-pointer rounded-lg"
            />
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-white mb-4">{item.text}</p>
              <ul className="list-disc pl-4 text-gray-300">
                {item.listItems.map((listItem, index) => (
                  <li
                    key={index}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* Team Section */}


        {/* Services Section */}
        <section
          ref={setSectionRef(5)}
          className="services-section px-6 md:px-16 py-10 text-white opacity-0  transition-all duration-500"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">What We Do</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Web Development */}
            <div className="flex flex-col items-center cursor-pointer bg-[#1E293B] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3">
              <Code className="text-[#f56015] text-4xl mb-4" />
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="text-gray-300">
                We build responsive, user-friendly websites that meet your business needs.
              </p>
            </div>

            {/* Digital Marketing */}
            <div className="flex flex-col items-center cursor-pointer bg-[#1E293B] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3">
              <ChartColumnIncreasing className="text-[#f56015] text-4xl mb-4" />
              <h3 className="text-xl font-semibold">Digital Marketing</h3>
              <p className="text-gray-300">
                Get your business noticed online with our tailored digital marketing solutions.
              </p>
            </div>

            {/* SEO Services */}
            <div className="flex flex-col items-center cursor-pointer bg-[#1E293B] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3">
              <CheckCircle className="text-[#f56015] text-4xl mb-4" />
              <h3 className="text-xl font-semibold">SEO Services</h3>
              <p className="text-gray-300">
                Enhance your website's visibility with our proven SEO strategies.
              </p>
            </div>

            {/* Graphic Design */}
            <div className="flex flex-col items-center cursor-pointer bg-[#1E293B] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3">
              <Brush className="text-[#f56015] text-4xl mb-4" />
              <h3 className="text-xl font-semibold">Graphic Design</h3>
              <p className="text-gray-300">
                We create visually stunning logos, websites, and product designs to elevate your brand.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Mainlayout>
  );
};

export default AboutUs;