
import { Navigate } from "react-router-dom"
import useRole from "../hooks/useRole"
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: PrivateRouteProps) => {
    const [type, isLoading] = useRole()
  
    if (isLoading) return <p>Loading...</p>
    if (type === 'admin') return children
    return <Navigate to='/' replace />
  }
 
  export default AdminRoute