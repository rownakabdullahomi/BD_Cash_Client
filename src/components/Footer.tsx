import { FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  const socialLinks = [
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" }
  ];

  return (
    <footer className="px-6 md:px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white  w-full">
      <div className="  flex flex-col justify-between py-6">
        {/* Main Content */}
        <div className="flex justify-between">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-green-500">BD_</span>
                <span className="text-2xl font-bold text-red-500">Cash</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Secure payment solutions for Bangladesh
            </p>
             {/* Quick Links - Made more compact */}
          {/* <div className="flex flex-col items-center">
            <h3 className="text-md font-semibold mb-2 text-white">Links</h3>
            <ul className="text-center">
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 text-sm transition">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-400 text-sm transition">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 text-sm transition">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm transition">Privacy</Link></li>
            </ul>
          </div> */}
          </div>

         

          {/* Contact Info - Made more compact */}
          {/* <div className="flex flex-col items-center md:items-end">
            <h3 className="text-md font-semibold mb-2 text-white">Contact</h3>
            <div className="text-gray-400 text-sm space-y-1 text-center md:text-right">
              <p>info@bdcash.com</p>
              <p>+880 1XXX XXX XXX</p>
            </div>
          </div> */}

          {/* Social Links & Copyright - Combined to save space */}
        <div className="flex flex-col items-end space-y-3">
          <div className="flex space-x-5 ">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center text-gray-400 text-xs">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2">
              <p>© {new Date().getFullYear()} BD_Cash</p>
              <span className="hidden md:block">•</span>
              <p className="flex items-center">
                Made with <FaHeart className="mx-1 text-red-500 text-xs" /> by Rownak
              </p>
            </div>
          </div>
        </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;