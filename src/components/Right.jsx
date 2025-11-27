import React from 'react'
import patient from '../data/patient'
import {CalendarIcon,VenusIcon,PhoneCallIcon,Shield} from 'lucide-react'
const Right = () => {
  return (
     <div className="w-full rounded shadow-md bg-white h-screen p-3 flex flex-col items-center justify-start space-y-4">
             <img
                    src={patient[0].profile_picture}
                    alt={patient[0].name}
                    className="w-30 h-30 rounded-full object-cover"
                  />
              <span className="text-sm font-semibold text-slate-900">{patient[0].name}</span>
              <div className="flex flex-col gap-1 items-start mt-6 justify-center space-y-4 ">
              <div className="flex  items-center justify-center gap-3">
                <CalendarIcon className="w-4 h-4"/>
                <div>
                  <p className="text-xs font-semibold">Date of Birth</p>
                  <p className="text-xs">{patient[0].date_of_birth}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <VenusIcon className="w-4 h-4"/>
                <div>
                  <p className="text-xs font-semibold">Gender</p>
                  <p className="text-xs">{patient[0].gender}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <PhoneCallIcon className="w-4 h-4"/>
                <div>
                  <p className="text-xs font-semibold">ContactInfo</p>
                  <p className="text-xs">{patient[0].phone_number}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <PhoneCallIcon className="w-4 h-4"/>
                <div>
                  <p className="text-xs font-semibold">Emergency Contact</p>
                  <p className="text-xs">{patient[0].emergency_contact}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-4 h-4"/>
                <div>
                  <p className="text-xs font-semibold">Insurance Provider</p>
                  <p className="text-xs">{patient[0].insurance_type}</p>
                </div>
              </div>
              <button className="w-full mt-3 p-1.5 rounded-4xl bg-green-300">Show All Information</button>
          </div>
              </div>
              
  )
}

export default Right