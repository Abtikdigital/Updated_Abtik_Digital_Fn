import { useState, useEffect } from "react";
import MacbookMockup from "../assets/Events/Macbook.png";
import Slider1 from "../assets/Events/Image1.jpeg";
import Slider2 from "../assets/Events/Image2.jpeg";
import Slider3 from "../assets/Events/Frame 1000007515.jpg"
import Slider4 from "../assets/Events/Frame 1000007516.jpg"
import Slider5 from "../assets/Events/Frame 1000007518.jpg"
// import FrontImage from "../assets/Events/FrontImage.jpeg"
const sliderImages = [Slider1, Slider2,Slider3,Slider4,Slider5];

const Events = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="flex  flex-col-reverse lg:flex-row items-center justify-center px-4 py-10 md:px-16 gap-10">
      {/* MacBook Mockup with Slider */}
      <div className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px]">
        <img src={MacbookMockup} alt="Macbook" className="w-full h-auto" />

        {/* Slider positioned over the Mac screen */}
        <div className="absolute top-[4%] left-[10%] w-[80%] h-[88%] sm:top-[5%] sm:left-[12%] sm:w-[76%] sm:h-[87%] overflow-hidden rounded-lg shadow-lg">
          <img
            src={sliderImages[current]}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3.5 h-3.5 cursor-pointer rounded-full ${
                current === index ? "bg-[#f56015] scale-110" : "bg-gray-400"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full max-w-xl text-center lg:text-left">
        <label className="text-4xl font-bold  text-gray-800">Our Events</label>
        <h2 className="text-2xl md:text-2xl font-semibold text-whi mt-2 text-gray-800">Building Brands & Connecting Ideas</h2>
        <h3 className="text-xl md:text-xl font-semibold mt-2 text-gray-600">Join our community events to learn, share, and grow.</h3>
      </div>
    </div>
  );
};

export default Events;
