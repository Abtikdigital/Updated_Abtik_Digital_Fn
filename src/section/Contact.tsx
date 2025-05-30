import { useEffect, useState, ChangeEvent, useRef } from "react";
import MacImage from "../assets/ContactUs/MacOrangeImage.png";
import LogoImage from "../assets/logo/AbtikDigitalwhite.png";
import { handleAddContact } from "../apis/apis";
import Swal from "sweetalert2";
import gsap from "gsap";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const validate = () => {
    let isValid = true;
    let newErrors = { name: "", email: "", number: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "* Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "* Email is required.";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "* Invalid email address.";
      isValid = false;
    }

    if (!formData.number.trim()) {
      newErrors.number = "* Phone number is required.";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.number)) {
      newErrors.number = "* Phone number must be 10 digits.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "* Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      let res = await handleAddContact(formData);
      if (res?.status === 201) {
        Swal.fire({
          icon: "success",
          text: res?.data?.message,
          confirmButtonColor: "#f56015",
          draggable: true,
        });
        setFormData({ name: "", email: "", number: "", message: "" });
      }
    } catch (error: any) {
      if (error?.response?.status === 400) {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#f56015",
          text: error?.response?.data?.message,
          draggable: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "An error occurred while submitting your application",
          draggable: true,
        });
      }
      console.error(error);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#z-line1",
      { strokeDashoffset: 1500 },
      { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" }
    )
      .fromTo(
        "#z-line2",
        { strokeDashoffset: 1450 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" },
        "-=1.0"
      )
      .fromTo(
        "#z-line3",
        { strokeDashoffset: 1500 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" },
        "-=1.0"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const SVG_WIDTH = 1920;
  const SVG_HEIGHT = 1080;
  const STROKE_WIDTH = 35;
  const DURATION = 4; // seconds
  const CORNER_RADIUS = 10;
  const HORIZONTAL_LENGTH = SVG_WIDTH * 0.4;
  const VERTICAL_LENGTH = SVG_HEIGHT * 0.5;
  const FINAL_HORIZONTAL_LENGTH = SVG_WIDTH * 0.8;
  const OFFSETS = {
    first: -50,
    second: 0,
    third: 50,
  };
  const COLORS = {
    first: '#9932CC',
    second: '#FFA400',
    third: '#AA336A',
  };

  const firstPathRef = useRef<SVGPathElement>(null);
  const secondPathRef = useRef<SVGPathElement>(null);
  const thirdPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const createPath = (horizLength: number, offset: number): string => {
      const startX = SVG_WIDTH;
      const startY = SVG_HEIGHT * 0.3 + offset;
      const midX = startX - horizLength;
      const midY = startY + VERTICAL_LENGTH;
      const endX = midX - FINAL_HORIZONTAL_LENGTH;

      return `M${startX},${startY} H${midX + CORNER_RADIUS} A${CORNER_RADIUS},${CORNER_RADIUS} 0 0 0 ${midX},${startY + CORNER_RADIUS} V${midY - CORNER_RADIUS} A${CORNER_RADIUS},${CORNER_RADIUS} 0 0 0 ${midX - CORNER_RADIUS},${midY} H${endX}`;
    };

    const animatePath = (path: SVGPathElement | null, horizLength: number, offset: number) => {
      if (path) {
        path.setAttribute('d', createPath(horizLength, offset));
        gsap.set(path, { drawSVG: '0%' });
        gsap.to(path, { drawSVG: '100%', duration: DURATION, ease: 'linear' });
      }
    };

    // Register DrawSVGPlugin
    const copywindow: any = window
    gsap.registerPlugin(copywindow?.DrawSVGPlugin);

    // Animate all three paths
    animatePath(firstPathRef.current, HORIZONTAL_LENGTH, OFFSETS.first);
    animatePath(secondPathRef.current, SVG_WIDTH * 0.425, OFFSETS.second);
    animatePath(thirdPathRef.current, SVG_WIDTH * 0.4475, OFFSETS.third);

    return () => {
      gsap.killTweensOf([firstPathRef.current, secondPathRef.current, thirdPathRef.current]);
    };
  }, []);



  return (
    <div className="relative bg-[#0F172A]">
      <div className=" hidden absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} preserveAspectRatio="none" className="w-full h-full">
          <g id="firstLine">
            <path
              ref={firstPathRef}
              stroke={COLORS.first}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              fill="none"
            />
          </g>
          <g id="secondLine">
            <path
              ref={secondPathRef}
              stroke={COLORS.second}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              fill="none"
            />
          </g>
          <g id="thirdLine">
            <path
              ref={thirdPathRef}
              stroke={COLORS.third}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>
      </div>

      <section
        id="section-one"
        className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 md:px-12 lg:px-16"
      >
        <div className=" w-full mx-auto z-10">
          {/* Desktop View */}
          <div className="hidden md:block relative w-full">
            <img
              src={MacImage}
              alt="Macbook"
              className="w-full h-[70vh] lg:h-screen lg:object-contain"
            />

            {/* Top-left Card with Location, Phone, and Hours */}
            <div className="absolute top-[30%] sm:top-[32%] lg:top-[35%] left-2 sm:-left-3 lg:left-6 bg-white shadow-lg rounded-xl px-4 sm:px-5 lg:px-6 py-3 sm:py-4 z-20 w-44 sm:w-48 ">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-gray-600 min-w-4" />
                  <p className="text-xs text-gray-600 "> <a href="https://maps.app.goo.gl/UsfzUZDpPs545amh7">

                    313, Patel Ave, SG Highway Ahmedabad,
                    Gujarat
                  </a>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="text-gray-600 min-w-4" />
                  <p className="text-xs text-gray-600"> <a href="tel:+91 89281 38434  " className="hover:text-[#f56015] hover:underline"> (+91) 89281 38434</a> </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={14} className="text-gray-600 min-w-4" />
                  <p className="text-xs text-gray-600">Mon-Fri, 9 AM - 5 PM</p>
                </div>
              </div>
            </div>

            {/* Top-right Logo (Half Displayed) */}
            <div className="absolute  z-20 right-[2%]  top-[35%] lg:right-[8%]">
              <img
                src={LogoImage}
                alt="Logo"
                className="w-30 h-30  object-contain"
              />
            </div>

            {/* Form Centered in MacBook */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-[75%] sm:h-[80%] lg:h-[80%] ">
                <form
                  onSubmit={handleSubmit}
                  className="absolute overflow-auto min-h-fit  sm:h-[70%] lg:h-auto  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 h-full w-[50%] sm:w-[45%] lg:w-[40%]    rounded-3xl flex flex-col justify-center space-y-3 sm:space-y-4"
                >
                  <InputFields
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                  />
                </form>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden space-y-6">

            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={LogoImage}
                alt="Logo"
                className="w-20 h-auto object-contain"
              />
            </div>
            {/* Contact Info Card */}
            <div className="bg-white shadow-lg rounded-xl px-4 py-4 w-full max-w-md mx-auto">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-gray-600" />
                  <p className="text-xs text-gray-600"> <a href="https://maps.app.goo.gl/UsfzUZDpPs545amh7">

                    313, Patel Ave, SG Highway Ahmedabad,
                    Gujarat
                  </a></p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="text-gray-600" />
                  <p className="text-xs text-gray-600"> <a href="tel:+91 89281 38434  " className="hover:text-[#f56015] hover:underline"> (+91) 89281 38434</a></p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={14} className="text-gray-600" />
                  <p className="text-xs text-gray-600">Mon-Fri, 9 AM - 5 PM</p>
                </div>
              </div>
            </div>


            {/* Form */}
            <div className="bg-[#f56015] bg-opacity-80 backdrop-blur-md p-4 rounded-xl shadow-xl w-full max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputFields
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FormData {
  name: string;
  email: string;
  number: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  number: string;
  message: string;
}

const InputFields = ({
  formData,
  handleChange,
  errors,
}: {
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors: Errors;
}) => (
  <>
    <Input
      type="text"
      name="name"
      value={formData.name}
      placeholder="Enter Your Name"
      onChange={handleChange}
      error={errors.name}

    />
    <Input
      type="email"
      name="email"
      value={formData.email}
      placeholder="Enter your email"
      onChange={handleChange}
      error={errors.email}
    />
    <Input
      type="tel"
      name="number"
      value={formData.number}
      placeholder="Enter your mobile number"
      onChange={handleChange}
      error={errors.number}
    />
    <div>
      <textarea
        draggable="false"

        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full p-2 px-3 resize-none rounded-lg border-2 border-white text-white font-medium bg-black bg-opacity-30 focus:outline-none text-xs"
      />
      {errors.message && (
        <p className="text-white text-xs mt-1">{errors.message}</p>
      )}
    </div>
    <div className="text-center">
      <button
        type="submit"
        className="py-2 px-6 bg-[black] hover:bg-[#000000d8]  border-2 border-white text-white font-semibold cursor-pointer transition rounded-full text-xs "
      >
        Send
      </button>
    </div>
  </>
);

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}: {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 px-3 rounded-lg text-white border-2 border-white font-medium bg-black bg-opacity-30 focus:outline-none text-xs"
    />
    {error && <p className="text-white text-xs mt-1">{error}</p>}
  </div>
);

export default ContactUs;