import "../styles/Loader.css";

const Loader = () => {
  return <>
<div className="abtik-loader-container">
    

      <div className="abtik-loader">
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="abtik-logo">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f56015" />
              <stop offset="100%" stopColor="#ff8c54" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <circle className="glow-center" cx="250" cy="150" r="30" opacity="0.3" />
          <circle className="rotating-circle rotate-1" cx="250" cy="150" r="80" />
          <circle className="rotating-circle rotate-2" cx="250" cy="150" r="60" />

          <g>
            <circle className="particle" cx="240" cy="210" r="3" style={{ animationDelay: '0.2s' }} />
            <circle className="particle" cx="260" cy="210" r="4" style={{ animationDelay: '0.5s' }} />
            <circle className="particle" cx="250" cy="210" r="3" style={{ animationDelay: '0.8s' }} />
            <circle className="particle" cx="230" cy="210" r="2" style={{ animationDelay: '1.1s' }} />
            <circle className="particle" cx="270" cy="210" r="3" style={{ animationDelay: '1.4s' }} />
          </g>

          <circle className="logo-circle" cx="250" cy="150" r="50" />
          <text x="250" y="165" textAnchor="middle" className="logo-letters" fontSize="36">AD</text>
          <text x="250" y="250" textAnchor="middle" className="logo-text" fontSize="40">ABTIK DIGITAL</text>
          <text x="250" y="280" textAnchor="middle" className="tagline"> Where Ideas Go Digital</text>
        </svg>
      </div>
    </div>

  </>;
};
export default Loader;
