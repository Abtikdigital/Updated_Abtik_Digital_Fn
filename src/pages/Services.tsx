import { useState } from "react";
import WebDevelopmentImage from "../assets/OurServices/devlopment.jpeg";
import DigitalMarketingImage from "../assets/OurServices/digitalMarketing.jpeg";
import DesignImage from "../assets/OurServices/design.jpeg";

const serviceDetails = [
  {
    title: "Designing",
    image: DesignImage,
    services: [
      "Logo Design",
      "Brochures",
      "Visiting Cards",
      "Letterheads",
      "UI/UX Design",
      "And More...",
    ],
  },
  {
    title: "Marketing",
    image: DigitalMarketingImage,
    services: [
      "Social Media Marketing",
      "SEO (Search Engine Optimization)",
      "Paid Advertising",
      "Brand Awareness",
      "User Engagement Campaigns",
    ],
  },
  {
    title: "Development",
    image: WebDevelopmentImage,
    services: [
      "Responsive Websites",
      "Web & Mobile Applications",
      "Landing Pages",
      "Custom Digital Products",
    ],
  },
];

const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-12">
      <h2 className="font-semibold text-3xl md:text-4xl text-center mb-10">
        Our Services
      </h2>

      <div className="flex flex-col lg:flex-row justify-center gap-10 md:px-20">
        {serviceDetails.map((item, idx) => {
          const isFlipped = flippedIndex === idx;

          return (
            <div
              key={idx}
              className="relative w-full lg:w-1/3 h-80 group [perspective:1000px] cursor-pointer will-change-transform"
              onClick={() => handleFlip(idx)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                } group-hover:[transform:rotateY(180deg)]`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl bg-white [backface-visibility:hidden]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-[#0F172A] bg-opacity-60 text-white text-center p-4 text-xl font-semibold">
                    {item.title}
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rounded-xl bg-[#ffe8db] p-6 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center antialiased">
                  <h3 className="text-xl font-semibold mb-4">{item.title} Services</h3>
                  <ul className="text-sm text-left space-y-2">
                    {item.services.map((service, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#f56015]">✔</span> {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
