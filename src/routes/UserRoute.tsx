
import { Navigate } from "react-router-dom"
import useRole from "../hooks/useRole"
import { ReactNode } from "react";
import Loading from "../pages/Loading";

interface PrivateRouteProps {
  children: ReactNode;
}

const UserRoute = ({ children }: PrivateRouteProps) => {
    const [type, isLoading] = useRole()
  
    if (isLoading || !type) return <Loading/>
    if (type === 'user') return children
    return <Navigate to='/' replace />
  }
 
  export default UserRoute