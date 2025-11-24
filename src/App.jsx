import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Chart from "./components/Chart.jsx";
import Right from "./components/Right.jsx";
import Cards from "./components/Cards.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-6 bg-purple-50">
        <div className="col-span-1 z-20">
         <Sidebar/> 
        </div>
        <div className="col-span-4 gap-6 z-20">
          <div className="w-full rounded shadow-md bg-white h-screen p-3">
            <Chart/>
            <Cards/>
            </div> 
          </div>
          <div className="col-span-1 z-20 ">
          <Right/>  
        </div>
        </div>
        
      </div>
  
  );
}

export default App;
