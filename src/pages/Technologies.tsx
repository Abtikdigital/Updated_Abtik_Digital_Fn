
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, FC, memo } from "react";
import Mainlayout from "../layout/Mainlayout";
import ReactImage from "../assets/Technologies/reactImage.png";
import NodeImage from "../assets/Technologies/nodejs.png";
import ExpressImage from "../assets/Technologies/expressjs.png";
import TypeScriptImage from "../assets/Technologies/typescript.png";
import WordPressImage from "../assets/Technologies/wordpress.png";
import ShopifyImage from "../assets/Technologies/shopify.png";
import MongodbImage from "../assets/Technologies/mongodb.png";
import MysqlImage from "../assets/Technologies/mysql.png";
import FigmaImage from "../assets/Technologies/figma.png";
import AdobeXd from "../assets/Technologies/adobeXd.png";
import AdobeIllustrator from "../assets/Technologies/adobeillustrator.png";
import Canva from "../assets/Technologies/canva.png";
import AdobePhotoShop from "../assets/Technologies/photoshop.png";
import AdobePremiumPro from "../assets/Technologies/adobepremierepro.png";
import CorelDraw from "../assets/Technologies/coreldraw.png";
import AdobeIndesign from "../assets/Technologies/adobeindesign.png";
import "../styles/Technologies.css"; // Import the custom CSS for styles
import IphoneImage from "../assets/IphoneImage/iPhone.png";

// Define TypeScript interface for tech items
interface TechItem {
  src: string;
  name: string;
}

// Animation variants for cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.05 },
  }),
};

// Separate component for each tech card
interface TechCardProps {
  src: string;
  name: string;
  index: number;
}

const TechCard: FC<TechCardProps> = memo(({ src, name, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the card is visible
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      custom={index}
      className="group bg-white cursor-pointer border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#f56015] transition-all duration-300 flex flex-col items-center justify-center"
    >
      <img
        src={src}
        alt={`${name} logo`}
        loading="lazy"
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <p className="mt-4 text-sm sm:text-base lg:text-lg font-semibold text-gray-800 group-hover:text-[#f56015] transition-colors duration-300">
        {name}
      </p>
    </motion.div>
  );
});

TechCard.displayName = "TechCard";

const Technologies: FC = () => {
  const [loading, setLoading] = useState(true); // To simulate loading state


  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false); // Set loading to false after 0 seconds
    
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [loading]);

  const imagesArray: TechItem[] = [
    { src: ReactImage, name: "React.js" },
    { src: NodeImage, name: "Node.js" },
    { src: ExpressImage, name: "Express.js" },
    { src: TypeScriptImage, name: "TypeScript" },
    { src: WordPressImage, name: "WordPress" },
    { src: ShopifyImage, name: "Shopify" },
    { src: MongodbImage, name: "MongoDB" },
    { src: MysqlImage, name: "MySQL" },
  ];

  const designFrameworks: TechItem[] = [
    { src: FigmaImage, name: "Figma" },
    { src: AdobeXd, name: "AdobeXd" },
    { src: AdobeIllustrator, name: "Adobe Illustrator" },
    { src: Canva, name: "Canva" },
    { src: AdobePhotoShop, name: "Adobe PhotoShop" },
    { src: AdobePremiumPro, name: "Adobe Premiere Pro" },
    { src: CorelDraw, name: "Corel Draw" },
    { src: AdobeIndesign, name: "Adobe InDesign" },
  ];

  // Animation variants for sections
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <Mainlayout>
      <div className="min-h-screen w-full bg-[#0F172A]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-10 gap-10 md:gap-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A`,
          }}
        >
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
            <h2 className="max-w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
              Technologies
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={IphoneImage}
              alt="iPhone Preview"
              loading="lazy"
              className="w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="w-full border-b bg-[#0F172A] to-black px-6 md:px-16 py-10"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
              #0F172A`,
          }}
        >
          <div className="max-w-full mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 underline underline-offset-8 decoration-2">
              Technologies We Master
            </h2>
            <p className="text-[#9f9f9f] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              At Abtik Digital, we leverage cutting-edge technologies to craft
              scalable, secure, and high-performance digital solutions. Our
              diverse tech stack empowers us to deliver innovative and reliable
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-full mx-auto overflow-hidden">
            {imagesArray.map(({ src, name }, index) => (
              <TechCard key={name} src={src} name={name} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="w-full bg-[#0F172A] sm:px-6 border-b px-6 md:px-16 py-10"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A`,
          }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 underline underline-offset-8 decoration-2">
              Design Tools We Work With
            </h2>
            <p className="text-[#9f9f9f] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              We also specialize in design tools that allow us to create
              beautiful and user-friendly interfaces. These tools help us craft
              seamless experiences with a modern design approach.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto overflow-hidden">
            {designFrameworks.map(({ src, name }, index) => (
              <TechCard key={name} src={src} name={name} index={index + imagesArray.length} />
            ))}
          </div>
        </motion.section>
      </div>
    </Mainlayout>
  );
};

export default Technologies;
