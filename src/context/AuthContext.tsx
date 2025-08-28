import type { User } from '@/types/types'
import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { authService } from '@/services/authService'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Verificar si hay un usuario autenticado al cargar la app
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser()
        setUser(currentUser)
      } catch (error) {
        console.error('Error al verificar autenticación:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (username: string, password: string) => {
    const { user } = await authService.login({ username, password })
    setUser(user)
    return user
  }

  const logout = async () => {
    await authService.logout()
    setUser(null)
  }

  const register = async (username: string, email: string, password: string) => {
    const { user } = await authService.register({ username, email, password })
    setUser(user)
    return user
  }

  if (loading) {
    return <div>Cargando...</div> // O un componente de loading
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContext }
