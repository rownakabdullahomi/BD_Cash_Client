import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../lottie/404.json";
import { FaHome } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="px-6 md:px-4 my-10 flex flex-col items-center justify-center h-[calc(100vh-173px)]">
      <div className="text-center mx-auto">
        <div className="w-96 mx-auto">
          <Lottie animationData={error404} loop={true} />
        </div>
        
        <h2 className="text-5xl font-extrabold text-secondary mt-6 animate-bounce">
          404 - Page Not Found
        </h2>
        <p className="text-lg mt-4 font-semibold text-red-500">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link 
          to="/" 
          className="mt-6 btn btn-outline btn-primary transform hover:scale-105 transition duration-300 "
        >
          <FaHome size={18} /> Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error404;
