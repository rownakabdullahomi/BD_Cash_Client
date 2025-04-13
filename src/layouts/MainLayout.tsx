import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const MainLayout = () => {
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
      <nav className="w-full sticky backdrop-blur-md backdrop-saturate-150 bg-white/30 text-base shadow-md top-0 z-50">
        <Navbar />
      </nav>
      <main className="min-h-[calc(100vh-173px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
