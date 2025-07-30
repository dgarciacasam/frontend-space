import { useState } from "react"
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  Users,
  Bell,
  User,
  Settings,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const events = [
    {
      id: 1,
      title: "Reunión de equipo",
      time: "09:00 - 10:00",
      type: "meeting",
      color: "bg-blue-500",
      attendees: 5,
      location: "Sala de juntas",
    },
    {
      id: 2,
      title: "Sesión de diseño",
      time: "10:30 - 12:00",
      type: "work",
      color: "bg-purple-500",
      attendees: 3,
      location: "Oficina",
    },
    {
      id: 3,
      title: "Llamada con cliente",
      time: "14:00 - 15:00",
      type: "call",
      color: "bg-green-500",
      attendees: 2,
      location: "Virtual",
    },
    {
      id: 4,
      title: "Revisión de proyecto",
      time: "16:00 - 17:30",
      type: "review",
      color: "bg-orange-500",
      attendees: 4,
      location: "Sala de conferencias",
    },
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-800">Space - Calendario</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Evento
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => navigateMonth(-1)}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => navigateMonth(1)}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {dayNames.map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-slate-600">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentDate).map((day, index) => (
                    <div
                      key={index}
                      className={`p-2 h-20 border border-slate-200 rounded-lg cursor-pointer transition-colors ${
                        day
                          ? day.toDateString() === selectedDate.toDateString()
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                            : day.toDateString() === new Date().toDateString()
                              ? "bg-blue-50 border-blue-200"
                              : "hover:bg-slate-50"
                          : "bg-slate-50"
                      }`}
                      onClick={() => day && setSelectedDate(day)}
                    >
                      {day && (
                        <>
                          <div className="text-sm font-medium">{day.getDate()}</div>
                          {day.getDate() === 15 && (
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mb-1"></div>
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  Eventos -{" "}
                  {selectedDate.toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full ${event.color} mt-1`} />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800">{event.title}</h4>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center text-sm text-slate-600">
                              <Clock className="w-3 h-3 mr-1" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-slate-600">
                              <MapPin className="w-3 h-3 mr-1" />
                              {event.location}
                            </div>
                            <div className="flex items-center text-sm text-slate-600">
                              <Users className="w-3 h-3 mr-1" />
                              {event.attendees} participantes
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
