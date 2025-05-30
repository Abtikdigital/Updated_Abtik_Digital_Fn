// import { useEffect, useRef } from "react";
// import MacBookImage from "../assets/HeroSection/Macbook.png";
// import IphoneImage from "../assets/HeroSection/iPhone.png";
// import "../styles/HeroSection.css"; // Retain custom CSS for animations

// const HeroSection = () => {
//   const benefitItemsRef = useRef<(HTMLLIElement | null)[]>([]);

//   useEffect(() => {
//     benefitItemsRef.current.forEach((item, index) => {
//       if (item) {
//         setTimeout(() => {
//           item.classList.add("animate");
//         }, 700 + index * 150);
//       }
//     });
//   }, []);

//   return (
//     <div className="hero-section opacity-0 animate-fadeIn overflow-hidden">
//       {/* MacBook Section */}
//       {/* <div className="w-full flex justify-center items-center px-6 py-16 bg-[#f9f6ee]">
//         <img 
//           src={MacBookImage} 
//           className="macbook-container max-w-4/5 animate-float" 
//           alt="MacBook Display" 
//         />
//       </div>

//       <hr className="" /> */}

//       {/* iPhone + Content Section */}
//       <div className="bg-[#f9f6ee] flex flex-col md:flex-row px-6 py-16">
//         {/* iPhone Image */}
//         <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
//           <img 
//             src={IphoneImage} 
//             className="iphone-container max-w-full opacity-0 animate-slideInLeft delay-300" 
//             alt="iPhone Display" 
//           />
//         </div>

//         {/* Content */}
//         <div className="w-full md:w-1/2 flex justify-center items-center content-container opacity-0 animate-slideInRight delay-600 px-5">
//           <div className="flex flex-col justify-center max-w-md">
//             <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
//             <ul className="text-base text-gray-700">
//               {[
//                 "Expert Team – Skilled professionals with industry expertise 👩‍💼👨‍💼",
//                 "Tailored Solutions – Customized strategies for your unique needs 🎯🛠️",
//                 "Proven Results – Success-driven approach with measurable outcomes 📈🏆",
//                 "Client-Centric – Your goals are our priority 🤝🎯"
//               ].map((text, idx) => (
//                 <li
//                   key={idx}
//                   className="benefit-item mb-3"
//                   ref={(el) => (benefitItemsRef.current[idx] = el)}
//                 >
//                   {text}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <hr className="" />
//     </div>
//   );
// };

// export default HeroSection;
