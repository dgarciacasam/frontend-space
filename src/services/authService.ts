import type { LoginRequest, User } from '@/types/types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/auth'

interface RegisterData {
  email: string
  password: string
  username: string
}

interface AuthResponse {
  user: User
  token: string
}

interface TokenPayload {
  username?: string
  email?: string
  sub?: string
  exp?: number
  iat?: number
  [key: string]: unknown
}

// Función para decodificar token JWT
function decodeToken(token: string): TokenPayload | null {
  try {
    // Los tokens JWT tienen 3 partes separadas por puntos
    const parts = token.split('.')
    if (parts.length !== 3) {
      return null
    }

    // Decodificar la segunda parte (payload) que está en base64
    const payload = parts[1]
    // Agregar padding si es necesario para base64
    const paddedPayload = payload + '='.repeat((4 - (payload.length % 4)) % 4)
    const decodedPayload = atob(paddedPayload.replace(/-/g, '+').replace(/_/g, '/'))

    return JSON.parse(decodedPayload)
  } catch (error) {
    console.error('Error al decodificar token:', error)
    return null
  }
}

export const authService = {
  // Función para obtener el username del token actual
  getUsernameFromToken(): string | null {
    const token = localStorage.getItem('token')
    if (!token) {
      return null
    }

    const payload = decodeToken(token)
    if (!payload) {
      return null
    }

    // Buscar el username en diferentes campos posibles del payload
    return payload.username || payload.email || payload.sub || null
  },

  // Función para obtener toda la información del payload del token
  getTokenPayload(): TokenPayload | null {
    const token = localStorage.getItem('token')
    if (!token) {
      return null
    }

    return decodeToken(token)
  },

  async login(credentials: LoginRequest): Promise<AuthResponse> {
    console.log('Login:', credentials)
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error('Error en el login')
    }

    const data = await response.json()

    // Guardar el token en localStorage
    localStorage.setItem('token', data.token)

    return data
  },

  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      throw new Error('Error en el registro')
    }

    const data = await response.json()

    // Guardar el token en localStorage
    localStorage.setItem('token', data.token)

    return data
  },

  async logout(): Promise<void> {
    const token = localStorage.getItem('token')

    if (token) {
      try {
        await fetch(`${API_BASE_URL}/logout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
      } catch (error) {
        console.error('Error al hacer logout en el servidor:', error)
      }
    }

    // Limpiar el token del localStorage
    localStorage.removeItem('token')
  },

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('token')

    if (!token) {
      return null
    }

    return { id: 1, username: 'Monica Lidon Mi bolita', email: 'dani123@gmail.com' }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (!response.ok) {
        localStorage.removeItem('token')
        return null
      }

      const user = await response.json()
      return user
    } catch (error) {
      console.error('Error al obtener usuario actual:', error)
      localStorage.removeItem('token')
      return null
    }
  }
}
