import "../styles/Header.css";
import { useState, useRef, useEffect } from "react";
import { Play, Square } from "lucide-react";
import MobileImage from "../assets/HeroSection/HeroImage.png";
import IphoneImage from "../assets/HeroSection/iPhoneLatest.png";
import SwiperCaraousal from "../pages/SwiperCaraousal";
import IntroVideo from "../assets/HeroSection/intoVideo.mp4";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Animation variants for fade-in with explicit typing
  const leftFadeInVariants: Variants = {
    hidden: { opacity: 0, y: 50, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const rightFadeInVariants: Variants = {
    hidden: { opacity: 0, y: 50, x: 20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const centerFadeInVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // Intersection Observer hooks for sections
  const [sectionOneLeftRef, sectionOneLeftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [sectionOneRightRef, sectionOneRightInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [sectionTwoRef, sectionTwoInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [sectionThreeLeftRef, sectionThreeLeftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [sectionThreeRightRef, sectionThreeRightInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Initialize ScrollTrigger animations after component mounts
  useEffect(() => {
    const sectionOneLines = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-one",
        start: "top 40%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once: true,
        markers: false,
      },
    });

    sectionOneLines
      .fromTo(
        "#section-one-line1",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" }
      )
      .fromTo(
        "#section-one-line2",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#section-one-line3",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" },
        "-=0.5"
      );

    const sectionTwoLines = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-two",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none none",
        once: true,
        markers: false,
      },
    });

    sectionTwoLines
      .fromTo(
        "#line1",
        { strokeDasharray: "0,1000" },
        { strokeDasharray: "1000,0", duration: 0.9, ease: "power2.out" }
      )
      .fromTo(
        "#line2",
        { strokeDasharray: "0,1000" },
        { strokeDasharray: "1000,0", duration: 0.9, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#line3",
        { strokeDasharray: "0,1000" },
        { strokeDasharray: "1000,0", duration: 0.9, ease: "power2.out" },
        "-=0.5"
      );

    const sectionThreeLines = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-three",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none none",
        once: true,
        markers: false,
      },
    });

    sectionThreeLines
      .fromTo(
        "#section-three-line1",
        { strokeDasharray: "0,900" },
        { strokeDasharray: "900,0", duration: 0.9, ease: "power2.out" }
      )
      .fromTo(
        "#section-three-line2",
        { strokeDasharray: "0,900" },
        { strokeDasharray: "900,0", duration: 0.9, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#section-three-line3",
        { strokeDasharray: "0,900" },
        { strokeDasharray: "900,0", duration: 0.9, ease: "power2.out" },
        "-=0.5"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const disp = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpenGetQuote = () => {
    disp({ type: "open" });
  };

  // Mouse drag
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - lastPos.current.x;
      const deltaY = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };
      setRotation((prev) => ({
        x: Math.max(Math.min(prev.x - deltaY * 0.05, 90), -90),
        y: prev.y + deltaX * 0.05,
      }));
    };
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Touch drag
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastPos.current.x;
      const deltaY = touch.clientY - lastPos.current.y;
      lastPos.current = { x: touch.clientX, y: touch.clientY };
      setRotation((prev) => ({
        x: Math.max(Math.min(prev.x - deltaY * 0.5, 90), -90),
        y: prev.y + deltaX * 0.5,
      }));
    };
    const handleTouchEnd = () => {
      isDragging.current = false;
    };
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        isOpen && setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleStopClick = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <>
      <div className="relative z-0">
        {/* Section One */}
        <div
          id="section-one"
          className="md:min-h-screen flex flex-col md:flex-row items-center text-white px-6 py-10 md:px-16 bg-[radial-gradient(ellipse_at_top_right,_#f56015_1%,_#0F172A_40%)] z-10 relative"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* SVG Line Animation for Section One */}
          <div className="hidden lg:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none top-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1050 1050"
              className="w-full h-auto"
            >
              <path
                id="section-one-line1"
                d="M1200,200 L600,200 Q580,200 580,230 L580,1000"
                fill="none"
                stroke="#a33cc4"
                strokeWidth="18"
                strokeDasharray="1400"
                strokeDashoffset="1400"
              />
              <path
                id="section-one-line2"
                d="M1200,240 L540,240 Q520,240 520,270 L520,1000"
                fill="none"
                stroke="#f9a825"
                strokeWidth="18"
                strokeDasharray="1400"
                strokeDashoffset="1400"
              />
              <path
                id="section-one-line3"
                d="M1200,280 L480,280 Q460,280 460,310 L460,1000"
                fill="none"
                stroke="#9c274f"
                strokeWidth="18"
                strokeDasharray="1400"
                strokeDashoffset="1400"
              />
            </svg>
          </div>

          {/* Left Section */}
          <motion.div
            ref={sectionOneLeftRef}
            initial="hidden"
            animate={sectionOneLeftInView ? "visible" : "hidden"}
            variants={leftFadeInVariants}
            className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 mb-10 md:mb-0 z-10"
          >
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Abtik Digital
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
                Crafting Innovative Digital Futures
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white/70">
                Transforming Ideas into Seamless Solutions
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                className="bg-[#f56015] cursor-pointer hover:bg-[#d14e10] text-white rounded-full px-6 py-2 text-sm sm:text-base transition z-10"
                onClick={handleOpenGetQuote}
              >
                Get A Quote
              </button>
              <button
                onClick={handlePlayClick}
                className="bg-white cursor-pointer border-2 border-[#d14e10] text-black rounded-full px-6 py-2 text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-[#f56015] hover:text-white transition z-10"
              >
                <Play className="rounded-full bg-black text-white p-1 w-6 h-6" />
                View Demo
              </button>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            ref={sectionOneRightRef}
            initial="hidden"
            animate={sectionOneRightInView ? "visible" : "hidden"}
            variants={rightFadeInVariants}
            className="w-full md:w-1/2 flex justify-center items-center md:h-screen z-10"
          >
            <div
              className={`relative bg-gray-900 rounded-[20px] shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing ${
                isPlaying ? "w-[500px] h-[250.25px]" : "w-[250px] h-[500px]"
              } transition-all duration-300`}
              style={{
                transform: isMobile
                  ? "none"
                  : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: isDragging.current
                  ? "none"
                  : "transform 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out",
                cursor: isMobile ? "default" : "grab",
              }}
              onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
                if (isMobile) return;
                isDragging.current = true;
                lastPos.current = { x: e.clientX, y: e.clientY };
              }}
              onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
                if (isMobile) return;
                const touch = e.touches[0];
                isDragging.current = true;
                lastPos.current = { x: touch.clientX, y: touch.clientY };
              }}
            >
              <div className="w-[93%] h-[95%] rounded-[15px] overflow-hidden relative">
                {!isPlaying && (
                  <img
                    src={MobileImage}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                )}
                <video
                  ref={videoRef}
                  src={IntroVideo}
                  className={`w-full h-full object-cover absolute top-0 left-0 bg-black ${
                    isPlaying ? "block" : "hidden"
                  }`}
                  loop
                  muted
                />
                {!isPlaying ? (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={handlePlayClick}
                      className="bg-black/90 text-white px-6 py-2 hover:bg-black rounded-xl cursor-pointer transition-all"
                    >
                      ▶
                    </button>
                  </div>
                ) : (
                  <div className="absolute bottom-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={handleStopClick}
                      className="bg-black/70 text-white px-5 py-2 rounded-md cursor-pointer flex items-center gap-2 hover:bg-black/90 transition-all"
                    >
                      <Square className="w-5 h-5" />
                      Stop
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Two */}
        <div
          id="section-two"
          className="flex justify-center items-center md:min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#f56015_1%,_#0F172A_30%)] px-4 py-10 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* SVG Background Lines */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 1050">
              <path
                id="line1"
                d="M580,0 L580,1000"
                fill="none"
                stroke="#a33cc4"
                strokeWidth="18"
                strokeDasharray="0,1000"
              />
              <path
                id="line2"
                d="M520,0 L520,1000"
                fill="none"
                stroke="#f9a825"
                strokeWidth="18"
                strokeDasharray="0,1000"
              />
              <path
                id="line3"
                d="M460,0 L460,1000"
                fill="none"
                stroke="#9c274f"
                strokeWidth="18"
                strokeDasharray="0,1000"
              />
            </svg>
          </div>

          {/* iPhone Mockup */}
          <motion.div
            ref={sectionTwoRef}
            initial="hidden"
            animate={sectionTwoInView ? "visible" : "hidden"}
            variants={centerFadeInVariants}
            className="relative bg-black rounded-[3.5rem] border-[12px] border-[#1c1c1e] shadow-2xl w-[90%] max-w-[320px] aspect-[9/19] md:max-w-[720px] md:aspect-[19/9] transition-all duration-500 overflow-hidden z-10"
          >
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:hidden w-24 h-6 bg-[#1c1c1e] rounded-full z-30 shadow-md" />
            <div className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-24 bg-[#1c1c1e] rounded-full z-30 shadow-md" />

            {/* Screen Content */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden p-1.5">
              <SwiperCaraousal />
            </div>
          </motion.div>
        </div>

        {/* Section Three */}
        <div
          id="section-three"
          className="relative min-h-screen px-6 py-10 md:px-16 flex flex-col md:flex-row items-center justify-between text-white bg-[radial-gradient(ellipse_at_bottom_right,_#f56015_1%,_#0F172A_30%)]"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* SVG Lines in Background */}
          <div
            className="hidden lg:block absolute inset-0 z-0 pointer-events-none"
            style={{ height: "70vh" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 1050">
              <path
                id="section-three-line1"
                d="M580,0 L580,240 Q580,270 530,270 L0,270"
                fill="none"
                stroke="#a33cc4"
                strokeWidth="18"
                strokeDasharray="0,900"
              />
              <path
                id="section-three-line2"
                d="M520,0 L520,300 Q520,330 470,330 L0,330"
                fill="none"
                stroke="#f9a825"
                strokeWidth="18"
                strokeDasharray="0,900"
              />
              <path
                id="section-three-line3"
                d="M460,0 L460,360 Q460,390 410,390 L0,390"
                fill="none"
                stroke="#9c274f"
                strokeWidth="18"
                strokeDasharray="0,900"
              />
            </svg>
          </div>

          {/* Left Side - Image */}
          <motion.div
            ref={sectionThreeLeftRef}
            initial="hidden"
            animate={sectionThreeLeftInView ? "visible" : "hidden"}
            variants={leftFadeInVariants}
            className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0 z-10"
          >
            <img
              src={IphoneImage}
              alt="iPhone Preview"
              className="w-full md:max-w-1/2"
              draggable="false"
            />
          </motion.div>

          {/* Right Side - Headings & buttons */}
          <motion.div
            ref={sectionThreeRightRef}
            initial="hidden"
            animate={sectionThreeRightInView ? "visible" : "hidden"}
            variants={rightFadeInVariants}
            className="w-full md:w-2/5 lg:max-w-[500px] flex flex-col justify-center items-center md:justify-start md:items-center text-center md:text-left space-y-6 z-10 px-4 md:px-0"
          >
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold break-words">
                Your One-Stop Creative & Digital Solution
              </h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
                Boosting Brands with Personalized Marketing & Design
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold md:text-2xl text-white/70">
                Build Market Grow.
              </h3>
            </div>
            <div className="flex flex-col items-center sm:flex-row justify-center md:justify-start gap-4 w-full">
              <button
                className="bg-[#f56015] max-w-fit cursor-pointer text-white rounded-full px-6 py-2 text-sm sm:text-base hover:bg-[#d14e10] transition"
                onClick={handleOpenGetQuote}
              >
                Get A Quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;