import Mainlayout from "../layout/Mainlayout";
import WhySeoImportantImage from "../assets/SeoService/WhySeoImportant.jpg";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import { useDispatch } from "react-redux";

const SeoService = () => {
  const disp = useDispatch();
  const handleOpenGetQuote = () => {
    disp({ type: "open" });
  };
  const seoMatters = [
    "Over 90% of online experiences begin with a search engine.",
    "Top-ranking websites get the majority of clicks and traffic.",
    "SEO builds trust, credibility, and brand authority over time.",
    "Organic traffic has better conversion rates than paid ads.",
    "SEO brings long-term, sustainable growth to your business.",
  ];

  // const happyClients = [
  //   {
  //     title: `"Our organic traffic grew by 300% within six months thanks to their SEO work!"`,
  //     description: "- GreenTech Innovations",
  //   },
  //   {
  //     title: `"From page 5 to page 1 on Google — incredible transformation!"`,
  //     description: "- Urban Realty Group",
  //   },
  // ];

  const seoAccelerates = [
    {
      title: "Higher Rankings",
      description:
        "Appear at the top of Google search results for your keywords.",
    },
    {
      title: "More Website Traffic",
      description:
        "Drive consistent, high-quality visitors who are ready to buy.",
    },
    {
      title: "Increased Revenue",
      description:
        "Turn visitors into loyal customers and grow your bottom line.",
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
              SEO
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
        <div
        className="w-full"
        style={{
          background: `
              radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
              #0F172A
            `,
        }}
        >
          {/* Hero */}
          <section className="text-center px-6 md:px-16 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                SEO Services That Drive Real Results
              </h1>
              <p className="text-lg md:text-xl">
                Boost your online visibility and grow your business with expert
                SEO strategies.
              </p>
            </div>
          </section>

          {/* What is SEO */}
          <section className="text-white px-6 md:px-16 py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                What is SEO?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                SEO (Search Engine Optimization) is the process of optimizing
                your website to rank higher on search engines like Google. It
                involves enhancing your site’s content, structure, keywords, and
                backlinks to attract organic traffic and customers — all without
                paying for ads.
              </p>
            </div>
          </section>

          {/* Why SEO is Important */}
          <section className=" text-white px-6 md:px-16 py-16">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <img
                src={WhySeoImportantImage}
                alt="SEO Strategy Illustration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  Why SEO Matters for Your Business
                </h2>
                <ul className="list-disc list-inside text-white text-lg leading-relaxed space-y-3">
                  {seoMatters.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Happy Clients */}
        {/* <section className="bg-white text-black px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Clients We've Helped Grow
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Our SEO strategies have helped businesses rank higher, increase
              organic traffic, and generate more leads. We’re proud to partner
              with brands across industries to deliver real, measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {happyClients.map((client, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-xl w-64 shadow-md text-left"
                >
                  <p className="text-gray-700 text-sm">{client.title}</p>
                  <p className="mt-4 font-semibold text-[#f56015] text-sm">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* SEO Accelerates Growth */}
        <section className="bg-white text-black px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              How SEO Accelerates Business Growth
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              SEO puts your brand in front of the people who are actively
              searching for your products or services. It drives targeted,
              high-intent traffic that converts into paying customers — building
              a strong foundation for lasting business success.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {seoAccelerates.map((item, index) => (
                <div key={index} className="p-6 rounded-xl shadow-md bg-white">
                  <h3 className="font-semibold text-xl mb-3 text-[#f56015]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0F172A] text-white text-center px-6 md:px-16 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="text-lg mb-8">
              Let’s create a powerful SEO strategy that drives more traffic and
              sales to your business.
            </p>
            <button
              className="bg-[#f56015] hover:bg-[#d14e10] text-white cursor-pointer  font-bold py-3 px-8 rounded-full  transition-colors"
              onClick={handleOpenGetQuote}
            >
              Schedule a Free SEO Consultation
            </button>
          </div>
        </section>
      </div>
    </Mainlayout>
  );
};

export default SeoService;
