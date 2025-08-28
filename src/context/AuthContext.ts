import type { User } from '@/types/types'
import { createContext } from 'react'

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<User>
  logout: () => Promise<void>
  register: (username: string, email: string, password: string) => Promise<User>
}

export const AuthContext = createContext<AuthContextType | null>(null)
