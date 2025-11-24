import React from 'react'
import patient from '../data/patient';
import { 
         Thermometer,
         Wind,
         HeartPulse,
         LucideWind,
         Triangle,
         LucideHeartCrack
         } from 'lucide-react';

const Cards = () => {


   const respiratoryRates = patient[0].diagnosis_history.map(entry => entry.respiratory_rate.value);
   const temperature = patient[0].diagnosis_history.map(entry => entry.temperature.value);
   const heartRate= patient[0].diagnosis_history.map(entry => entry.heart_rate.value);

  return (
     <div className="grid grid-cols-3 gap-2 mt-3">
    <div className="bg-sky-200  rounded-lg col-span-1 flex flex-col p-3 space-y-3">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center"> <LucideWind size={38} fill="blue"/></div>
               <p>RespiratoryRates</p>
               <h2>{respiratoryRates[0]} bpm</h2>
               <h3>Normal</h3>
              </div>
              <div className="bg-red-200 row-span-1 rounded-lg col-span-1 flex flex-col p-3 space-y-3 ">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">  <Thermometer size={38} fill="red"/></div>
                <p>Temperature</p>
                 <h2>{temperature[0]} &deg;F</h2>
                <h3>Normal</h3>
              </div>
              <div className="bg-pink-200 row-span-1 rounded-lg col-span-1 flex flex-col p-3 space-y-3">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">   <HeartPulse size={38} fill="red"/> </div>
                <p>Heart Rate</p>
                <h2>{heartRate[0]} bpm</h2>
                <h3>Lower than average</h3>
              </div>
            </div>
  )
}

export default Cards