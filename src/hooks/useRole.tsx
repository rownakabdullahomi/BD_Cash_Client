import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import { useAuthContext } from '../providers/AuthProvider'


const useRole = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useAuthContext()
  const { data: type, isLoading } = useQuery({
    queryKey: ['type', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/role/${user?.email}`)
      return data.type
    },
  })
//   console.log(userType)
  return [type, isLoading]
}

export default useRole