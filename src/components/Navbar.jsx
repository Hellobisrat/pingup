import React from 'react'
import { Zap,DotIcon,Home, Calendar,MessageSquare,CreditCard, User, Settings } from 'lucide-react';


const Navbar = () => {
  return (
    <div className=' top-0  left-0 right-0 z-50 m-6 w-[90%] md:p-2 bg-purple-50 rounded-4xl flex items-center justify-between mx-auto'>
     <div className='flex pl-2 items-center justify-center gap-2'>
     <Zap className='w-5 h-5 text-green-500'/>
    <div className="relative flex items-center justify-center gap-2 ">
  <span className="text-gray-800 font-bold mr-1">Tech</span>
   <DotIcon className="w-12 h-12 text-green-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3" />
   <span className="text-gray-800 font-bold">Care</span>

 
</div>
     </div>
     <div className='flex flex-1 item-center justify-center gap-6'>
      <span className='text-gray-600 flex gap-1'><Home className='w-5 h-5'/>Overview</span>
      <span className='text-gray-600 flex gap-1'><User className='w-5 h-5'/>Patients</span>
      <span className='text-gray-600 flex gap-1'>< Calendar className='w-5 h-5'/>Schedule</span>
      <span className='text-gray-600 flex gap-1'><MessageSquare className='w-5 h-5'/>Message</span>
      <span className='text-gray-600 flex gap-1'><CreditCard className='w-5 h-5'/>Transaction</span>
     </div>
    
      <div className='flex items-center justify-center gap-3'>
      <div className='w-8 h-8 rounded-full bg-purple-200 text-blue-800 flex items-center justify-center'>D</div>
      <div>
        <p className='semi-bold text-slate-700'>Dr.Jose Simmons</p>
        <p className='text-sm text-slate-400'>General Practitioner</p>
      </div>
      <Settings className='w-5 h-5 text-slate-900'/>
      </div>
     
    </div>
  )
}

export default Navbar