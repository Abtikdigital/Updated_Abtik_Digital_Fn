import {  CheckCircle, Code, Phone, Edit } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import Mainlayout from "../layout/Mainlayout";
import AboutUsImage1 from "../assets/AboutUs/AboutUsImage1.jpeg";
import AboutUsImage2 from "../assets/AboutUs/AboutUsImage2.jpeg"
import AboutUsImage3 from "../assets/AboutUs/AboutUsImage3.jpeg"
import IphonImage from "../assets/IphoneImage/iPhone.png";
// import AbhinevThakerImage from "../assets/AboutUs/abhinav-thaker.png";
// import RajBhenslaImage from "../assets/AboutUs/raj-bhensal.png";

// const teamData = [
//   {
//     name: "Raj Bhensla",
//     title: "Tech Lead & Co-Founder",
//     photo: RajBhenslaImage,
//     social: {
//       facebook: "https://facebook.com/janesmith",
//       instagram: "https://instagram.com/janesmith",
//       linkedin: "https://linkedin.com/in/janesmith",
//     },
//   },
//   {
//     name: "Abhinav Thaker",
//     title: "Creative Director & Co-Founder",
//     photo: AbhinevThakerImage,
//     social: {
//       facebook: "https://facebook.com/johndoe",
//       instagram: "https://instagram.com/johndoe",
//       linkedin: "https://linkedin.com/in/johndoe",
//     },
//   },
// ];

const sectionData = [
  {
    title: "Strategic Digital Solutions",
    text: "We begin every project by understanding your unique business needs. Our team blends research, analytics, and creative thinking to develop custom strategies that drive measurable results. From market analysis to platform selection, we tailor each approach to fit your goals.",
    listItems: [
      "Data-driven planning",
      "Targeted brand messaging",
      "Scalable growth strategies",
    ],
    imgSrc: AboutUsImage1,
  },
  {
    title: "Design That Engages & Converts",
    text: "Design is more than aesthetics—it's about creating a user experience that captures attention and drives action. Our team crafts visually striking graphics, websites, and mobile interfaces that are intuitive, responsive, and conversion-focused.",
    listItems: [
      "Logo & brand identity",
      "UI/UX design for web and mobile",
      "Motion graphics & interactive visuals",
    ],
    imgSrc: AboutUsImage2,
  },
  {
    title: "Full-Spectrum Development & Marketing",
    text: "We combine cutting-edge development with high-performance marketing. From building robust websites and mobile apps to executing ROI-driven ad campaigns, we ensure that your brand not only stands out—but also scales effectively.",
    listItems: [
      "Web & mobile development",
      "SEO, social media, and paid ads",
      "Continuous optimization and reporting",
    ],
    imgSrc: AboutUsImage3,
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
      <main className="text-white z-10 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#f56015_1%,__#0F172A_30%)] min-h-screen w-full bg-[#0F172A] flex flex-col items-center">
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
          className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0 text-white opacity-0 translate-y-10 transition-all duration-500"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A`,
          }}
        >
          {/* Left Side - Heading + Paragraph */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left">
            <h2 className="max-w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
              About Abtik
            </h2>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={IphonImage}
              alt="iPhone Preview"
              className="hover:scale-105 cursor-pointer transition-transform duration-500 floating-icon w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
            />
          </div>
        </section>

        {/* Alternating Value Propositions */}
        {sectionData.map((item, i) => (
          <section
            key={i}
            ref={setSectionRef(i + 1)}
            className={`value-prop-section flex flex-col md:flex-row px-6 md:px-16 py-10 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
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
        {/* <section
          ref={setSectionRef(4)}
          className="team-section px-6 md:px-16 py-10 text-white opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">Our Team Pillars</h2>
          <p className="text-center max-w-2xl mx-auto mb-10 text-gray-300">
            At Abtik Digital, our team is comprised of passionate and dedicated professionals who push boundaries to deliver innovative solutions.
          </p>

       
          <div className="flex flex-wrap justify-center gap-10">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col items-center bg-[#1E293B] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#f56015] mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{member.title}</p>
                <div className="flex justify-center gap-4 text-[#f56015]">
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section> */}

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
              <Phone className="text-[#f56015] text-4xl mb-4" />
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
              <Edit className="text-[#f56015] text-4xl mb-4" />
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