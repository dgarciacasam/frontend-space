"use client"

import { useState } from "react"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Clock,
  Target,
  Calendar,
  Award,
  Bell,
  User,
  Settings,
  ChevronDown,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ReportsView() {
  const [selectedPeriod, setSelectedPeriod] = useState("week")

  const weeklyData = [
    { day: "Lun", hours: 8.5, tasks: 12, productivity: 92 },
    { day: "Mar", hours: 7.2, tasks: 10, productivity: 85 },
    { day: "Mié", hours: 9.1, tasks: 15, productivity: 95 },
    { day: "Jue", hours: 6.8, tasks: 8, productivity: 78 },
    { day: "Vie", hours: 8.0, tasks: 11, productivity: 88 },
    { day: "Sáb", hours: 4.5, tasks: 6, productivity: 82 },
    { day: "Dom", hours: 2.0, tasks: 3, productivity: 75 },
  ]

  const monthlyStats = {
    totalHours: 186.5,
    totalTasks: 124,
    completedTasks: 108,
    avgProductivity: 87,
    bestDay: "Miércoles",
    mostProductiveHour: "10:00 AM",
  }

  const projectBreakdown = [
    { name: "Diseño UI/UX", hours: 45.2, percentage: 24, color: "bg-blue-500" },
    { name: "Desarrollo Frontend", hours: 38.7, percentage: 21, color: "bg-purple-500" },
    { name: "Reuniones", hours: 32.1, percentage: 17, color: "bg-green-500" },
    { name: "Documentación", hours: 28.5, percentage: 15, color: "bg-orange-500" },
    { name: "Testing", hours: 22.8, percentage: 12, color: "bg-red-500" },
    { name: "Otros", hours: 19.2, percentage: 11, color: "bg-gray-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-800">Space - Reportes</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
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
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="productivity">Productividad</TabsTrigger>
            <TabsTrigger value="projects">Proyectos</TabsTrigger>
            <TabsTrigger value="goals">Objetivos</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Horas Totales</p>
                      <p className="text-2xl font-bold text-slate-800">{monthlyStats.totalHours}h</p>
                    </div>
                    <Clock className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-500">+12%</span>
                    <span className="text-slate-600 ml-1">vs mes anterior</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Tareas Completadas</p>
                      <p className="text-2xl font-bold text-slate-800">{monthlyStats.completedTasks}</p>
                    </div>
                    <Target className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-500">+8%</span>
                    <span className="text-slate-600 ml-1">vs mes anterior</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Productividad</p>
                      <p className="text-2xl font-bold text-slate-800">{monthlyStats.avgProductivity}%</p>
                    </div>
                    <Award className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    <span className="text-red-500">-3%</span>
                    <span className="text-slate-600 ml-1">vs mes anterior</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Mejor Día</p>
                      <p className="text-2xl font-bold text-slate-800">{monthlyStats.bestDay}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="text-slate-600">9.1h promedio</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Actividad Semanal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyData.map((day, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium text-slate-600">{day.day}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-slate-600">{day.hours}h</span>
                          <span className="text-sm text-slate-600">{day.tasks} tareas</span>
                        </div>
                        <Progress value={(day.hours / 10) * 100} className="h-2" />
                      </div>
                      <Badge
                        variant={day.productivity >= 90 ? "default" : day.productivity >= 80 ? "secondary" : "outline"}
                      >
                        {day.productivity}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribución por Proyecto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectBreakdown.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-800">{project.name}</span>
                        <span className="text-sm text-slate-600">
                          {project.hours}h ({project.percentage}%)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={project.percentage * 4} className="flex-1 h-2" />
                        <div className={`w-3 h-3 rounded-full ${project.color}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="productivity" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Horas Más Productivas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { hour: "10:00 AM", productivity: 95, tasks: 8 },
                      { hour: "11:00 AM", productivity: 92, tasks: 7 },
                      { hour: "09:00 AM", productivity: 88, tasks: 6 },
                      { hour: "02:00 PM", productivity: 85, tasks: 5 },
                      { hour: "03:00 PM", productivity: 82, tasks: 4 },
                    ].map((slot, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                        <span className="font-medium">{slot.hour}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-slate-600">{slot.tasks} tareas</span>
                          <Badge variant="default">{slot.productivity}%</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tendencias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-800">Mejora Continua</span>
                      </div>
                      <p className="text-sm text-green-700">
                        Tu productividad ha mejorado un 15% en las últimas 4 semanas.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Patrón Óptimo</span>
                      </div>
                      <p className="text-sm text-blue-700">Trabajas mejor entre las 9:00 AM y 12:00 PM.</p>
                    </div>

                    <div className="p-4 rounded-lg border border-orange-200 bg-orange-50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="w-4 h-4 text-orange-600" />
                        <span className="font-medium text-orange-800">Recomendación</span>
                      </div>
                      <p className="text-sm text-orange-700">Considera programar tareas complejas en las mañanas.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Objetivos Mensuales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Horas trabajadas</span>
                      <span className="text-sm text-slate-600">186.5h / 200h</span>
                    </div>
                    <Progress value={93} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Tareas completadas</span>
                      <span className="text-sm text-slate-600">108 / 120</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Productividad promedio</span>
                      <span className="text-sm text-slate-600">87% / 85%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Logros Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: "Semana Perfecta", description: "7 días consecutivos cumpliendo objetivos", icon: "🏆" },
                      {
                        title: "Madrugador",
                        description: "Iniciaste trabajo antes de las 8 AM por 5 días",
                        icon: "🌅",
                      },
                      { title: "Multitarea", description: "Completaste 15 tareas en un solo día", icon: "⚡" },
                      { title: "Constancia", description: "30 días seguidos usando la aplicación", icon: "📅" },
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <h4 className="font-medium text-slate-800">{achievement.title}</h4>
                          <p className="text-sm text-slate-600">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
