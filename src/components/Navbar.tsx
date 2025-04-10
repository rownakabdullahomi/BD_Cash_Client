import { Link, NavLink } from "react-router-dom";
import userImage from "../assets/user.gif";
import { PiBellSimpleRinging } from "react-icons/pi";

const Navbar = () => {
  const notificationCount = 3; // Example notification count

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="px-4 lg:px-6">
      <div className="navbar justify-between py-2">
        {/* Navbar Start */}
        <div className="flex items-center justify-between gap-5 flex-auto">
          <Link
            to="/"
            className=" text-2xl font-bold font-Gilda tracking-tight relative group"
          >
            <span className="absolute inset-0 blur-lg opacity-30  transition-opacity duration-300"></span>
            <div className="relative duration-300 font-bold">
              <span className="text-green-600">BD_</span>
              <span className="text-red-600">Cash</span>
            </div>
          </Link>

          <div className="">
            <ul className="menu menu-horizontal font-bold text-sm font-Inter">
              {links}
            </ul>
          </div>
        </div>

        {/* Navbar End */}
        <div className="flex items-center justify-end space-x-4 flex-auto">
          {/* notification icon */}
          <button className="relative text-2xl p-2 mt-1">
            <PiBellSimpleRinging />
            {/* Notification badge */}
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 text-xs font-semibold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          {/* Profile Dropdown */}
          <div
            // ref={profileDropdownRef}
            className="dropdown dropdown-end relative"
          >
            <button
              className="btn btn-ghost btn-circle avatar"
              aria-label="Toggle Profile Dropdown"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 bg-gray-200">
                <img src={userImage} alt="" className="object-cover" />
              </div>
            </button>
            <ul className="menu menu-sm font-Inter font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
