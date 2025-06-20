import Navbar from "../section/Navbar";
import Footer from "../section/Footer";
import CopyRightSection from "../section/Copyright";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
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
import { useEffect, useState } from "react";
// import { addQuote } from "../apis/quoteApis";
import Swal from "sweetalert2";
import axios from "axios";

const Mainlayout = (props: any) => {
  // List of service options
  const services = [
    { value: "web-development", label: "Web Development" },
    { value: "graphic-design", label: "Graphic Design" },
    { value: "uiux", label: "UIUX" },
    { value: "seo", label: "SEO" },
    { value: "digital-marketing", label: "Digital Marketing" },

    { value: "other", label: "Other" },
  ];
  const disp = useDispatch();
  const isGetAQuoteOpen = useSelector((state: any) => state.isGetQuoteOpen);
const [isDisabled,setIsDisabled]=useState(false)
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const handleCloseGetQuote = () => {
    disp({ type: "close" });
    reset();
  };
  const onSubmit = async (formData: any) => {
    try {
      setIsDisabled(true)
      let res = await axios.post("/api/quoteApis",formData);
      if (res.status == 201) {
        Swal.fire({
          icon: "success",
          text: "Your Response Has Been Recorded Successfully",
          confirmButtonColor: "#f56015",
        });
      }
    } catch (error: any) {

      if (error?.response?.status === 400||error?.response?.status === 409) {
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
      setIsDisabled(false)
    }
  };

  useEffect(() => {
    // Apply smooth scroll to html element
    document.documentElement.style.scrollBehavior = "smooth";

    // Clean up function to reset when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  useEffect(() => {


  }, [])

  return (
    <>
      <Navbar />

      <div className="scroll-smooth">
        {props.children}
        <Footer />
        <CopyRightSection />
      </div>

      {isGetAQuoteOpen && (
        <div
          className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black/50"
          style={{ zIndex: 9999999999 }}
        >
          <div className="relative bg-white p-0 rounded-md shadow-lg transition-all mx-0 md:h-fit  w-full md:max-w-2xl md:mx-4">
            <div className="absolute right-2 top-7 md:top-3">
              <X
                className="p-1 w-7 h-7 bg-white rounded-md cursor-pointer hover:outline-2 outline-white"
                onClick={() => handleCloseGetQuote()}
              />
            </div>
            <div className="bg-[#f56015] text-white p-6 rounded-t-md">
              <h2
                className="
               font-bold text-wrap mx-2"
              >
                Get A Quote
              </h2>
              <p className="text-white/90 text-wrap mx-2 mt-2">
                Please complete all fields to submit your application.
              </p>
            </div>

            <div className="max-h-[80vh] md:max-h-[70vh] overflow-y-auto p-6 rounded-b-md bg-white">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("name", {
                      required: "* Name is required",
                    })}
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message as String}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
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
                    className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message as String}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
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
                    className={`w-full px-4 py-2 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                      } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber.message as String}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="service"
                    className="text-sm font-medium text-gray-700"
                  >
                    Service <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    {...register("service", {
                      required: "* Service is required",
                    })}
                    onValueChange={(value) => {
                      if (errors?.service?.message) {
                        clearErrors("service");
                      }
                      setValue("service", value);
                    }}
                  >
                    <SelectTrigger className="w-full cursor-pointer focus:ring-2 focus:ring-[#f56015] border border-gray-300">
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                    <SelectContent
                      className="bg-white w-full "
                      style={{ zIndex: 9999999999 }}
                    >
                      <SelectGroup className="p-1 rounded-md">
                        {services.map((job) => (
                          <SelectItem
                            key={job.label}
                            value={job.value}
                            className="cursor-pointer my-1.5 bg-[#f2f7fe]"
                          >
                            {job.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.service?.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.service.message as String}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="companyType"
                    className="text-sm font-medium text-gray-700"
                  >
                    Company Type{" "}
                    <span className="text-red-500 text-xs mt-1">*</span>
                  </Label>
                  <Select
                    {...register("companyType", {
                      required: "* Company Type is required",
                    })}
                    onValueChange={(value) => {
                      if (errors?.companyType?.message) {
                        clearErrors("companyType");
                      }
                      setValue("companyType", value);
                    }}
                  >
                    <SelectTrigger className="w-full cursor-pointer focus:ring-2 focus:ring-[#f56015] border border-gray-300">
                      <SelectValue placeholder="Select a Company Type" />
                    </SelectTrigger>
                    <SelectContent
                      className="z-[99999999999] bg-white "
                      side="bottom"
                    >
                      <SelectGroup className="p-1 rounded-md">
                        {[
                          "LLP (Limited Liability Partnership)",
                          "Private Limited Company (Pvt Ltd)",
                          "Public Limited Company (PLC)",
                          "One Person Company (OPC)",
                          "Section 8 Company / Non-Profit",
                          "Other",
                        ].map((type) => (
                          <SelectItem
                            value={type}
                            className="cursor-pointer my-1.5 bg-[#f2f7fe]"
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors?.companyType && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors?.companyType?.message as String}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="additionalInfo"
                    className="text-sm font-medium text-gray-700"
                  >
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
                    onClick={() => {
                      handleCloseGetQuote();
                    }}
                    className="w-full md:w-1/2 h-12 md:h-9 cursor-pointer bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full md:w-1/2 h-12 md:h-9 bg-[#f56015] text-white font-semibold rounded-full cursor-pointer hover:bg-[#d14e10] focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent transition-colors duration-300"
                  >
                { !isDisabled?  "Get a Quote":<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mainlayout;
