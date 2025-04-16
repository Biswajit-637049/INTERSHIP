import './App.css'
import { Home } from './components/home'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Signup from './components/signup'
import { Login } from './components/login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sign-up' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
