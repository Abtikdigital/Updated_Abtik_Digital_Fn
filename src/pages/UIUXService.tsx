import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import UiuxMatterImage from "../assets/Services/uiux.jpg"
import { useDispatch } from "react-redux";
const UIUXService = () => {
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
              UIUX
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
                UI/UX Design Services that Transform User Experience
              </h1>
              <p className="text-lg md:text-xl">
                Enhance your customer’s journey with beautiful, functional, and
                intuitive UI/UX designs.
              </p>
            </div>
          </section>

          {/* What is UI/UX Design */}
          <section className=" text-white  px-6 md:px-16 py-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                What is UI/UX Design?
              </h2>
              <p className="text-white text-lg leading-relaxed">
                UI (User Interface) and UX (User Experience) design are
                essential for creating websites and applications that are not
                only visually appealing but also easy and enjoyable to use. UI
                design focuses on the visual aspects of an interface, while UX
                design focuses on the overall experience and interaction a user
                has with the product. Together, they ensure your product meets
                both aesthetic and functional needs.
              </p>
            </div>
          </section>

          {/* Why UI/UX Design is Important */}
          <section className="  px-6 md:px-16 py-10">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <img
                src={UiuxMatterImage}
                alt="UI/UX Design Illustration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                  Why UI/UX Design Matters
                </h2>
                <ul className="list-disc list-inside text-white text-lg leading-relaxed space-y-3">
                  <li>Improves user satisfaction and reduces bounce rates.</li>
                  <li>Increases customer engagement and retention.</li>
                  <li>Boosts brand credibility and trust.</li>
                  <li>
                    Helps users complete tasks more easily and efficiently.
                  </li>
                  <li>
                    Enhances the overall value of your product and increases
                    conversions.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Benefits of UI/UX Design */}
        <section className=" px-6 md:px-16 py-10 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              How UI/UX Design Helps Your Business
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Effective UI/UX design can significantly improve your product’s
              usability, increase user satisfaction, and ultimately boost your
              business's success. When users have a seamless and enjoyable
              experience, they are more likely to engage with your brand and
              become loyal customers.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-10 pb-2">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                  Improved User Retention
                </h3>
                <p className="text-gray-600">
                  Easy-to-use interfaces and satisfying experiences keep users
                  coming back.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                  Enhanced Brand Perception
                </h3>
                <p className="text-gray-600">
                  Well-designed products give users a positive perception of
                  your brand.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-[#f56015]">
                  Increased Conversions
                </h3>
                <p className="text-gray-600">
                  Great UI/UX design leads to higher conversion rates and more
                  revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Clients Section */}
        {/* <section className="  px-6 md:px-16 py-10 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Clients Who Love Our UI/UX Designs
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our clients have seen impressive improvements in user engagement,
              satisfaction, and retention due to our strategic and creative
              UI/UX designs. We take pride in creating designs that not only
              look beautiful but also deliver results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pb-2">
              <div className="bg-gray-100 p-6 rounded-lg w-72 shadow-md">
                <p className="text-gray-700">
                  "Our website design increased engagement by 50%, and our users
                  are happier than ever!"
                </p>
                <p className="mt-4 font-semibold text-[#f56015]">
                  - Bloom Innovations
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg w-72 shadow-md">
                <p className="text-gray-700">
                  "The user-friendly interface boosted our customer retention
                  rates by 40%!"
                </p>
                <p className="mt-4 font-semibold text-[#f56015]">
                  - SkyTech Solutions
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Call To Action */}
        <section className=" bg-[#0F172A] text-white text-center px-6 md:px-16 py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-lg mb-8">
              Let’s create a stunning and intuitive UI/UX design that enhances
              your product and delights your users.
            </p>
            <button
              className=" cursor-pointer bg-[#f56015] hover:bg-[#d14e10] text-white font-bold py-3 px-8 rounded-full  transition-colors"
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

export default UIUXService;
