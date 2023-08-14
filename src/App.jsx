import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import Layout from "./Components/Layout"
import Home from './Components/Home'
import Admin from './Components/Admin'
import Profile from './Components/Profile'
import RequireAuth from './Components/RequireAuth'
import Missing from './Components/Missing'

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />

        {/* Auth Required Routes */}
        <Route element={<RequireAuth allowedRoles={[1984]}/>}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[2001, 1984]}/>}>
          <Route path="profile" element={<Profile />} />
        </Route>
        

        {/** catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  )
}

export default App
