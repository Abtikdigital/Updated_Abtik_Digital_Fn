import  { useEffect, useRef } from 'react';
import '../styles/ClientStats.css';

const stats = [
  { label: 'Happy Clients', value: 1200 },
  { label: 'Projects Completed', value: 850 },
  { label: 'Countries Served', value: 15 },
  { label: 'Years of Experience', value: 3 },
];

const ClientStats = () => {
  const sectionRef = useRef<any>(null);

  const animateCount = (el:any, end:any) => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const step = () => {
      start += increment;
      if (start < end) {
        el.textContent = Math.floor(start);
        requestAnimationFrame(step);
      } else {
        el.textContent = end + '+';
      }
    };
    step();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const counters = sectionRef.current.querySelectorAll('.count-up');
          counters.forEach((counter:any) => {
            const value = parseInt(counter.getAttribute('data-count'), 10);
            animateCount(counter, value);
          });
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.3 } // Adjust for earlier/later trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-10 md:px-16 bg-white text-center "
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Impact</h2>
      <p className="text-gray-600 text-lg max-w-full mx-auto mb-12">
        We’ve worked with hundreds of amazing clients across the globe. Here’s a quick look at our journey so far.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-800">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center fade-in border-1 border-[#f56015] rounded-lg p-3  bg-[#ffe8db]">
            <div
              className="text-4xl font-extrabold text-orange-600 mb-2 count-up "
              data-count={stat.value}
            >
              0
            </div>
            <div className="text-lg font-medium text-[#9f9f9f]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientStats;
