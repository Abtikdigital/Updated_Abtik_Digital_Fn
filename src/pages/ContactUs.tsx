import { useForm } from "react-hook-form";
import { handleAddContact } from "../apis/apis";
import Swal from "sweetalert2";
import { useState } from "react";
import Mainlayout from "../layout/Mainlayout";
import "../styles/Contact.css";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleContactSubmit = async (formData: any) => {
    try {
      setIsLoading(true);
      const res = await handleAddContact(formData);
      if (res?.status === 201) {
        Swal.fire({
          title: "Thank You for Contacting",
          icon: "success",
          confirmButtonColor: "#f56015",
        });
      }
    } catch (error: any) {
      if (error?.status === 403 || error?.status === 409) {
        Swal.fire({
          title: "Oops...",
          icon: "error",
          text: error?.response?.data?.message,
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
      <section className="w-full min-h-screen bg-[#0F172A]    ">
        <div
          className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0"
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
              Contact Us
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
        {/* conatct Form */}
        <div className="w-full flex justify-center items-center px-6 md:px-16 py-10"
          style={{
            background: `
          radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
          radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
          #0F172A
        `,
          }}
        >
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 md:p-8 animate-bounceIn">
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
                    {errors.name.message as string}
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
                    {errors.email.message as string}
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
                  placeholder="Enter your number"
                />
                {errors?.number && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.number.message as string}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-[#f56015]">*</span>
                </label>
                <textarea
                  rows={4}
                  {...register("message", {
                    required: "* Message is required",
                  })}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-y focus:ring-2 focus:ring-[#f56015] focus:outline-none"
                  placeholder="Write your message..."
                ></textarea>
                {errors?.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message as string}
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
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full  bg-[#0F172A] px-6 md:px-16 py-10"
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
        <div className="w-full h-[70vh] rounded-xl  shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4045673256455!2d72.5125040743684!3d23.04562491546931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f8ee324da2af39%3A0xf04a9f002154b683!2sAbtik%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1746261865736!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true} // Corrected here
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // Corrected here
          />
        </div>
      </div>
    </Mainlayout>
  );
};

export default ContactUs;
