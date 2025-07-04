import Mainlayout from "../layout/Mainlayout";
import IphoneImage from "../assets/IphoneImage/iPhone.png";

const PrivacyPolicy = () => {
  const privacyPolicySections = [
    {
      title: "Purpose",
      description:
        "This Privacy Policy outlines how Abtik Digital collects, uses, shares, and protects personal data when users engage with our services, which include Web Design, UI/UX Design, WordPress Development, Shopify Setup, Digital Marketing, and SEO services.",
    },
    {
      title: "Applicability",
      description:
        "This policy applies to all users who interact with Abtik Digital through our website, platforms, or direct communication.",
    },
    {
      title: "Information We Collect",
      description: "We may collect the following data:",
      points: [
        "Personal details (e.g., name, email, phone number)",
        "Company and project-related information",
        "Device and browser information",
        "User behavior data (e.g., page views, clicks)",
      ],
    },
    {
      title: "How We Use Your Information",
      description: "We use the collected data to:",
      points: [
        "Deliver and manage our services efficiently",
        "Customize user experiences",
        "Improve our website and offerings",
        "Send service updates and promotions with consent",
      ],
    },
    {
      title: "Sharing of Information",
      description:
        "Your data is not sold or rented. We may share data under the following conditions:",
      points: [
        "With your permission",
        "With trusted service providers under strict confidentiality",
        "When required by law or legal process",
      ],
    },
    {
      title: "Data Security",
      description:
        "We take data security seriously and implement best practices:",
      points: [
        "SSL encryption for all communications",
        "Restricted access to sensitive data",
        "Routine data audits and monitoring",
      ],
    },
    {
      title: "Your Rights",
      description:
        "You may access, correct, or delete your personal data. You also have the right to object to or restrict data processing under applicable laws.",
    },
    {
      title: "Cookies",
      description:
        "We use cookies to enhance your experience. You can disable cookies via your browser settings, although this may affect website functionality.",
    },
    {
      title: "Types of Refund",
      description: "Refunds are subject to the following conditions:",
      points: [
        "Full refund for cancellations within 48 hours of payment, before project initiation.",
        "Partial refund for project cancellations after kickoff, based on completed work.",
        "No refund once final deliverables are approved and delivered.",
        "No refund for digital marketing services already executed or campaigns completed.",
      ],
    },
    {
      title: "Governance and Eligibility",
      description:
        "Refund eligibility is based on service type, client engagement, and agreement terms. Abtik Digital reserves the right to assess each refund request individually.",
    },
    {
      title: "Legal and Judicial Compliance",
      description:
        "We comply with all applicable laws and regulations. Any legal disputes shall be governed under the jurisdiction of the local courts where Abtik Digital is registered. We may disclose user information if required by law or in good faith belief that such action is necessary to comply with legal obligations.",
    },
    {
      title: "Changes to This Policy",
      description:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
    },
    {
      title: "Contact Us",
      description:
        "If you have questions or concerns about this Privacy Policy or need to exercise your rights, contact us at:",
      points: [
        '<a href="mailto:info@abtikdigital.com" class="text-[#f56015] h-5 w-5">📧  <span class="underline">info@abtikdigital.com</span></a>',
        '<a href="tel:+91 89281 38434" class="text-[#f56015] h-5 w-5 ">📞 <span class="underline"> +91 89281 38434</span> </a>',
      ],
    },
  ];

  return (
    <Mainlayout>
      <div className="min-h-screen w-full bg-[#0F172A]  text-white">
        <div
          className="relative flex flex-col md:flex-row items-center justify-between w-full py-10 gap-10 md:gap-0 px-6 md:px-16"
          style={{
            background: `
      radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
      radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
      #0F172A
    `,
          }}
        >
          {/* SVG Line Animation - Desktop */}
          <div className="hidden lg:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
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

          {/* Mobile Curved Lines */}
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
          <div className="w-full md:w-1/2  flex justify-center md:justify-start items-center z-10">
            <h2 className="max-w-full text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
              Privacy Policy
            </h2>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center z-10">
            <img
              src={IphoneImage}
              alt="iPhone Preview"
              className="w-3/5 max-w-[200px] md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
            />
          </div>

          {/* Animation Styles */}
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
        </div>


        <div className=" space-y-8 py-10 px-6  md:px-16">
          <h2 className="text-2xl font-bold text-[#f56015] ">
            Privacy Policy for Abtik Digital
          </h2>
          {privacyPolicySections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                {section.title}
              </h3>
              <p className="text-gray-300">{section.description}</p>
              {section.points && (
                <ul className="list-disc list-inside text-gray-300">
                  {section.points.map((point, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Mainlayout>
  );
};

export default PrivacyPolicy;
