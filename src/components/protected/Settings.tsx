"use client"

import { useState } from "react"
import {
  SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Clock,
  Target,
  Download,
  Upload,
  Trash2,
  Save,
  ChevronDown,
  Moon,
  Sun,
  Globe,
  Smartphone,
  Mail,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SettingsView() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    desktop: false,
    taskReminders: true,
    weeklyReports: true,
    achievements: true,
  })

  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    bio: "Desarrollador Frontend especializado en React y TypeScript",
    timezone: "America/Mexico_City",
    language: "es",
  })

  const [workSettings, setWorkSettings] = useState({
    dailyGoal: 8,
    workDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    startTime: "09:00",
    endTime: "17:00",
    breakDuration: 60,
    pomodoroLength: 25,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <SettingsIcon className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-800">Space - Configuración</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Juan Pérez</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-4xl mx-auto">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="work">Trabajo</TabsTrigger>
            <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            <TabsTrigger value="appearance">Apariencia</TabsTrigger>
            <TabsTrigger value="data">Datos</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Información Personal</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Cambiar foto
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Biografía</Label>
                  <Textarea
                    id="bio"
                    placeholder="Cuéntanos sobre ti..."
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Zona horaria</Label>
                    <Select
                      value={profile.timezone}
                      onValueChange={(value) => setProfile({ ...profile, timezone: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/Mexico_City">Ciudad de México (GMT-6)</SelectItem>
                        <SelectItem value="America/New_York">Nueva York (GMT-5)</SelectItem>
                        <SelectItem value="Europe/Madrid">Madrid (GMT+1)</SelectItem>
                        <SelectItem value="Asia/Tokyo">Tokio (GMT+9)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <Select
                      value={profile.language}
                      onValueChange={(value) => setProfile({ ...profile, language: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                    <Save className="w-4 h-4 mr-2" />
                    Guardar cambios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="work" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Configuración de Trabajo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dailyGoal">Meta diaria (horas)</Label>
                    <Input
                      id="dailyGoal"
                      type="number"
                      min="1"
                      max="24"
                      value={workSettings.dailyGoal}
                      onChange={(e) => setWorkSettings({ ...workSettings, dailyGoal: Number.parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="breakDuration">Duración de descanso (minutos)</Label>
                    <Input
                      id="breakDuration"
                      type="number"
                      min="5"
                      max="120"
                      value={workSettings.breakDuration}
                      onChange={(e) =>
                        setWorkSettings({ ...workSettings, breakDuration: Number.parseInt(e.target.value) })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startTime">Hora de inicio</Label>
                    <Input
                      id="startTime"
                      type="time"
                      value={workSettings.startTime}
                      onChange={(e) => setWorkSettings({ ...workSettings, startTime: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endTime">Hora de fin</Label>
                    <Input
                      id="endTime"
                      type="time"
                      value={workSettings.endTime}
                      onChange={(e) => setWorkSettings({ ...workSettings, endTime: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Días laborales</Label>
                  <div className="grid grid-cols-7 gap-2">
                    {[
                      { key: "monday", label: "L" },
                      { key: "tuesday", label: "M" },
                      { key: "wednesday", label: "X" },
                      { key: "thursday", label: "J" },
                      { key: "friday", label: "V" },
                      { key: "saturday", label: "S" },
                      { key: "sunday", label: "D" },
                    ].map((day) => (
                      <Button
                        key={day.key}
                        variant={workSettings.workDays.includes(day.key) ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          const newWorkDays = workSettings.workDays.includes(day.key)
                            ? workSettings.workDays.filter((d) => d !== day.key)
                            : [...workSettings.workDays, day.key]
                          setWorkSettings({ ...workSettings, workDays: newWorkDays })
                        }}
                      >
                        {day.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pomodoroLength">Duración Pomodoro (minutos)</Label>
                  <Input
                    id="pomodoroLength"
                    type="number"
                    min="15"
                    max="60"
                    value={workSettings.pomodoroLength}
                    onChange={(e) =>
                      setWorkSettings({ ...workSettings, pomodoroLength: Number.parseInt(e.target.value) })
                    }
                  />
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                    <Save className="w-4 h-4 mr-2" />
                    Guardar configuración
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Preferencias de Notificaciones</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-slate-600" />
                        <span className="font-medium">Notificaciones por email</span>
                      </div>
                      <p className="text-sm text-slate-600">Recibe actualizaciones importantes por correo</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4 text-slate-600" />
                        <span className="font-medium">Notificaciones push</span>
                      </div>
                      <p className="text-sm text-slate-600">Alertas en tiempo real en tu dispositivo</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-slate-600" />
                        <span className="font-medium">Notificaciones de escritorio</span>
                      </div>
                      <p className="text-sm text-slate-600">Alertas en tu navegador web</p>
                    </div>
                    <Switch
                      checked={notifications.desktop}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, desktop: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-slate-600" />
                        <span className="font-medium">Recordatorios de tareas</span>
                      </div>
                      <p className="text-sm text-slate-600">Avisos antes de que venza una tarea</p>
                    </div>
                    <Switch
                      checked={notifications.taskReminders}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, taskReminders: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-slate-600" />
                        <span className="font-medium">Reportes semanales</span>
                      </div>
                      <p className="text-sm text-slate-600">Resumen de tu productividad cada semana</p>
                    </div>
                    <Switch
                      checked={notifications.weeklyReports}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-slate-600" />
                        <span className="font-medium">Logros y medallas</span>
                      </div>
                      <p className="text-sm text-slate-600">Celebra tus logros y metas alcanzadas</p>
                    </div>
                    <Switch
                      checked={notifications.achievements}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, achievements: checked })}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                    <Save className="w-4 h-4 mr-2" />
                    Guardar preferencias
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="w-5 h-5" />
                  <span>Apariencia</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      {darkMode ? (
                        <Moon className="w-4 h-4 text-slate-600" />
                      ) : (
                        <Sun className="w-4 h-4 text-slate-600" />
                      )}
                      <span className="font-medium">Modo oscuro</span>
                    </div>
                    <p className="text-sm text-slate-600">Cambia entre tema claro y oscuro</p>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>

                <div className="space-y-2">
                  <Label>Color de acento</Label>
                  <div className="flex space-x-2">
                    {[
                      { name: "Azul-Púrpura", colors: "from-blue-500 to-purple-600" },
                      { name: "Verde", colors: "from-green-500 to-emerald-600" },
                      { name: "Naranja", colors: "from-orange-500 to-red-600" },
                      { name: "Rosa", colors: "from-pink-500 to-rose-600" },
                    ].map((theme, index) => (
                      <button
                        key={index}
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${theme.colors} border-2 ${
                          index === 0 ? "border-slate-400" : "border-transparent"
                        }`}
                        title={theme.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                    <Save className="w-4 h-4 mr-2" />
                    Aplicar cambios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Gestión de Datos</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                    <h3 className="font-medium text-blue-800 mb-2">Exportar datos</h3>
                    <p className="text-sm text-blue-700 mb-3">
                      Descarga todos tus datos en formato JSON para respaldo o migración.
                    </p>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar datos
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                    <h3 className="font-medium text-green-800 mb-2">Importar datos</h3>
                    <p className="text-sm text-green-700 mb-3">
                      Restaura tus datos desde un archivo de respaldo previo.
                    </p>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Importar datos
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg border border-red-200 bg-red-50">
                    <h3 className="font-medium text-red-800 mb-2">Eliminar cuenta</h3>
                    <p className="text-sm text-red-700 mb-3">
                      Elimina permanentemente tu cuenta y todos los datos asociados. Esta acción no se puede deshacer.
                    </p>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar cuenta
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">Cambiar contraseña</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Contraseña actual</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nueva contraseña</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar nueva contraseña</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                      <Lock className="w-4 h-4 mr-2" />
                      Cambiar contraseña
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
