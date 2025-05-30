import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold text-[#f56015]">404</h1>
        <h2 className="text-2xl font-semibold">Oops! Page Not Found</h2>
        <p className="text-lg max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-[#f56015] text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-[#d14e10] transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
