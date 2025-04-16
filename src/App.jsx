import './App.css'
import { Route, Routes } from "react-router-dom"
import Signup from './components/signup'
import { Login } from './components/login'
import Dashboard from './components/dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<Dashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
