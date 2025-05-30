import { useEffect, useRef, useState } from "react";
import "../styles/Footer.css";
import Logo from "../assets/logo/AbtikDigitalwhite.png";
import { addEmail } from "../apis/emailMarketingApis";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  SendHorizonal,
} from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#f56015",
      });
      setEmail("")
      return;
    }

    try {
      let res = await addEmail({ email });
      if (res?.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Subscribed!",
          text: "You've successfully subscribed to our updates.",
          confirmButtonColor: "#f56015",
        });
        setEmail("");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#f56015",
      });
    }
  };

  const footerData = [
    {
      title: "Our Services",
      links: [
        { title: "Website Development", path: "/services/webDevelopment" },
        { title: "UI/UX Design", path: "/services/uiux" },
        { title: "Digital Marketing", path: "/services/digitalmarketing" },
        { title: "SEO", path: "/services/seo" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Us", path: "/about-us" },
        { title: "Career", path: "/career" },
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "Contact", path: "/contact-us" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blog", path: "/blog" },
        { title: "Portfolio", path: "/portfolio" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />,path:"https://www.facebook.com/people/Abtik-Digital/61557004832458/#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />,path:"https://www.linkedin.com/company/abtik-digitals/" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />,path:"https://www.instagram.com/abtik_digital/?igsh=MWh5NHZqamxodmZiNg%3D%3D#" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer bg-black font-normal text-[#f9f9f9] text-sm sm:text-base px-6 py-10 md:px-16"
    >
      <div className="flex flex-col gap-10">
        {/* Logo */}
        <div className="flex justify-start">
          <img
            src={Logo}
            alt="Abtik Digital Logo"
            className="w-32 md:w-28 object-contain"
          />
        </div>

        {/* Contact + Navigation */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Contact Info */}
          <div className="space-y-3 text-left min-w-[220px] max-w-full text-[#9f9f9f]">
            <div className="flex items-center gap-2">
              <MapPin className="text-[#f56015] w-5 h-5" />
              <a
                className="text-wrap w-full md:max-w-96 break-words hover:underline decoration-[#f56015] hover:text-[#f56015] text-sm"
                href="https://maps.app.goo.gl/UsfzUZDpPs545amh7"
              >
                313, Patel Ave, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad,
                Gujarat 380054
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#f56015]" />
              <a
                href="mailto:info@abtikdigital.com"
                className="hover:underline decoration-[#f56015] underline-offset-2 hover:text-[#f56015] text-sm"
              >
                info@abtikdigital.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#f56015]" />
              <a
                href="tel:+918928138434"
                className="hover:underline decoration-[#f56015] underline-offset-2 hover:text-[#f56015] text-sm"
              >
                +91 89281 38434
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#f56015]" />
              <p className="text-sm">Mon–Sat: 10am – 7pm</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6 lg:gap-12">
            {footerData.map((section) => (
              <div key={section.title} className="space-y-3 min-w-[180px]">
                <h2 className="text-lg font-bold">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="hover:underline decoration-[#f56015] text-sm underline-offset-2 hover:text-[#f56015] transition text-[#9f9f9f]"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Email Input & Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
          <div className="relative w-56 bg-white rounded-full flex items-center overflow-hidden p-1.5">
            <input
              type="email"
              value={email}
              placeholder="example@gmail.com"
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm text-black bg-white rounded-full focus:outline-none pr-10"
            />
            <button
              onClick={handleSubmit}
              className="absolute right-1.5 p-2 cursor-pointer flex justify-center items-center bg-[#f56015] text-white rounded-full hover:bg-[#d14e10] transition"
            >
              <SendHorizonal className="w-5 h-5" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                target="_blank"
                href={link.path}
                className="bg-[#f56015] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#d14e10] transition"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
