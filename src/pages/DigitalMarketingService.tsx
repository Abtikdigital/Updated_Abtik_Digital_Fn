import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import DigitalMarketingImage from "../assets/OurServices/DigitalMarkeingSection.jpg";
import { useDispatch } from "react-redux";

const DigitalMarketing = () => {
  const dispatch = useDispatch();
  const handleOpenGetQuote = () => {
    dispatch({ type: "open" });
  };

  const benefits = [
    "Targeted reach to the right audience.",
    "Real-time performance tracking and analysis.",
    "Cost-effective strategy for brand awareness and lead generation.",
    "Improved engagement and customer loyalty.",
    "Increased sales and conversion rates.",
  ];

  const services = [
    {
      title: "WhatsApp Green Tick Verification",
      description:
        "Get verified on WhatsApp and enhance your brand’s credibility with the green tick, improving trust and engagement.",
    },
    {
      title: "Social Media Post & Banner Creation",
      description:
        "Custom-designed, platform-optimized visuals that resonate with your audience across Instagram, Facebook, LinkedIn, and more.",
    },
    {
      title: "Social Media Account Handling",
      description:
        "From strategy to daily posts and replies, we manage your presence and drive consistent growth across channels.",
    },
    {
      title: "Paid Advertising",
      description:
        "Google Ads, Meta campaigns, and more — we craft performance-focused campaigns that generate ROI.",
    },
  ];

  return (
    <Mainlayout>
      <div className="min-h-screen w-full bg-[#0F172A] text-white">
        {/* Header Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Digital Marketing
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={IphoneImage}
              alt="iPhone Preview"
              className="w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Intro Section */}
        <section
          className="px-6 md:px-16 py-16 text-center"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Digital Marketing Services That Drive Engagement
            </h1>
            <p className="text-lg md:text-xl">
              Boost your online presence and engage with your audience using expert digital marketing strategies tailored to your goals.
            </p>
          </div>
        </section>

        {/* What is Digital Marketing */}
        <section className="px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              What is Digital Marketing?
            </h2>
            <p className="text-lg leading-relaxed">
              Digital marketing is the promotion of products or services through digital channels like social media, search engines, email, and websites — reaching your target audience, increasing visibility, and driving results.
            </p>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Why Digital Marketing Matters
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Whether you're a startup or enterprise, digital marketing allows you to connect, analyze, and grow at scale in a digital-first world.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                {benefits.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <img
              src={DigitalMarketingImage}
              alt="Digital Marketing Visual"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Services Offered */}
        <section className="bg-white text-[#0F172A] px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              Our Digital Marketing Services
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-[#f56015] text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-16 py-16 text-center bg-[#0F172A] text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-lg mb-8">
              Let’s collaborate to craft a digital strategy that delivers results.
            </p>
            <button
              onClick={handleOpenGetQuote}
              className="bg-[#f56015] hover:bg-[#d14e10] text-white font-bold py-3 px-8 rounded-full transition-colors"
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
