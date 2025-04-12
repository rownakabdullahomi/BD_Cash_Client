import { Toaster } from "react-hot-toast"
import Navbar from "../components/Navbar"

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
        <nav>
            <Navbar/>
        </nav>
        <main>
          <Outlet/>
        </main>
        <footer></footer>
    </div>
  )
}

export default MainLayout