import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import LogoImage1 from "../assets/Services/WebDevelopement/app-development.svg";
import LogoImage2 from "../assets/Services/WebDevelopement/computer.png";
import LogoImage3 from "../assets/Services/WebDevelopement/dynamics.png";
import LogoImage4 from "../assets/Services/WebDevelopement/website.png";
import { useDispatch } from "react-redux";

const WebDesign = () => {
  const disp = useDispatch();
  const handleOpenGetQuote = () => {
    disp({ type: "open" });
  };
  // Array of objects for Web Design & Development Services
  const designServices = [
    {
      title: "Static Websites",
      logoImage: LogoImage1,
      description:
        "We create simple yet visually appealing static websites that are fast and easy to maintain. Perfect for businesses with minimal interactive features.",
    },
    {
      title: "Dynamic Websites",
      logoImage: LogoImage2,
      description:
        "Dynamic websites with interactive features and databases, ideal for businesses looking to integrate real-time data and user-driven content.",
    },
    {
      title: "Web Apps",
      logoImage: LogoImage3,
      description:
        "Our web apps offer customized solutions, from simple tools to complex platforms, built to meet the specific needs of your business and users.",
    },
    {
      title: "Informative Websites",
      logoImage: LogoImage4,
      description:
        "We design clean, easy-to-navigate informative websites, ideal for showcasing your company's information, portfolio, services, and more.",
    },
  ];

  // Array of objects for Backend Development Services
  const backendServices = [
    {
      title: "Custom APIs",
      description:
        "We design and implement custom APIs that enable your website or web app to communicate with other platforms and services, ensuring seamless data integration and enhanced functionality.",
    },
    {
      title: "Database Integration",
      description:
        "Whether you need a relational or NoSQL database, we build robust backends that efficiently manage and store your data, ensuring scalability and reliability.",
    },
    {
      title: "User Authentication",
      description:
        "Implement secure and scalable user authentication and authorization systems, including login, registration, password recovery, and role-based access control.",
    },
    {
      title: "Real-Time Web Apps",
      description:
        "Create real-time web apps with WebSockets and other technologies that allow instant updates and communication, perfect for chat apps, live notifications, and interactive experiences.",
    },
  ];

  // Array of objects for Happy Clients
  // const clientTestimonials = [
  //   {
  //     quote:
  //       "Amazing service! Our new website helped us double our online inquiries.",
  //     client: "Tech Solutions",
  //   },
  //   {
  //     quote:
  //       "The design was exactly what we needed. Modern, clean, and professional.",
  //     client: "Fresh Start Co.",
  //   },
  // ];

  // Array of objects for How Web Design Boosts Business
  const businessBoosts = [
    {
      title: "More Leads",
      description:
        "Attract and capture more qualified leads with better user experiences and call-to-actions.",
    },
    {
      title: "Stronger Branding",
      description:
        "Create a consistent brand identity that reflects your values and message across every page.",
    },
    {
      title: "Increased Sales",
      description:
        "A streamlined, user-friendly design improves your conversion rates and turns visitors into paying customers.",
    },
  ];

  return (
    <Mainlayout>
      <div className="min-h-screen w-full bg-[#0F172A] ">
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
              Website Development
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
        </div>
        <div
          className="w-full "
          style={{
            background: `
                radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
                radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
                #0F172A
              `,
          }}
        >
          {/* Hero Section */}
          <section className=" text-white  text-center px-6 md:px-16 py-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Professional Web Design & Development Services
              </h1>
              <p className="text-lg md:text-xl">
                Crafting stunning, user-friendly websites and powerful web apps
                that drive business growth.
              </p>
            </div>
          </section>

          {/* What is Web Design */}
          <section className="  text-white px-6 md:px-16 py-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                What is Web Design?
              </h2>
              <p className="text-[#9f9f9f] text-lg leading-relaxed">
                Web design is the process of creating websites that are visually
                appealing, easy to navigate, and optimized for performance. It
                involves the strategic arrangement of content, images, colors,
                typography, and interactive elements to create an engaging
                experience for users. A well-designed website not only looks
                professional but also enhances credibility, builds trust, and
                effectively communicates your brand message.
              </p>
            </div>
          </section>

          {/* Why Web Design is Important */}
          <section className="  text-white px-6 md:px-16 py-10">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  Why is Web Design Important?
                </h2>
                <ul className="list-disc list-inside text-[#9f9f9f] text-lg leading-relaxed space-y-3">
                  <li>
                    First impressions matter — your website is often the first
                    interaction people have with your brand.
                  </li>
                  <li>
                    A professional design builds trust and encourages visitors
                    to become customers.
                  </li>
                  <li>
                    Good UX/UI (user experience/user interface) keeps users
                    engaged longer.
                  </li>
                  <li>
                    Mobile-responsive design ensures your site looks great on
                    all devices.
                  </li>
                  <li>
                    SEO-optimized design improves your visibility on Google and
                    drives more traffic.
                  </li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Web Design Illustration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </section>
        </div>

        {/* Services We Offer */}
        <section className=" bg-[#D9D9D9] text-black px-6 md:px-16 py-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Our Web Design & Development Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
              {designServices.map((service, index) => (
                <>
                  <div
                    key={index}
                    className="p-6 bg-gray-100 rounded-2xl shadow-md "
                  >
                    <div className=" flex justify-center items-center my-1">
                      <img
                        src={service.logoImage}
                        className="w-10 h-10 hover:text-[#f56015] "
                      />
                    </div>
                    <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                      {service.title}
                    </h3>
                    <p className="text-[#9f9f9f]">{service.description}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>

        {/* Backend Development Services */}
        <section className="  px-6 md:px-16 py-10 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              Backend Development for Web Apps
            </h2>
            <p className="text-[#9f9f9f] text-lg leading-relaxed mb-8">
              We don't just create the front-end of your website or web app, we
              also develop the backend to ensure smooth functionality, secure
              data handling, and high performance. Our backend solutions support
              all the dynamic features your web app needs, from databases to
              user authentication and real-time updates.
            </p>
            <div className="grid md:grid-cols-2 gap-10 ">
              {backendServices.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-md  "
                >
                  <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Happy Clients Section */}
        {/* <section className=" px-6 md:px-16 py-10 bg-white ">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6  text-black">
              Our Happy Clients
            </h2>
            <p className="text-[#9f9f9f] text-lg leading-relaxed mb-8">
              Our clients love the websites and web apps we create! From
              startups to established brands, we help businesses stand out
              online. Our commitment to excellence, creativity, and user-focused
              designs lead to outstanding results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 ">
              {clientTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-2xl w-72 shadow-md"
                >
                  <p className="text-gray-700">{testimonial.quote}</p>
                  <p className="mt-4 font-semibold text-[#f56015]">
                    - {testimonial.client}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* How It Boosts Business */}
        <section className="  px-6 md:px-16 py-10 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              How Web Design Boosts Your Business
            </h2>
            <p className="text-[#9f9f9f] text-lg leading-relaxed mb-8">
              A powerful website acts as your 24/7 salesperson, always ready to
              showcase your products, tell your brand story, and generate leads.
              A strategic, mobile-optimized, and SEO-friendly design maximizes
              user engagement, increases trust, and converts visitors into loyal
              customers — all leading to real growth and success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-10 ">
              {businessBoosts.map((boost, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl shadow-md">
                  <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                    {boost.title}
                  </h3>
                  <p className="text-gray-600">{boost.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className=" px-6 md:px-16 py-10 bg-[#0F172A] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Online Presence with Expert Web Design?
            </h2>
            <p className="text-lg mb-8">
              Let’s collaborate to design a stunning, user-friendly website that
              captures your brand’s essence and drives results.
            </p>
            <button
              className=" cursor-pointer  font-bold py-3 px-8 rounded-full bg-[#f56015] hover:bg-[#d14e10] text-white   transition-colors"
              onClick={handleOpenGetQuote}
            >
              Schedule a Free Consultation
            </button>
          </div>
        </section>
      </div>
    </Mainlayout>
  );
};

export default WebDesign;
