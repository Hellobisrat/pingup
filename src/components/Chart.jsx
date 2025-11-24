import React from "react";
import patient from "../data/patient";
import { Triangle,DotIcon } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const CustomLegend = () => {
  return (
    <div className="ml-5">
      <div className="flex flex-col justify-center items-start space-y-1.5">
        <div className="flex items-center  -ml-5 mb-0">
          <DotIcon className="w-12 h-12 text-pink-500 "/>
          <span className="-ml-3">Systolic</span>
        </div>
        
        <span><strong>160</strong> </span>
        <div className="flex gap-1 items-center">
        <Triangle className="w-2 h-2 text-black fill-black"/> 
        <span className="text-xs"> Higher than Average</span></div>
      </div>
      <hr className="m-2 text-gray-300"/> 
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center  -ml-5 mb-0">
          <DotIcon className="w-12 h-12 text-pink-900 "/>
          <span className="-ml-3">Diastolic</span>
        </div>
        
       
        <span><strong>78</strong> </span>
        <div className="flex gap-1 items-center">
        <Triangle className="w-2 h-2 text-black fill-black transform rotate-180"/> 
        <span className="text-xs"> Lower than Average</span></div>
      </div>
      
    </div>
  );
};


const Chart = () => {
  const jessica = patient[0];

  const chartData = jessica.diagnosis_history.map(entry => ({
    month: entry.month,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value
  }));

  return (
    <div style={{ backgroundColor: "#f3e8ff", padding: "15px", borderRadius: "8px" }}>
       <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: "15px",paddingRight:'15px' }}>
        <h2 style={{ fontWeight: "bold", fontSize: "20px", margin: 0 }}>Blood Pressure</h2>
        <span style={{ marginTop: "5px", fontSize: "14px", color: "#555" }}>Last 6 Months</span>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 20, right: 50, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis ticks={[60, 80, 100, 120, 140, 160, 180]} />
          <Tooltip />
          <Legend content={<CustomLegend/>} layout="vertical" align="right" verticalAlign="top"/>

          {/* Horizontal reference lines */}
          <ReferenceLine y={60} stroke="#ccc" strokeDasharray="3 3" />
          <ReferenceLine y={80} stroke="#ccc" strokeDasharray="3 3" />
          <ReferenceLine y={100} stroke="#ccc" strokeDasharray="3 3" />
          <ReferenceLine y={120} stroke="#ccc" strokeDasharray="3 3" />
          <ReferenceLine y={140} stroke="#ccc" strokeDasharray="3 3" />
          <ReferenceLine y={160} stroke="#ccc" strokeDasharray="3 3" />
          <ReferenceLine y={180} stroke="#ccc" strokeDasharray="3 3" />

          {/* Lines with dots */}
          <Line
            type="monotone"
            dataKey="systolic"
            stroke="#FF69B4"
            dot={{ r: 5, fill: "#FF69B4" }}
            activeDot={{ r: 8, fill: "#FF1493" }}
          />
          <Line
            type="monotone"
            dataKey="diastolic"
            stroke="#800080"
            dot={{ r: 5, fill: "#800080" }}
            activeDot={{ r: 8, fill: "#4B0082" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;