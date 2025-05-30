import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import DigitalMarketingImage from "../assets/OurServices/DigitalMarkeingSection.jpg"
import { useDispatch } from "react-redux";
const DigitalMarketing = () => {
  const disp = useDispatch();
  const handleOpenGetQuote = () => {
    disp({ type: "open" });
  };
  return (
    <Mainlayout>
      <div className="min-h-screen w-full bg-[#0F172A] ">
        <div
          className="flex flex-col md:flex-row items-center justify-between w-full  gap-10 md:gap-0 px-6 md:px-16 py-10"
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
              Digital Marketing
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
        <div className="w-full"
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
                Digital Marketing Services That Drive Engagement
              </h1>
              <p className="text-lg md:text-xl">
                Boost your online presence and engage with your audience on
                social media platforms with our expert digital marketing
                strategies.
              </p>
            </div>
          </section>

          {/* What is Digital Marketing */}
          <section className="  text-white px-6 md:px-16 py-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                What is Digital Marketing?
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Digital marketing is the promotion of products or services
                through digital channels such as social media, email, search
                engines, websites, and more. It focuses on reaching a targeted
                audience, increasing online visibility, building brand
                awareness, and driving conversions.
              </p>
            </div>
          </section>
          {/* Why Digital Marketing Matters */}
          <section className="  text-white px-6 md:px-16 py-10">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center ">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
                Why Digital Marketing Matters
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                Digital marketing helps you reach a global audience, track
                performance in real time, and adjust strategies for optimal
                results. Whether you’re a small business or a large corporation,
                having a solid online presence is essential in today’s
                digital-first world.
              </p>
              <ul className="list-disc list-inside text-white text-lg leading-relaxed space-y-3 mx-auto max-w-4xl">
                <li>Targeted reach to the right audience.</li>
                <li>Real-time performance tracking and analysis.</li>
                <li>
                  Cost-effective strategy for brand awareness and lead
                  generation.
                </li>
                <li>Improved engagement and customer loyalty.</li>
                <li>Increased sales and conversion rates.</li>
              </ul>
               <img
                src={DigitalMarketingImage}
                alt="Web Design Illustration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </section>
        </div>
        {/* Our Digital Marketing Services */}
        <section className=" bg-white px-6 md:px-16 py-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Our Digital Marketing Services
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mt-10 pb-2">
              {/* WhatsApp Green Tick */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                  WhatsApp Green Tick Verification
                </h3>
                <p className="text-gray-600">
                  Get verified on WhatsApp and earn the trust of your customers.
                  With the green tick verification, you can enhance your brand’s
                  credibility and improve customer engagement.
                </p>
              </div>

              {/* Social Media Post/Banner Creation */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                  Social Media Post & Banner Creation
                </h3>
                <p className="text-gray-600">
                  We create eye-catching and engaging social media posts and
                  banners tailored to your brand. Whether it’s Facebook,
                  Instagram, Twitter, or LinkedIn, we’ll help you create content
                  that resonates with your audience.
                </p>
              </div>

              {/* Social Media Management */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                  Social Media Account Handling
                </h3>
                <p className="text-gray-600">
                  Our team will handle and grow your social media accounts,
                  engaging with followers, creating content, and increasing
                  visibility to boost your brand’s presence and engagement.
                </p>
              </div>

              {/* Paid Advertising */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                  Paid Advertising
                </h3>
                <p className="text-gray-600">
                  From Google Ads to social media promotions, we create targeted
                  ads to reach your audience effectively, driving traffic,
                  leads, and sales for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {/* <section className=" bg-white px-6 md:px-16 py-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Success Stories from Our Clients
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We’ve helped many businesses grow their online presence and
              engagement through effective digital marketing campaigns. Here are
              a few success stories.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gray-100 p-6 rounded-lg w-72 shadow-md">
                <p className="text-gray-700">
                  "After our social media overhaul, we saw a 250% increase in
                  engagement within the first month!"
                </p>
                <p className="mt-4 font-semibold text-[#f56015]">
                  - Foodies' Delight
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg w-72 shadow-md">
                <p className="text-gray-700">
                  "Our WhatsApp verification helped us build trust with our
                  customers, increasing our customer service response rate!"
                </p>
                <p className="mt-4 font-semibold text-[#f56015]">
                  - TechSolutions
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Call To Action */}
        <section className=" bg-[#0F172A] text-white text-center px-6 md:px-16 py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-lg mb-8">
              Let’s work together to create a digital marketing strategy that
              increases your brand awareness and drives sales.
            </p>
            <button
              className=" cursor-pointer bg-[#f56015] hover:bg-[#d14e10] text-white  font-bold py-3 px-8 rounded-full  transition-colors"
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

export default DigitalMarketing;
