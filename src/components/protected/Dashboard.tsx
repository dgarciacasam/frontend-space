import { useState } from 'react'
import {
  Calendar,
  Play,
  Pause,
  Square,
  Plus,
  BarChart3,
  Settings,
  User,
  Bell,
  ChevronDown,
  Timer,
  Target,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Dashboard() {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState('02:34:15')
  const [currentTask, setCurrentTask] = useState('Diseño de interfaz')

  const todayTasks = [
    {
      id: 1,
      title: 'Reunión de equipo',
      time: '09:00 - 10:00',
      status: 'completed',
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Diseño de interfaz',
      time: '10:30 - 12:00',
      status: 'in-progress',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Revisión de código',
      time: '14:00 - 15:30',
      status: 'pending',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Documentación',
      time: '16:00 - 17:00',
      status: 'pending',
      color: 'bg-orange-500'
    }
  ]

  const weeklyStats = [
    { day: 'L', hours: 8, completed: true },
    { day: 'M', hours: 7.5, completed: true },
    { day: 'X', hours: 6, completed: false },
    { day: 'J', hours: 8.5, completed: true },
    { day: 'V', hours: 4, completed: false },
    { day: 'S', hours: 0, completed: false },
    { day: 'D', hours: 0, completed: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-800">Space</h1>
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
                  <Settings className="w-4 h-4 mr-2" />
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timer Section */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Cronómetro Activo</span>
                  <Badge variant={isTimerRunning ? 'default' : 'secondary'}>
                    {isTimerRunning ? 'En progreso' : 'Pausado'}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-slate-800 mb-2">
                    {currentTime}
                  </div>
                  <p className="text-slate-600 mb-6">{currentTask}</p>

                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      {isTimerRunning ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pausar
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Iniciar
                        </>
                      )}
                    </Button>
                    <Button variant="outline">
                      <Square className="w-4 h-4 mr-2" />
                      Detener
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Tareas de Hoy</span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Tarea
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center space-x-4 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <div className={`w-3 h-3 rounded-full ${task.color}`} />
                      <div className="flex-1">
                        <h4
                          className={`font-medium ${task.status === 'completed' ? 'line-through text-slate-500' : 'text-slate-800'}`}
                        >
                          {task.title}
                        </h4>
                        <p className="text-sm text-slate-600">{task.time}</p>
                      </div>
                      <Badge
                        variant={
                          task.status === 'completed'
                            ? 'default'
                            : task.status === 'in-progress'
                              ? 'secondary'
                              : 'outline'
                        }
                      >
                        {task.status === 'completed'
                          ? 'Completada'
                          : task.status === 'in-progress'
                            ? 'En progreso'
                            : 'Pendiente'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resumen de Hoy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Timer className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-slate-600">Tiempo trabajado</span>
                  </div>
                  <span className="font-semibold">6h 45m</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-slate-600">Tareas completadas</span>
                  </div>
                  <span className="font-semibold">3/6</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-slate-600">Productividad</span>
                  </div>
                  <span className="font-semibold">85%</span>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Meta diaria</span>
                    <span>6h 45m / 8h</span>
                  </div>
                  <Progress value={84} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Weekly Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Esta Semana</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {weeklyStats.map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-slate-600 mb-1">{day.day}</div>
                      <div
                        className={`h-12 rounded-md flex items-end justify-center text-xs font-medium ${
                          day.completed
                            ? 'bg-gradient-to-t from-blue-500 to-purple-600 text-white'
                            : day.hours > 0
                              ? 'bg-slate-300 text-slate-700'
                              : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {day.hours > 0 ? `${day.hours}h` : ''}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-slate-600">Total: 34h esta semana</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Ver Calendario
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Reportes
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  Configuración
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
