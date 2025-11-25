import React, { useState } from 'react'
import { SideBar } from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { dummyUserData } from '../assets/assets'
import Loading from '../components/Loading'
const Layout = () => {
  const [sidebarOpen,setSidebarOpen]=useState(false)
  const user = dummyUserData
  return  user ? (
    
    <div className='w-full flex h-screen'>
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className='flex-1 bg-slate-50'>
        <Outlet/>
        </div>
        {
          sidebarOpen ? <X className='absolute top-3 right-3 p- scale-z-100
          w-10 h-10 text-gray-600 sm:hidden' onClick={()=>setSidebarOpen(false)}/>
          :
          <Menu className='absolute top-3 right-3 p- scale-z-100
          w-10 h-10 text-gray-600 sm:hidden'onClick={()=>setSidebarOpen(true)}/>
        }
        </div>
  ) :(
    <Loading />
  )
}

export default Layout