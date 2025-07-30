import { Calendar, Clock, Eye, EyeOff, User, Mail, Lock, Globe } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 84 }).map((_, i) => (
            <div key={i} className="border border-gray-300 rounded"></div>
          ))}
        </div>
      </div>

      <Card className="w-full max-w-lg relative z-10 shadow-xl border-0 bg-white/80 backdrop-blur-sm my-8">
        <CardHeader className="text-center space-y-4 pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">Únete a Space</CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Comienza a organizar tu tiempo de manera inteligente
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            {/* Nombre completo */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Nombre completo
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Tu nombre completo"
                  className="h-11 pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Correo electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="h-11 pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Contraseña */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo 8 caracteres"
                  className="h-11 pl-10 pr-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirmar contraseña */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirmar contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Repite tu contraseña"
                  className="h-11 pl-10 pr-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Zona horaria */}
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-sm font-medium text-gray-700">
                Zona horaria
              </Label>
              <Select>
                <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <Globe className="w-4 h-4 text-gray-400 mr-2" />
                  <SelectValue placeholder="Selecciona tu zona horaria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="america/mexico_city">Ciudad de México (GMT-6)</SelectItem>
                  <SelectItem value="america/bogota">Bogotá (GMT-5)</SelectItem>
                  <SelectItem value="america/lima">Lima (GMT-5)</SelectItem>
                  <SelectItem value="america/santiago">Santiago (GMT-3)</SelectItem>
                  <SelectItem value="america/argentina/buenos_aires">
                    Buenos Aires (GMT-3)
                  </SelectItem>
                  <SelectItem value="europe/madrid">Madrid (GMT+1)</SelectItem>
                  <SelectItem value="america/new_york">Nueva York (GMT-5)</SelectItem>
                  <SelectItem value="america/los_angeles">Los Ángeles (GMT-8)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tipo de usuario */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">
                ¿Cómo planeas usar Space?
              </Label>
              <RadioGroup defaultValue="personal" className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal" className="flex-1 cursor-pointer">
                    <div className="font-medium">Uso personal</div>
                    <div className="text-sm text-gray-500">
                      Organizar mi tiempo y tareas personales
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="work" id="work" />
                  <Label htmlFor="work" className="flex-1 cursor-pointer">
                    <div className="font-medium">Trabajo</div>
                    <div className="text-sm text-gray-500">
                      Gestionar proyectos y reuniones laborales
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student" className="flex-1 cursor-pointer">
                    <div className="font-medium">Estudiante</div>
                    <div className="text-sm text-gray-500">Organizar clases, tareas y estudios</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Términos y condiciones */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  Acepto los{' '}
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    términos y condiciones
                  </button>{' '}
                  y la{' '}
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    política de privacidad
                  </button>
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter" className="mt-1" />
                <Label htmlFor="newsletter" className="text-sm text-gray-600 leading-relaxed">
                  Quiero recibir consejos de productividad y actualizaciones por email (opcional)
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg">
              <Clock className="w-4 h-4 mr-2" />
              Crear mi cuenta
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">O regístrate con</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-11 border-gray-200 hover:bg-gray-50">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="h-11 border-gray-200 hover:bg-gray-50">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <button
                className="text-blue-600 hover:text-blue-700 font-medium"
                onClick={() => navigate('/login')}
              >
                Inicia sesión
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
