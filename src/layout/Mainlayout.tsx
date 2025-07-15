import Navbar from "../section/Navbar";
import Footer from "../section/Footer";
import CopyRightSection from "../section/Copyright";
import { useDispatch, useSelector } from "react-redux";
import { Headphones, X, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectGroup,
} from "../components/ui/select";
import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Helper for email validation
const isValidEmail = (email: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

// Helper for phone number validation
const isValidPhoneNumber = (phoneNumber: string) => {
  return /^[0-9]{10,15}$/.test(phoneNumber);
};

const Mainlayout = (props: any) => {
  const services = [
    { value: "web-development", label: "Web Development" },
    { value: "graphic-design", label: "Graphic Design" },
    { value: "uiux", label: "UIUX" },
    { value: "seo", label: "SEO" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "other", label: "Other" },
  ];

  const dispatch = useDispatch();
  const isGetAQuoteOpen = useSelector((state: any) => state.isGetQuoteOpen);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const [chatBotFormData, setChatBotFormData] = useState({
    name: "",
    email: "",
    service: "",
    phoneNumber: "",
  });
  const [chatBotErrors, setChatBotErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
  });
  const [chatBotStep, setChatBotStep] = useState(0);

  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const handleCloseGetQuote = () => {
    dispatch({ type: "close" });
    reset();
  };

  const onSubmit = async (formData: any) => {
    try {
      setIsDisabled(true);
      let res = await axios.post("/api/quoteApis", formData);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          text: "Your Response Has Been Recorded Successfully",
          confirmButtonColor: "#f56015",
        });
      }
    } catch (error: any) {
      if (error?.response?.status === 400 || error?.response?.status === 409) {
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
    } finally {
      handleCloseGetQuote();
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setShowFab(scrollPosition > viewportHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatBotFormData, chatBotStep]);

  const formVariants: Variants = {
    hidden: { x: "100vw", y: "100vh", opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.5, duration: 0.4 },
    },
    exit: { x: "100vw", y: "100vh", opacity: 0, scale: 0.8, transition: { duration: 0.25, ease: "easeInOut" } },
  };

  const handleChatBotSubmit = async (field: keyof typeof chatBotFormData) => {
    let hasError = false;
    const newErrors = { ...chatBotErrors };

    switch (field) {
      case "name":
        if (!chatBotFormData.name.trim()) {
          newErrors.name = "* Name is required";
          hasError = true;
        } else {
          newErrors.name = "";
        }
        break;
      case "email":
        if (!chatBotFormData.email.trim()) {
          newErrors.email = "* Email is required";
          hasError = true;
        } else if (!isValidEmail(chatBotFormData.email)) {
          newErrors.email = "* Invalid email address";
          hasError = true;
        } else {
          newErrors.email = "";
        }
        break;
      case "phoneNumber":
        if (!chatBotFormData.phoneNumber.trim()) {
          newErrors.phoneNumber = "* Phone number is required";
          hasError = true;
        } else if (!isValidPhoneNumber(chatBotFormData.phoneNumber)) {
          newErrors.phoneNumber = "* Phone number must be 10-15 digits";
          hasError = true;
        } else {
          newErrors.phoneNumber = "";
        }
        break;
      case "service":
        if (!chatBotFormData.service.trim()) {
          newErrors.service = "* Service is required";
          hasError = true;
        } else {
          newErrors.service = "";
        }
        break;
      default:
        break;
    }

    setChatBotErrors(newErrors);
    if (hasError) return;

    if (field === "name") setChatBotStep(1);
    if (field === "email") setChatBotStep(2);
    if (field === "phoneNumber") setChatBotStep(3);
    if (field === "service") {
      try {
        setIsDisabled(true);
        const res = await axios.post("/api/chatBotApi.js", chatBotFormData);
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            text: "Thank You! Your Response Has Been Submitted",
            confirmButtonColor: "#f56015",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: "Error while inserting data",
          confirmButtonColor: "#f56015",
        });
        setChatBotErrors({ ...newErrors, service: "Error while submitting service" });
      } finally {
        setChatBotStep(4); // Always move to thank you message, regardless of API success or failure
        setIsDisabled(false);
        setChatBotFormData({ name: "", email: "", service: "", phoneNumber: "" }); // Clear form data
        setChatBotErrors({ name: "", email: "", phoneNumber: "", service: "" }); // Clear errors
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="scroll-smooth">
        {props.children}
        <Footer />
        <CopyRightSection />
      </div>

      <AnimatePresence>
        {isGetAQuoteOpen && (
          <motion.div
            className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black/50"
            style={{ zIndex: 9999999999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <motion.div
              className="relative bg-white p-0 rounded-md shadow-lg mx-0 md:h-fit w-full md:max-w-2xl md:mx-4"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="absolute right-2 top-7 md:top-3">
                <X
                  className="p-1 w-7 h-7 bg-white rounded-md cursor-pointer hover:outline-2 outline-white"
                  onClick={handleCloseGetQuote}
                />
              </div>
              <div className="bg-[#f56015] text-white p-6 rounded-t-md">
                <h2 className="font-bold text-wrap mx-2">Get A Quote</h2>
                <p className="text-white/90 text-wrap mx-2 mt-2">
                  Please complete all fields to submit your application.
                </p>
              </div>
              <div className="max-h-[80vh] md:max-h-[70vh] overflow-y-auto p-6 rounded-b-md bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("name", { required: "* Name is required" })}
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-2 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "* Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "* Invalid email address",
                        },
                      })}
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-2 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("phoneNumber", {
                        required: "* Phone number is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "* Phone number must be 10-15 digits",
                        },
                      })}
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) e.preventDefault();
                      }}
                      className={`w-full px-4 py-2 border ${
                        errors.phoneNumber ? "border-red-500" : "border-gray-300"
                      } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message as string}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                      Service <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      {...register("service", { required: "* Service is required" })}
                      onValueChange={(value) => {
                        if (errors?.service?.message) {
                          clearErrors("service");
                        }
                        setValue("service", value);
                      }}
                    >
                      <SelectTrigger
                        className={`w-full h-10 px-4 py-2 border ${
                          errors.service ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-[#f56015] hover:border-[#f56015] transition-colors duration-200`}
                      >
                        <SelectValue placeholder="Select a Service" />
                      </SelectTrigger>
                      <SelectContent
                        className="bg-white w-full shadow-lg rounded-md border border-gray-200 z-[9999999999]"
                      >
                        <SelectGroup className="p-2">
                          {services.map((job) => (
                            <SelectItem
                              key={job.label}
                              value={job.value}
                              className="cursor-pointer py-2 px-4 my-1 text-gray-900 bg-gray-50 hover:bg-[#f56015] hover:text-white rounded-md transition-colors duration-200 focus:bg-[#f56015] focus:text-white"
                            >
                              {job.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors.service?.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.service.message as string}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="companyType" className="text-sm font-medium text-gray-700">
                      Company Type <span className="text-red-500 text-xs mt-1">*</span>
                    </Label>
                    <Select
                      {...register("companyType", { required: "* Company Type is required" })}
                      onValueChange={(value) => {
                        if (errors?.companyType?.message) {
                          clearErrors("companyType");
                        }
                        setValue("companyType", value);
                      }}
                    >
                      <SelectTrigger
                        className={`w-full h-10 px-4 py-2 border ${
                          errors.companyType ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-[#f56015] hover:border-[#f56015] transition-colors duration-200`}
                      >
                        <SelectValue placeholder="Select a Company Type" />
                      </SelectTrigger>
                      <SelectContent
                        className="bg-white w-full shadow-lg rounded-md border border-gray-200 z-[9999999999]"
                        side="bottom"
                      >
                        <SelectGroup className="p-2">
                          {[
                            "LLP (Limited Liability Partnership)",
                            "Private Limited Company (Pvt Ltd)",
                            "Public Limited Company (PLC)",
                            "One Person Company (OPC)",
                            "Section 8 Company / Non-Profit",
                            "Other",
                          ].map((type) => (
                            <SelectItem
                              key={type}
                              value={type}
                              className="cursor-pointer py-2 px-4 my-1 text-gray-900 bg-gray-50 hover:bg-[#f56015] hover:text-white rounded-md transition-colors duration-200 focus:bg-[#f56015] focus:text-white"
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors?.companyType && (
                      <p className="text-red-500 text-xs mt-1">{errors.companyType.message as string}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      {...register("additionalInfo")}
                      id="additionalInfo"
                      rows={4}
                      placeholder="Any additional notes or requirements?"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent resize-y"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row w-full gap-5 md:gap-2 pt-6 pb-10 md:pb-4">
                    <button
                      type="button"
                      onClick={handleCloseGetQuote}
                      className="w-full md:w-1/2 h-12 md:h-9 cursor-pointer bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isDisabled}
                      className="w-full disabled:bg-[#fbd1b7] disabled:cursor-not-allowed flex justify-center items-center md:w-1/2 h-12 md:h-9 bg-[#f56015] text-white font-semibold rounded-full cursor-pointer hover:bg-[#d14e10] focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent transition-colors duration-200"
                    >
                      {!isDisabled ? (
                        "Get a Quote"
                      ) : (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setIsChatBotOpen(!isChatBotOpen);
          if (!isChatBotOpen) {
            setChatBotFormData({ name: "", email: "", service: "", phoneNumber: "" });
            setChatBotErrors({ name: "", email: "", phoneNumber: "", service: "" });
            setChatBotStep(0);
          }
        }}
        className={`fixed bottom-6 cursor-pointer right-6 p-4 rounded-full bg-[#f56015] text-white shadow-lg hover:bg-[#d14e10] focus:outline-none focus:ring-2 focus:ring-[#f56015] transition-all duration-300 ${
          showFab ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{ zIndex: 9999 }}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isChatBotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-6 bottom-24 z-[99999999999] w-80 sm:w-96"
          >
            <div className="bg-white h-96 rounded-xl flex flex-col shadow-lg">
              <h1 className="text-white text-lg font-normal relative bg-orange-500 z-10 rounded-t-xl p-2 flex gap-3 items-center">
                <div className="rounded-full p-1 text-white bg-black/20 flex justify-center items-center">
                  <Headphones />
                </div>
                Abtik-Digital Chatbot
                <button
                  className="absolute right-2 bg-black/15 p-0.5 rounded-full cursor-pointer hover:bg-black/30"
                  onClick={() => setIsChatBotOpen(false)}
                >
                  <X />
                </button>
              </h1>

              <div ref={chatMessagesRef} className="p-4 overflow-y-auto flex-1 space-y-4 text-sm custom-scrollbar">
                <div>
                  <div className="w-fit flex flex-col">
                    <div className="text-xs text-gray-500 mb-1">Abtik</div>
                    <div className="bg-gray-200 rounded-lg px-3 py-2 max-w-[80%] break-words">
                      Welcome! 😊 I'm Abtik, your digital assistant.
                    </div>
                  </div>
                </div>

                {chatBotStep === 0 && (
                  <div>
                    <div className="flex flex-col items-start">
                      <div className="text-xs text-gray-500 mb-1">Abtik</div>
                      <div className="bg-gray-200 rounded-lg px-3 py-2 max-w-[80%] break-words">
                        Can I have your <span className="font-semibold">Full Name</span> so that I can use it to address you accurately in all future communications?
                      </div>
                      <div className="w-full mt-2">
                        <input
                          className={`p-2 px-3 rounded-lg border w-full bg-white ${
                            chatBotErrors.name ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter Your Full Name"
                          value={chatBotFormData.name}
                          onChange={(e) => setChatBotFormData({ ...chatBotFormData, name: e.target.value })}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") handleChatBotSubmit("name");
                          }}
                        />
                        {chatBotErrors.name && (
                          <div className="text-red-500 text-xs mt-1">{chatBotErrors.name}</div>
                        )}
                        <div className="flex justify-end mt-2">
                          <button
                            className="text-[#f56015] bg-gray-100 rounded-full py-1.5 px-4 text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                            onClick={() => handleChatBotSubmit("name")}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {chatBotFormData.name && chatBotStep > 0 && (
                  <div className="flex justify-end">
                    <div className="w-fit flex flex-col items-end">
                      <div className="text-xs text-gray-500 mb-1">You</div>
                      <div className="bg-[#f56015] text-white rounded-lg px-3 py-2 max-w-full break-words">
                        {chatBotFormData.name}
                      </div>
                    </div>
                  </div>
                )}

                {chatBotStep === 1 && (
                  <div>
                    <div className="flex flex-col items-start">
                      <div className="text-xs text-gray-500 mb-1">Abtik</div>
                      <div className="bg-gray-200 rounded-lg px-3 py-2 max-w-[80%] break-words">
                        {chatBotFormData.name}, please provide your verified <span className="font-semibold">Email ID</span>.
                      </div>
                      <div className="w-full mt-2">
                        <input
                          type="text"
                          className={`p-2 px-3 rounded-lg border w-full bg-white ${
                            chatBotErrors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="your.email@example.com"
                          value={chatBotFormData.email}
                          onChange={(e) => setChatBotFormData({ ...chatBotFormData, email: e.target.value })}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") handleChatBotSubmit("email");
                          }}
                        />
                        {chatBotErrors.email && (
                          <div className="text-red-500 text-xs mt-1">{chatBotErrors.email}</div>
                        )}
                        <div className="flex justify-end mt-2">
                          <button
                            className="text-[#f56015] bg-gray-100 rounded-full py-1.5 px-4 text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                            onClick={() => handleChatBotSubmit("email")}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {chatBotFormData.email && chatBotStep > 1 && (
                  <div className="flex justify-end">
                    <div className="w-fit flex flex-col items-end">
                      <div className="text-xs text-gray-500 mb-1">You</div>
                      <div className="bg-[#f56015] text-white rounded-lg px-3 py-2 max-w-full break-words">
                        {chatBotFormData.email}
                      </div>
                    </div>
                  </div>
                )}

                {chatBotStep === 2 && (
                  <div>
                    <div className="flex flex-col items-start">
                      <div className="text-xs text-gray-500 mb-1">Abtik</div>
                      <div className="bg-gray-200 rounded-lg px-3 py-2 max-w-[80%] break-words">
                        Great! Now, please provide your <span className="font-semibold">Contact Number</span>.
                      </div>
                      <div className="w-full mt-2">
                        <input
                          type="tel"
                          className={`p-2 px-3 rounded-lg border w-full bg-white ${
                            chatBotErrors.phoneNumber ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter your phone number"
                          value={chatBotFormData.phoneNumber}
                          onChange={(e) => setChatBotFormData({ ...chatBotFormData, phoneNumber: e.target.value })}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") handleChatBotSubmit("phoneNumber");
                          }}
                        />
                        {chatBotErrors.phoneNumber && (
                          <div className="text-red-500 text-xs mt-1">{chatBotErrors.phoneNumber}</div>
                        )}
                        <div className="flex justify-end mt-2">
                          <button
                            className="text-[#f56015] bg-gray-100 rounded-full py-1.5 px-4 text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                            onClick={() => handleChatBotSubmit("phoneNumber")}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {chatBotFormData.phoneNumber && chatBotStep > 2 && (
                  <div className="flex justify-end">
                    <div className="w-fit flex flex-col items-end">
                      <div className="text-xs text-gray-500 mb-1">You</div>
                      <div className="bg-[#f56015] text-white rounded-lg px-3 py-2 max-w-full break-words">
                        {chatBotFormData.phoneNumber}
                      </div>
                    </div>
                  </div>
                )}

                {chatBotStep === 3 && (
                  <div>
                    <div className="flex flex-col items-start">
                      <div className="text-xs text-gray-500 mb-1">Abtik</div>
                      <div className="bg-gray-200 rounded-lg px-3 py-2 max-w-[80%] break-words">
                        Finally, please select the <span className="font-semibold">Service</span> you are interested in.
                      </div>
                      <div className="w-full mt-2 space-y-2">
                        {services.map((service) => (
                          <button
                            key={service.value}
                            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                              chatBotFormData.service === service.value
                                ? "bg-[#f56015] text-white hover:bg-[#d14e10]"
                                : "bg-gray-50 text-gray-900 hover:bg-gray-200"
                            } border ${chatBotErrors.service ? "border-red-500" : "border-gray-300"}`}
                            onClick={() => {
                              setChatBotFormData({ ...chatBotFormData, service: service.value });
                              setChatBotErrors({ ...chatBotErrors, service: "" });
                            }}
                          >
                            {service.label}
                          </button>
                        ))}
                        {chatBotFormData.service && (
                          <div className="flex justify-end mt-2">
                            <div className="w-fit flex flex-col items-end">
                              <div className="text-xs text-gray-500 mb-1">You</div>
                              <div className="bg-[#f56015] text-white rounded-lg px-3 py-2 max-w-full break-words">
                                {services.find((s) => s.value === chatBotFormData.service)?.label}
                              </div>
                            </div>
                          </div>
                        )}
                        {chatBotErrors.service && (
                          <div className="text-red-500 text-xs mt-1">{chatBotErrors.service}</div>
                        )}
                        {chatBotFormData.service && chatBotStep === 3 && (
                          <div className="flex justify-end mt-2">
                            <button
                              disabled={isDisabled}
                              className="text-[#f56015] bg-gray-100 rounded-full py-1.5 px-4 text-sm font-medium hover:bg-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                              onClick={() => handleChatBotSubmit("service")}
                            >
                              {!isDisabled ? (
                                "Confirm"
                              ) : (
                                <div className="w-4 h-4 border-2 border-[#f56015] border-t-transparent rounded-full animate-spin" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {chatBotStep === 4 && (
                  <div>
                    <div className="w-fit flex flex-col mt-2">
                      <div className="text-xs text-gray-500 mb-1">Abtik</div>
                      <div className="bg-gray-200 rounded-lg px-3 py-2 max-w-[80%] break-words">
                        Thank you for providing your information! We've received your details and will get back to you shortly.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Mainlayout;