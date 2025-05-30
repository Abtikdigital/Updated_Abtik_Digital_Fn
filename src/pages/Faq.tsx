import React, { useState, useEffect, useRef } from "react";
import { Plus, X } from "lucide-react";
import "../styles/Faq.css"; 
import PhonePhoto from "../assets/Faq/faq.jpg";

interface Question {
  question: string;
  answer: (string | any)[];
}

const questions: Question[] = [
  {
    question: "What services does Abtik Digital offer?",
    answer: [
      "We offer design, marketing, and development services tailored to your business needs.",
    ],
  },
  {
    question: "How can Abtik Digital help my startup stand out?",
    answer: [
      "With professional branding, marketing strategies, and a strong online presence.",
    ],
  },
  {
    question: "Do you offer affordable packages for students or early-stage entrepreneurs?",
    answer: [
      "Yes, we have special pricing for startups and students.",
    ],
  },
  {
    question: "How long does it take to develop a website or brand identity?",
    answer: [
      "Depends on the scope—typically 2–4 weeks.",
    ],
  },
  {
    question: "Can Abtik Digital also handle legal registrations (like company incorporation)?",
    answer: [
      "Yes, we assist in company setup and branding.",
    ],
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Only animate once
        }
      },
      {
        threshold: 0.4,
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section); // Fix cleanup return
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className={`flex flex-col overflow-hidden md:flex-row justify-center items-center gap-12 px-6 py-10 md:px-16 mx-auto  max-w-full bg-white ${hasAnimated ? "fade-in" : ""}`}
    >
      <div className="w-full md:w-1/2 h-full p-6 rounded-3xl text-white bg-[#F56015]">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-white ">Frequently Asked Questions</h2>

        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[white] text-[#000000] rounded-2xl mb-5 shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className={`w-full flex justify-between items-center p-3.5 cursor-pointer text-left `}
                onClick={() => toggleIndex(index)}
              >
                <span className={`font-semibold text-lg text-[#000000]`}>{item.question}</span>
                <span className={`text-[#0F172A] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  {isOpen ? <X size={24} /> : <Plus size={24} />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-base text-black animate-slideDown">
                  {item.answer.map((line, i) => (
                    <p key={i} className="mb-3 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <img src={PhonePhoto} className="max-w-full max-h-full rounded-lg mix-blend-multiply" />
      </div>
    </section>
  );
};

export default Faq;
