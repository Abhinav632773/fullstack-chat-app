import React, { useEffect } from 'react'
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LogInPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"
import Navbar from './components/Navbar'
import { useAuthStore } from './store/useAuthStore'
import {Loader} from "lucide-react"
import { Toaster } from "react-hot-toast";
import { Routes ,Route, Navigate} from 'react-router-dom'


const App = () => {
  const {authUser,checkAuth, isCheckingAuth,onlineUsers} = useAuthStore()
  useEffect(() => {
    checkAuth();
  }, [checkAuth])


if(isCheckingAuth&& !authUser) return (
  <div className='flex items-center justify-center h-screen'>
    <Loader className="size -10 animate-spin"/>
  </div>
)

  return (
  <div data-theme = "retro">
    <div>
    <Navbar/>
    </div>
    <div className='mt-16'>
    <Routes>
        <Route path='/'element={authUser?<HomePage/>:<Navigate to="/login"/>}/>
        <Route path='/signup'element={!authUser?<SignUpPage/>:<Navigate to="/"/>}/>
        <Route path='/login'element={!authUser?<LogInPage/>:<Navigate to="/"/>}/>
        <Route path='/settings'element={<SettingsPage/>}/>
        <Route path='/profile'element={authUser?<ProfilePage/>:<Navigate to="/login"/>}/>
    </Routes>
    <Toaster/>
    </div>


  </div>
    )
}

export default App
