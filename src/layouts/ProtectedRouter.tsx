import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  console.log(user)
  return user ? children : <Navigate to="/" />
}

export default ProtectedRoute
