import { useForm, SubmitHandler } from "react-hook-form";
// import { handleAddContact } from "../apis/apis";
import Swal from "sweetalert2";
import { useState } from "react";
import Mainlayout from "../layout/Mainlayout";
import "../styles/Contact.css";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

// Define form data interface
interface ContactFormData {
  name: string;
  email: string;
  number: string;
  message: string;
}

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

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
  const [headerLeftRef, headerLeftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [headerRightRef, headerRightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleContactSubmit: SubmitHandler<ContactFormData> = async (
    formData
  ) => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/contactApis", formData);
      if (res?.status === 201) {
        Swal.fire({
          title: "Thank You for Contacting",
          icon: "success",
          confirmButtonColor: "#f56015",
        });
      }
    } catch (error: any) {
      if (error?.status === 403 || error?.status === 409||error?.status==400) {
        Swal.fire({
          title: "Oops...",
          icon: "error",
          text: error?.response?.data?.message||"Error While Inserting Data",
          confirmButtonColor: "#f56015",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Mainlayout>
      {/* Contact Form Section */}
      <section className="w-full min-h-screen bg-[#0F172A]">
     <div
  className="relative flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0"
  style={{
    background: `
      radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
      radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
      #0F172A
    `,
  }}
>
  {/* SVG Line Animation for Desktop */}
  <div className="hidden lg:block absolute inset-0 top-[20%] w-full h-full overflow-hidden pointer-events-none z-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M1920,280 L960,280 Q940,280 940,300 L940,580 Q940,600 920,600 L0,600"
        fill="none"
        stroke="#a33cc4"
        strokeWidth="32"
        strokeDasharray="2800"
        strokeDashoffset="2800"
        className="animate-[drawCurvedLine_3s_ease-in-out_0.5s_forwards]"
      />
      <path
        d="M1920,340 L900,340 Q880,340 880,360 L880,640 Q880,660 860,660 L0,660"
        fill="none"
        stroke="#f9a825"
        strokeWidth="32"
        strokeDasharray="2800"
        strokeDashoffset="2800"
        className="animate-[drawCurvedLine_3s_ease-in-out_1s_forwards]"
      />
      <path
        d="M1920,400 L840,400 Q820,400 820,420 L820,700 Q820,720 800,720 L0,720"
        fill="none"
        stroke="#9c274f"
        strokeWidth="32"
        strokeDasharray="2800"
        strokeDashoffset="2800"
        className="animate-[drawCurvedLine_3s_ease-in-out_1.5s_forwards]"
      />
    </svg>
  </div>

  {/* Mobile SVG Curved Lines */}
  <div className="block sm:hidden absolute top-[20%] w-full h-full overflow-hidden pointer-events-none z-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 414 896"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M414,180 L207,180 Q197,180 197,190 L197,350 Q197,360 187,360 L0,360"
        fill="none"
        stroke="#a33cc4"
        strokeWidth="32"
        strokeDasharray="800"
        strokeDashoffset="800"
        className="animate-[drawCurvedLine_2.5s_ease-in-out_0.5s_forwards]"
      />
      <path
        d="M414,240 L187,240 Q177,240 177,250 L177,410 Q177,420 167,420 L0,420"
        fill="none"
        stroke="#f9a825"
        strokeWidth="32"
        strokeDasharray="800"
        strokeDashoffset="800"
        className="animate-[drawCurvedLine_2.5s_ease-in-out_1s_forwards]"
      />
      <path
        d="M414,300 L167,300 Q157,300 157,310 L157,470 Q157,480 147,480 L0,480"
        fill="none"
        stroke="#9c274f"
        strokeWidth="32"
        strokeDasharray="800"
        strokeDashoffset="800"
        className="animate-[drawCurvedLine_2.5s_ease-in-out_1.5s_forwards]"
      />
    </svg>
  </div>

  {/* Left Side - Heading */}
  <motion.div
    ref={headerLeftRef}
    initial="hidden"
    animate={headerLeftInView ? "visible" : "hidden"}
    variants={leftFadeInVariants}
    className="w-full md:w-1/2 flex justify-center md:justify-start items-center z-10"
  >
    <h2 className="max-w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
      Contact Us
    </h2>
  </motion.div>

  {/* Right Side - Image */}
  <motion.div
    ref={headerRightRef}
    initial="hidden"
    animate={headerRightInView ? "visible" : "hidden"}
    variants={rightFadeInVariants}
    className="w-full md:w-1/2 flex justify-center items-center z-10"
  >
    <img
      src={IphoneImage}
      alt="iPhone Preview"
      className="hover:scale-105 cursor-pointer transition-transform duration-500 floating-icon w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
    />
  </motion.div>

  {/* Inline Animation Styles */}
  <style>{`
    @keyframes drawCurvedLine {
      to {
        stroke-dashoffset: 0;
      }
    }

    .floating-icon {
      animation: floating-icon 3s ease-in-out infinite;
    }
  `}</style>
</div>

        {/* Contact Form */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={centerFadeInVariants}
          className="w-full flex justify-center items-center px-6 md:px-16 py-10"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Get in Touch with{" "}
                <span className="text-[#f56015]">Abtik-Digital</span>
              </h2>
              <p className="text-sm text-gray-600">
                We'd love to hear from you! Whether you have a question, project
                idea, or just want to connect — fill out the form below.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(handleContactSubmit)}
              className="space-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-[#f56015]">*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "* Name is required" })}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-[#f56015] focus:outline-none"
                  placeholder="Enter your name"
                />
                {errors?.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address <span className="text-[#f56015]">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "* Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "* Please enter a valid email address",
                    },
                  })}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-[#f56015] focus:outline-none"
                  placeholder="Enter your email"
                />
                {errors?.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Number <span className="text-[#f56015]">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  inputMode="numeric"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) e.preventDefault();
                  }}
                  {...register("number", {
                    required: "* Contact number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "* Please enter a valid 10-digit number",
                    },
                  })}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-[#f56015] focus:outline-none"
                  placeholder="Enter your contact number"
                />
                {errors?.number && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.number.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-[#f56015]">*</span>
                </label>
                <textarea
                  rows={5}
                  {...register("message", {
                    required: "* Message is required",
                  })}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-y focus:ring-2 focus:ring-[#f56015] focus:outline-none"
                  placeholder="Enter your message"
                ></textarea>
                {errors?.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#f56015] text-white font-semibold rounded-full hover:bg-[#d14e10] transition-all disabled:bg-[#fbd1b7] disabled:cursor-not-allowed flex justify-center items-center"
              >
                {!isLoading ? (
                  "Send Message"
                ) : (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.div
        ref={mapRef}
        initial="hidden"
        animate={mapInView ? "visible" : "hidden"}
        variants={centerFadeInVariants}
        className="w-full bg-[#0F172A] px-6 md:px-16 py-10"
        style={{
          background: `
            radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
            radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
            #0F172A
          `,
        }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Our Location
        </h3>
        <div className="w-full h-[400px] rounded-xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4045673256255!2d72.51250407384686!3d23.045624915470377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f8ee324da2af39%3A0xf04a9f002154b683!2sAbtik%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1750505291870!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </Mainlayout>
  );
};

export default ContactUs;
