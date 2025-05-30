import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
interface AnimatedLinesProps {
  containerId: string;
  colors?: string[];
}

const AnimatedLines: React.FC<AnimatedLinesProps>= ({ containerId, colors = ['#a33cc4', '#f9a825', '#9c274f'] }) => {
  const svgRef = useRef<any>(null);

  useEffect(() => {
    // Make sure the SVG reference is available
    if (!svgRef.current) return;

    // Get all the paths in the SVG
    const paths:any = svgRef.current.querySelectorAll('path');
    const timelines:any = [];

    // Set up an animation for each path
    paths.forEach((path: SVGPathElement) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    
      const tl: gsap.core.Tween = gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: `#${containerId}`,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        }
      });
    
      timelines.push(tl);
    });
    
    // Clean up function
    return () => {
      timelines.forEach((tl: gsap.core.Tween) => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        tl.kill();
      });
    };
  }, [containerId]);

  return (
    <svg 
      ref={svgRef} 
      viewBox="0 0 1000 500" 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
    >
      <path 
        d="M 50 400 H 700 V 150 H 950" 
        stroke={colors[0]} 
        strokeWidth="10" 
        fill="none" 
      />
      <path 
        d="M 50 420 H 675 V 170 H 950" 
        stroke={colors[1]} 
        strokeWidth="10" 
        fill="none" 
      />
      <path 
        d="M 50 440 H 650 V 190 H 950" 
        stroke={colors[2]} 
        strokeWidth="10" 
        fill="none" 
      />
    </svg>
  );
};

export default AnimatedLines;