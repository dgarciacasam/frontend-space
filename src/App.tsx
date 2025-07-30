import './App.css'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './layouts/ProtectedRouter'
//import { Home } from './components/Home'
import Dashboard from './components/protected/Dashboard'

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  {/*<Home />*/}
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}
