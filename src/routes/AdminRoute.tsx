
import { Navigate } from "react-router-dom"
import useRole from "../hooks/useRole"
import { ReactNode } from "react";
import Loading from "../pages/Loading";

interface PrivateRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: PrivateRouteProps) => {
    const [type, isLoading] = useRole()
  
    if (isLoading || !type) return <Loading/>
    if (type === 'admin') return children
    return <Navigate to='/' replace />
  }
 
  export default AdminRoute