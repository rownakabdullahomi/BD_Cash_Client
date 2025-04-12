import { Toaster } from "react-hot-toast"
import Navbar from "../components/Navbar"
import Home from "../pages/home/Home"


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
        <nav>
            <Navbar/>
        </nav>
        <main>
          <Home></Home>
        </main>
        <footer></footer>
    </div>
  )
}

export default MainLayout