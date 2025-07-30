import type { User } from '@/types/types'
import { createContext, useContext, useState } from 'react'

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  register: (user: User) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (user: User) => setUser(user)
  const logout = () => setUser(null)
  const register = (user: User) => setUser(user) // Simula registro e inicio de sesión

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
