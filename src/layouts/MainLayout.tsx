import { Toaster } from "react-hot-toast"
import Navbar from "../components/Navbar"


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
        <main></main>
        <footer></footer>
    </div>
  )
}

export default MainLayout