import React from 'react'
import patient from '../data/patient'
import { Search,
         MoreHorizontal , } from 'lucide-react'
const Sidebar = () => {
  return (
    <div className="w-full rounded shadow-md bg-white h-screen p-3">
            <div className="flex items-center justify-between p-3">
              <p className="font-bold text-slate-900">Patients</p>
              <Search className="w-5 h-5 text-slate-700" />
            </div>

           
              <div
                key={patient.id}
                className="flex items-center justify-between p-3 border-b"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={patient[0].profile_picture}
                    alt={patient[0].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                   <div className="flex flex-col items-center justify-center  gap-2">
                    <span className="text-sm font-semibold text-slate-900">{patient[0].name}</span>
                    <div className="flex items-center justify-center gap-1 ">
                    <span className="text-sm text-slate-400 ">{patient[0].gender}</span>,
                    <span className="text-sm text-slate-400">{patient[0].age}</span>
                  </div>
                  </div>
                    
                 
                </div>
                <MoreHorizontal className="w-5 h-5 text-slate-700" />
              </div>
            
          </div>
  )
}

export default Sidebar