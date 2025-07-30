import type { User } from '@/types/types'

export interface LoginResponse {
  user: User
  token: string
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  // Simula una llamada a un backend con un pequeño delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock de usuario
  return {
    user: {
      id: 1,
      email,
      name: 'Usuario Mock'
    },
    token: 'mocked-jwt-token'
  }
}
