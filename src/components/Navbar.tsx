import { Link, NavLink } from "react-router-dom";
import userImage from "../assets/user.jpg";
import { useAuthContext } from "../providers/AuthProvider";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {


  const { user, userLogout } = useAuthContext();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("Logout Successful!");
      })
      .catch((error: Error) => {
        toast.error("Error logging out! " + error.message);
      });
  };

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

          {/* Profile Dropdown */}
          <div
            ref={profileDropdownRef}
            className="dropdown dropdown-end relative"
          >
            <button
              onClick={toggleProfileDropdown}
              className="btn btn-ghost btn-circle avatar"
              aria-label="Toggle Profile Dropdown"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 bg-gray-200">
                {user && user.email ? (
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile"
                    src={user.photoURL || userImage}
                    className="w-full h-full object-cover animate-pulse"
                  />
                ) : (
                  <img src={userImage} alt="Default User" />
                )}
              </div>
            </button>
            {profileDropdownOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {/* Username (non-clickable) */}
                {user?.email && (
                  <li>
                    <div
                      id="name"
                      className="justify-between text-base-content font-semibold"
                    >
                      {user.displayName || user.email}
                    </div>
                  </li>
                )}

                <li>
                  {user?.email ? (
                    <button
                      onClick={handleLogout}
                      className="text-error font-semibold"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login" className="text-primary font-semibold">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;