import BuildaaImage from "../assets/Partner/buildaa.jpg";
import CicioImage from "../assets/Partner/cicio.jpg";
import HapiImage from "../assets/Partner/hapi.jpg";
import MetabluImage from "../assets/Partner/metablu.jpg";
import ViewioImage from "../assets/Partner/viewio.jpg";
import WeavyImage from "../assets/Partner/weavy.jpg";
import VrocketImage from "../assets/Partner/vrockets.jpg";
import VirtuoImage from "../assets/Partner/virtuo.jpg";
import { useState, useEffect } from "react";


// Kp Solar, Dicio, Vnezy, VRokets, Viewlo, Megalu, Buildex, Happi, Logos & Vision, Virtuo
const Partner = () => {
  const partners = [
    { img: BuildaaImage, alt: "Buildaa" },
    { img: CicioImage, alt: "Cicio" },
    { img: HapiImage, alt: "Happi" },
    { img: MetabluImage, alt: "Metablu" },
    { img: ViewioImage, alt: "Viewio" },
    { img: WeavyImage, alt: "Weavy" },
    { img: VrocketImage, alt: "VRokets" },
    { img: VirtuoImage, alt: "Virtuo" },
  ];

  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000); // Change focus every 3 seconds
    focusedIndex==0?true:false
    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <>
      {/* <section className="partner-section bg-white py-8 px-5 text-center overflow-hidden"> */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-10">
          Our Top Partners
        </h2>
        <p className="text-base text-gray-700 mb-10 max-w-2xl mx-auto">
          We collaborate with leading brands to bring you the best solutions in the industry.
        </p> */}
        {/* <div className="relative max-w-6xl mx-auto">
          <div className="flex animate-marquee whitespace-nowrap">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className={`min-w-[120px] mx-4 flex flex-col items-center transition-transform duration-500 cursor-pointer ${
                  focusedIndex === (index % partners.length) ? "scale-200 " : "scale-100"
                } hover:scale-200`}
              >
                <img
                  src={partner.img}
                  alt={partner.alt}
                  className={`w-[90px] h-[60px] object-contain mb-2 mix-blend-multiply filter  ${
                    focusedIndex === (index % partners.length) || "hover:grayscale-0"
                      ? "grayscale-0"
                      : "grayscale"
                  } transition-all duration-300`}
                />
                <span className="sr-only">{partner.alt}</span>
              </div>
            ))}
          </div>
        </div> */}
      {/* </section> */}
   
      {/* <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style> */}
    </>
  );
};

export default Partner;