
import { Navigate } from "react-router-dom"
import useRole from "../hooks/useRole"
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const UserRoute = ({ children }: PrivateRouteProps) => {
    const [type, isLoading] = useRole()
  
    if (isLoading || !type) return <p>Loading...</p>
    if (type === 'user') return children
    return <Navigate to='/' replace />
  }
 
  export default UserRoute