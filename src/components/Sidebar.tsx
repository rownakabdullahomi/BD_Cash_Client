import { BiHelpCircle, BiLogOut } from "react-icons/bi";
import { FaTimes, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

interface SidebarProps {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  // Define menus based on userType
  const menuItems = [
    {
      name: "Transaction Requests",
      icon: <BiHelpCircle />,
      path: "requests",
    },

    { name: "Profile", icon: <FaUser />, path: "profile" },
  ];
  return (
    <aside className="w-64  bg-base-300 text-black font-Gilda h-full shadow-lg flex flex-col">
      {/* Header Section */}
      <div className="p-6 text-center flex lg:block justify-between">
        <div>
          <h2 className="text-2xl font-bold">Admin</h2>
          <p className="text-sm text-black font-Inter mt-2">Welcome</p>
        </div>
        {/* Close Button for Mobile */}
        <div className=" lg:hidden ">
          <button
            onClick={toggleSidebar}
            className="text-red-500 text-sm focus:outline-none rounded-full border border-red-500 p-2"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col flex-grow mt-2 mx-2">
        {/* Main menu items */}
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li id="sidebar" key={index}>
              <NavLink
                to={item.path}
                className="flex items-center px-4 py-1 font-Inter rounded-md transition"
              >
                <span className="text-lg mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="divider divider-neutral px-3 "></div>
        {/* Back to Home link */}
        <ul className="">
          <li
            // onClick={userLogout}
            className="cursor-pointer flex items-center px-4 rounded-md transition"
          >
            <span className="text-lg mr-3">
              <BiLogOut />
            </span>
            <span className="font-medium font-Inter">Logout</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
