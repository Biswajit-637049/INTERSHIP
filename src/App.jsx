import './App.css'
import { Route, Routes } from "react-router-dom"
import Signup from './components/signup'
import { Login } from './components/login'
import Dashboard from './components/dashboard'
import ProtectedRoute from './components/protectedroute'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
