import "../styles/Testimonial.css"; // Animation handled here

const testimonials = [
  {
    name: 'Mahendra Suthar',
    role: 'Bajrang Aluminium Section',
    text: 'We are extremely pleased with the digital marketing and logo design services by Abtik Group. Bharat Barot, Riya Jaiswal, and Nilesh Varotariya delivered a logo that perfectly reflects our brand.',
  },
  {
    name: 'Bhagwan Bhai Patel',
    role: 'Hari Om Kathyawadi',
    text: 'Thrilled with the user-friendly and visually appealing website Abtik created. Akash and Riya provided exceptional service and support throughout.',
  },
  {
    name: 'Dr. K.H. Akoisana Singh',
    role: 'Ethanomedical',
    text: 'The website design and functionality were amazing. Special thanks to Akash for going above and beyond—even during holidays—to meet the deadline.',
  },
  {
    name: 'Bhagwan Prasad Sutradhar',
    role: 'Govedic.org',
    text: 'Absolutely thrilled with Govedic.org! Huge thanks to Himani, Akash, and Karan for their dedication and making the process so smooth and quick.',
  },
  {
    name: 'Bhagwan Bhai Patel',
    role: 'Hari Om Kathyawadi',
    text: 'Akash’s expertise and Riya’s excellent support made this one of the best web development experiences I’ve had. Highly recommend Abtik Services!',
  },
];

const getInitials = (name:any) => {
  const parts = name.trim().split(" ");
  const first = parts[0]?.charAt(0).toUpperCase() || "";
  const last = parts[parts.length - 1]?.charAt(0).toUpperCase() || "";
  return `${first}${last}`;
};

const bgColors = ["bg-orange-500", "bg-pink-500", "bg-purple-500", "bg-blue-500", "bg-green-500"];

const Testimonial = () => {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 px-6 md:px-12 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>

      <div className="testimonial-marquee">
        {doubledTestimonials.map((t, i) => (
          <div key={i} className="testimonial-card max-w-xl">
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-white text-xl font-bold border-2 border-orange-500 ${
                bgColors[i % bgColors.length]
              }`}
            >
              {getInitials(t.name)}
            </div>
            <p className="text-gray-700 italic text-sm mb-4 text-center break-words relative px-4">
              <span className="text-[#f56015] text-3xl leading-none absolute left-0 -top-2">“</span>
              {t.text}
              <span className="text-[#f56015] text-3xl leading-none absolute right-0 -bottom-2">”</span>
            </p>
            <div className="text-center">
              <h4 className="font-semibold text-orange-600">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
