import Mainlayout from "../layout/Mainlayout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useState, useRef } from "react";
// import { addApplication } from "../apis/careerApis";
import Swal from "sweetalert2";
import { X } from "lucide-react";
import IphoneImage from "../assets/IphoneImage/iPhone.png";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, ReactNode } from "react";
import axios from "axios";

// Define Job interface
interface Job {
  title: string;
  vacancy: number;
  location: string;
  experience: string;
  description: string;
}

// Animation variants for smooth fade-in effect
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

const Career: FC = () => {
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    setValue,
    clearErrors,
    reset,
  } = useForm();

  const toggleDialog = (job: Job | null = null) => {
    if (job) {
      setSelectedJob(job);
    }
    setOpen(!open);
    if (!open) {
      reset();
      setFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setError("resume", { type: "required", message: "Resume is required" });
      setFileName("");
    } else if (file.size > 3 * 1024 * 1024) { // 3MB in bytes
      setError("resume", { type: "maxSize", message: "File size must not exceed 3MB" });
      setFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } else {
      clearErrors("resume");
      setValue("resume", file);
      setFileName(file.name);
    }
  };

  const jobOpenings: Job[] = [
    {
      "title": "Business Development Executive (BDE)",
      "vacancy": 5,
      "location": "Ahmedabad",
      "experience": "1+ years",
      "description": "Boost Abtik Digital’s sales by securing new clients and driving revenue growth."
    },
    {
      "title": "BDE Intern",
      "vacancy": 5,
      "location": "Ahmedabad",
      "experience": "0-1 year",
      "description": "Join Abtik Digital to learn sales strategies and support client acquisition."
    }
    // {
    //   title: "Senior MERN Stack Developer",
    //   vacancy: 3,
    //   location: "Ahmedabad",
    //   experience: "5+ years",
    //   description:
    //     "Join our team to build cutting-edge web applications using MongoDB, Express.js, React, and Node.js. Lead projects and mentor junior developers.",
    // },
    // {
    //   title: "Senior Word Press Developer",
    //   vacancy: 3,
    //   location: "Ahmedabad",
    //   experience: "4+ years",
    //   description:
    //     "Create and maintain high-performance WordPress sites. Customize themes, develop plugins, and ensure seamless client experiences.",
    // },
    // {
    //   title: "Senior UIUX Designer",
    //   vacancy: 7,
    //   location: "Ahmedabad",
    //   experience: "2+ years",
    //   description:
    //     "Design and create intuitive, user-centered interfaces that enhance user experience. Focus on visual aesthetics, usability, and seamless interactions to deliver engaging digital solutions.",
    // },
  ];

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "resume") {
          return;
        }
        formData.append(key, data[key]);
      });

      if (fileInputRef.current?.files?.[0]) {
        formData.append("resume", fileInputRef.current.files[0]);
      }
      setIsDisabled(true)

      let res = await axios.post("/api/careerApis", formData);

      if (res?.status === 201) {
        Swal.fire({
          icon: "success",
          text: res?.data?.message,
          confirmButtonColor: "#f56015",
          draggable: true,
        });
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
          confirmButtonColor: "#f56015",

          text: "An error occurred while submitting your application",
          draggable: true,
        });
      }
      console.error(error);
    } finally {
      toggleDialog(); // Close the form regardless of success or failure
      setIsDisabled(false)
    }
  };

  return (
    <>
      <Mainlayout>
        <SectionWithAnimation className="min-h-screen w-full bg-[#0F172A] flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
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
            <div className="hidden lg:block absolute top-[20%] inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
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
            <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center z-10">
              <h2 className="max-w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
                Career
              </h2>
            </div>

            {/* Right Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center z-10">
              <img
                src={IphoneImage}
                alt="iPhone Preview"
                className="hover:scale-105 cursor-pointer transition-transform duration-500 floating-icon w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
              />
            </div>

            {/* Inline Animation Style */}
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
          </motion.div>

          <div
            className="w-full"
            style={{
              background: `
                radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
                radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
                #0F172A
              `,
            }}
          >
            <SectionWithAnimation className="w-full text-center px-6 md:px-16 py-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 underline underline-offset-8 decoration-2">
                Join Our Team
              </h2>
              <p className="text-[#9f9f9f] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                At Abtik Digital, we're passionate about innovation and
                collaboration. Join our dynamic team to work on exciting
                projects, grow your skills, and make a real impact. Explore our
                open positions below and apply today!
              </p>
            </SectionWithAnimation>

            <SectionWithAnimation className="max-w-full mx-auto w-full px-6 md:px-16 py-10">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                Current Job Openings
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {/* No Post Available */}
                {/* <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-white text-2xl md:text-4xl font-semibold text-center"
                >
                  No Open Positions at the Moment
                </motion.p> */}
                {/* Uncomment to enable job openings with fade-in animation */}
                {jobOpenings.map((job, index) => (
                  <JobCard
                    key={job.title}
                    job={job}
                    index={index}
                    onClick={() => toggleDialog(job)}
                  />
                ))}
              </div>
            </SectionWithAnimation>
          </div>
        </SectionWithAnimation>
      </Mainlayout>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black/50"
          style={{ zIndex: 999999999999 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative bg-white p-0 rounded-md shadow-lg transition-all mx-0 h-fit w-full md:max-w-2xl md:mx-4"
          >
            <div className="absolute right-2 top-7 md:top-3">
              <X
                className="p-1 w-7 h-7 bg-white rounded-md cursor-pointer hover:outline-2 outline-white"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="bg-[#f56015] text-white p-6 rounded-t-md">
              <h2 className="text-xl md:text-2xl font-bold text-wrap mx-2">
                Apply for {selectedJob?.title || "Position"}
              </h2>
              <p className="text-white/90 text-wrap mx-2 mt-2">
                Please complete all fields to submit your application.
              </p>
            </div>

            <div className="max-h-[80vh] md:max-h-[70vh] overflow-y-auto p-6 rounded-b-md">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                encType="multipart/form-data"
              >
                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name", { required: "* Name is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]"
                  />
                  {errors.name?.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message as string}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="position"
                    className="text-sm font-medium text-gray-700"
                  >
                    Position <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    {...register("position", {
                      required: "* Position is required",
                    })}
                    onValueChange={(value) => {
                      if (errors?.position?.message) {
                        clearErrors("position");
                      }
                      setValue("position", value);
                    }}
                  >
                    <SelectTrigger className="w-full cursor-pointer focus:ring-2 focus:ring-[#f56015] border border-gray-300">
                      <SelectValue placeholder="Select a Position" />
                    </SelectTrigger>
                    <SelectContent
                      className="bg-white w-full"
                      style={{ zIndex: 99999999999 }}
                    >
                      <SelectGroup className="p-1 rounded-md">
                        {jobOpenings.map((job) => (
                          <SelectItem
                            key={job.title}
                            value={job.title}
                            className="cursor-pointer my-1.5 bg-[#f2f7fe]"
                          >
                            {job.title}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.position?.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.position.message as string}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email", {
                      required: "* Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]"
                  />
                  {errors.email?.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <Label
                      htmlFor="contact_number"
                      className="text-sm font-medium text-gray-700"
                    >
                      Contact Number <span className="text-red-500">*</span>
                    </Label>
                    <input
                      id="contact_number"
                      type="tel"
                      placeholder="Enter your number"
                      {...register("contact_number", {
                        required: "* Contact number is required",
                        minLength: {
                          value: 10,
                          message: "* Must be at least 10 digits",
                        },
                        maxLength: {
                          value: 15,
                          message: "* Cannot exceed 15 digits",
                        },
                      })}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) e.preventDefault();
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]"
                    />
                    {errors.contact_number?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.contact_number.message as string}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label
                      htmlFor="experience"
                      className="text-sm font-medium text-gray-700"
                    >
                      Experience <span className="text-red-500">*</span>
                    </Label>
                    <input
                      id="experience"
                      type="number"
                      placeholder="e.g., 5 years"
                      {...register("experience", {
                        required: "* Experience is required",
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]"
                    />
                    {errors.experience?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.experience.message as string}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <Label
                      htmlFor="currentCtc"
                      className="text-sm font-medium text-gray-700"
                    >
                      Current CTC (₹) <span className="text-red-500">*</span>
                    </Label>
                    <input
                      id="currentCtc"
                      type="number"
                      placeholder="Current annual salary"
                      {...register("currentCtc", {
                        required: "* Current CTC is required",
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]"
                    />
                    {errors.currentCtc?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.currentCtc.message as string}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <Label
                      htmlFor="expectedCtc"
                      className="text-sm font-medium text-gray-700"
                    >
                      Expected CTC (₹) <span className="text-red-500">*</span>
                    </Label>
                    <input
                      id="expectedCtc"
                      type="number"
                      placeholder="Expected annual salary"
                      {...register("expectedCtc", {
                        required: "* Expected CTC is required",
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]"
                    />
                    {errors.expectedCtc?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.expectedCtc.message as string}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="joiningPeriod"
                    className="text-sm font-medium text-gray-700"
                  >
                    Notice Period / Joining Time{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <input
                    id="joiningPeriod"
                    type="text"
                    placeholder="e.g., Immediate, 30 days, 2 months"
                    {...register("joiningPeriod", {
                      required: "* Joining period is required",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent h-[38px]"
                  />
                  {errors.joiningPeriod?.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.joiningPeriod.message as string}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="resume"
                    className="text-sm font-medium text-gray-700"
                  >
                    Upload Resume <span className="text-red-500">*</span>
                  </Label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      onClick={handleFileButtonClick}
                      className="px-4 py-2 border cursor-pointer border-gray-300 bg-[#ffedd5] text-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent hover:bg-[#fed7aa] transition-colors duration-300 h-[38px]"
                    >
                      Choose File
                    </Button>
                    <span className="text-sm text-gray-600 truncate max-w-xs">
                      {fileName ? fileName : "No file chosen"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Accepted formats: PDF, DOC, DOCX (Max 3MB)
                  </p>
                  {errors.resume?.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.resume.message as string}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="coverLetter"
                    className="text-sm font-medium text-gray-700"
                  >
                    Cover Letter or Additional Information (Optional)
                  </Label>
                  <textarea
                    id="coverLetter"
                    rows={4}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit."
                    {...register("message")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent resize-y"
                  />
                </div>

                <div className="flex flex-col md:flex-row w-full gap-5 md:gap-2 pt-6 pb-10 md:pb-4">
                  <Button
                    type="button"
                    onClick={() => toggleDialog()}
                    className="w-full md:w-1/2 h-12 md:h-9 cursor-pointer bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent transition-colors duration-300"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    onClick={() => {
                      if (!watch("resume")) {
                        setError("resume", {
                          type: "required",
                          message: "* Resume is required",
                        });
                      }
                    }}
                    className="w-full md:w-1/2 h-12 md:h-9 flex justify-center items-center bg-[#f56015] text-white font-semibold rounded-full cursor-pointer hover:bg-[#d14e10] focus:outline-none focus:ring-2 focus:ring-[#f56015] focus:border-transparent transition-colors duration-300"
                  >
                    {!isDisabled ? "Submit Application" : <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// Reusable Section Component with Intersection Observer
interface SectionWithAnimationProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SectionWithAnimation: FC<SectionWithAnimationProps> = ({ children, className, style }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
};

// Reusable Job Card Component with Intersection Observer
interface JobCardProps {
  job: Job;
  index: number;
  onClick: () => void;
}

const JobCard: FC<JobCardProps> = ({ job, index, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="bg-white cursor-pointer border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#f56015] transition-all duration-300 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex flex-col justify-between min-h-[16rem]"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2 min-h-[2.5rem]">
          {job.title}
        </h4>
        <p className="text-gray-600 text-sm mb-4 min-h-[4rem]">
          {job.description}
        </p>
        <div className="flex flex-col gap-2 mb-4 w-full">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-sm">
              <strong>Vacancies:</strong> {job.vacancy}
            </span>
            <span className="text-gray-700 text-sm">
              <strong>Location:</strong> {job.location}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-sm">
              <strong>Experience:</strong> {job.experience}
            </span>
          </div>
        </div>
      </div>
      <Button
        onClick={onClick}
        className="inline-block cursor-pointer bg-[#f56015] text-white font-medium px-4 py-2 rounded-full hover:bg-[#d14e10] transition-colors duration-300 self-start"
      >
        Apply Now
      </Button>
    </motion.div>
  );
};

export default Career;