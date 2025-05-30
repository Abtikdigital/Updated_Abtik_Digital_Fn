import { useState, useEffect, useRef } from "react";
import "../styles/Swiper.css";

// Import partner images
import AdhyaksharaImg from "../assets/Partner/Adhyakshara.png";
import AlankritaImg from "../assets/Partner/Alankrita.png";
import EcobreezeImg from "../assets/Partner/Ecobreeze.png";
import HinglajoverseasImg from "../assets/Partner/Hinglajoverseas.png";
import HrImg from "../assets/Partner/Hr.png";
import IppysImg from "../assets/Partner/Ippys.png";
import LamisaranaconstructionImg from "../assets/Partner/Lamisaranaconstruction.png";
import LifesigninfotechImg from "../assets/Partner/Lifesigninfotech.png";
import NexatranmissionImg from "../assets/Partner/Nexatranmission.png";
import PrakasheassociatesImg from "../assets/Partner/Prakasheassociates.png";

const IconCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const partners = [
    { id: 1, name: "Adhyakshara", image: AdhyaksharaImg },
    { id: 2, name: "Alankrita", image: AlankritaImg },
    { id: 3, name: "Ecobreeze", image: EcobreezeImg },
    { id: 4, name: "Hinglajoverseas", image: HinglajoverseasImg },
    { id: 5, name: "Hr", image: HrImg },
    { id: 6, name: "Ippys", image: IppysImg },
    { id: 7, name: "Lamisaranaconstruction", image: LamisaranaconstructionImg },
    { id: 8, name: "Lifesigninfotech", image: LifesigninfotechImg },
    { id: 9, name: "Nexatranmission", image: NexatranmissionImg },
    { id: 10, name: "Prakasheassociates", image: PrakasheassociatesImg },
  ];

  // Handle auto sliding logic
  const startAutoSlide = () => {
    if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
    autoSlideIntervalRef.current = setInterval(() => {
      handleNext();
    }, 2500);
  };

  const stopAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % partners.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleManualClick = (index: number) => {
    if (isTransitioning || index === activeIndex) return;
    stopAutoSlide(); // pause auto slide
    setActiveIndex(index);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);

    // Restart auto slide after 3s
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 2000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const getVisibleCardIndexes = () => {
    const num = partners.length;
    const prev = activeIndex === 0 ? num - 1 : activeIndex - 1;
    const next = activeIndex === num - 1 ? 0 : activeIndex + 1;
    return { prev, active: activeIndex, next };
  };

  const { prev, active, next } = getVisibleCardIndexes();

  return (
    <div className="relative w-full md:max-w-6xl mx-auto px-4 py-6">
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center space-x-4 transition-all duration-500 flex-col md:flex-row">
          {[prev, active, next].map((index) => {
            const isActive = index === active;
            return (
              <div
                key={partners[index].id}
                onClick={() => handleManualClick(index)}
                className={`cursor-pointer rounded-lg transition-all duration-500 ease-in-out transform ${
                  isActive
                    ? "scale-100 z-20 opacity-100"
                    : "scale-90 blur-sm opacity-70 z-10"
                }`}
              >
                <div className="h-40 md:h-52 w-40 md:w-52 flex items-center justify-center relative transition-all">
                  <img
                    src={partners[index].image}
                    alt={partners[index].name}
                    className="max-h-40 max-w-full object-contain transition-all"
                  />
                  <span className="absolute bottom-4 text-white font-bold text-sm sm:text-base transition-all">
                    {partners[index].name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex ? "bg-gray-800 w-6" : "bg-gray-300 w-3"
            }`}
            onClick={() => handleManualClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IconCarousel;
