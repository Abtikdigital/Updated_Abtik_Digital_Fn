import { useState, useRef } from "react";
import { AlignJustify, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoImage from "../assets/logo/AbtikDigitalwhite.png";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const disp = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 150);
  };
  const handleOpenGetQuote = () => {
    disp({ type: "open" });
  };

  const subServices = [
    { title: "Web Development", path: "/services/webDevelopment" },
    { title: "Improve SEO Ranking", path: "/services/seo" },
    { title: "Digital Marketing", path: "/services/digitalmarketing" },
    { title: "UI/UX Design", path: "/services/uiux" },
  ];

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Technologies", path: "/technologies" },
    { title: "About Us", path: "/about-us" },
    { title: "Career", path: "/career" },
    { title: "Contact", path: "/contact-us" },
  ];

  return (
    <nav className="sticky top-0   bg-[radial-gradient(ellipse_at_bottom_right,_#f56015_1%,__#0F172A_20%)] shadow-2xl z-[9999999999] h-auto ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 ">
        <div className="flex justify-between items-center py-3.5 gap-2.5 relative">
          {/* Desktop Nav */}
          <div className="hidden lg:flex  min-w-fit  flex-grow justify-center md:justify-start px-2 md:px-10   lg:space-x-4 items-center relative">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.title === "Services" ? (
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span
                      className={`relative text-[#9f9f9f] hover:text-[#f56015] py-2 cursor-pointer text-sm transition-all duration-300 ${location.pathname.startsWith("/services")
                          ? "text-[#f56015] font-semibold"
                          : ""
                        }`}
                    >
                      <span className="relative z-10">Services</span>
                      <span
                        className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#f56015] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${location.pathname.startsWith("/services")
                            ? "scale-x-100"
                            : ""
                          }`}
                      ></span>
                    </span>

                    {/* Submenu */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-52 p-3 bg-white rounded-lg shadow-lg transition-all duration-300 z-50 ${isServicesHovered
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                        }`}
                    >
                      {subServices.map((sub, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            navigate(sub.path);
                            setIsServicesHovered(false);
                          }}
                          className="px-4 py-2  font-normal bg-[#f2f7fe] my-2 rounded-md hover:bg-[#f56015] hover:text-white text-sm cursor-pointer transition-all"
                        >
                          {sub.title}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative text-[#9f9f9f] hover:text-[#f56015]   py-2 rounded-md text-sm transition-all duration-300 ${location.pathname === item.path
                        ? "text-[#f56015] font-semibold"
                        : ""
                      }`}
                  >
                    <span className="relative z-10 ">{item.title}</span>
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#f56015] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${location.pathname === item.path ? "scale-x-100" : ""
                        }`}
                    ></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Logo + CTA */}
          <div className="flex lg:justify-evenly w-1/2">
            <div className="flex-shrink-0 w-fit">
              <Link to="/" className="text-2xl font-bold text-[#f56015]">
                <img src={LogoImage} alt="Logo" className="h-16 w-16" />
              </Link>
            </div>
            <div className="ml-auto hidden lg:flex justify-start items-center">
              <button
                className="bg-[#f56015] text-sm  font-medium hover:bg-[#d14e10] text-white rounded-full  py-2 px-3.5  cursor-pointer  "
                style={{ fontFamily: "Roboto, sans-serif !important" }}
                onClick={handleOpenGetQuote}
              >
                Start A Project
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#f56015] p-2 border border-white rounded-md transition-transform duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <AlignJustify className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="lg:hidden flex flex-col gap-2 bg-black text-white px-4 py-3 rounded-md z-50 ">
            {menuItems.map((item) => {
              if (item.title === "Services") {
                return (
                  <div key="Services">
                    <div className="font-semibold text-[#f56015]">Services</div>
                    {subServices.map((sub) => (
                      <div
                        key={sub.title}
                        onClick={() => {
                          navigate(sub.path);
                          setIsOpen(false);
                        }}
                        className="pl-4 py-2 text-sm hover:text-[#f56015] cursor-pointer transition"
                      >
                        {sub.title}
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm py-2 hover:text-[#f56015]  transition ${location.pathname === item.path
                      ? "text-[#f56015] font-semibold"
                      : ""
                    }`}
                >
                  {item.title}
                </Link>
              );
            })}

            {/* CTA button */}
            <button
              className="mt-4 bg-[#f56015] text-white py-2 px-4 rounded-full cursor-pointer hover:bg-orange-950"
              onClick={() => {
                handleOpenGetQuote()
                setIsOpen(false)
              }}
            >
              Start A Project
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
