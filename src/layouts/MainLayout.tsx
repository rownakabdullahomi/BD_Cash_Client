import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

import useRole from "../hooks/useRole";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [type, isLoading] = useRole();
  console.log(type);
  return (
    <div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        }}
      />
      <nav className="w-full fixed backdrop-blur-md backdrop-saturate-150 bg-white/30 text-base shadow-md top-0 z-50">
        <Navbar></Navbar>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
