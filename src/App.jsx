import data from"./data.js"
import { useState } from "react";
import Cards from './component/Cards';
import "./App.css"
function App() {
  const[tours,settours]=useState(data);
  function removeTour(id){
      const newtours= tours.filter(tours=>tours.id!==id);
      settours(newtours);
  }
  function filldata(){
    settours(data);
  }
  if(tours.length==0){
    return(
      <div className="refresh">
       <div className="text">No Tours left</div>
       <button className="btn-white" onClick={filldata}>Refresh</button>
      </div>  
    )
  }
  return (
     <div className="container">
       <div className="heading">
         <h1>Plan With Me</h1>
       </div>
       <div className="cards">
          <Cards tours={tours} removeTour={removeTour}></Cards>
       </div>
     </div>
   
    
  )
}
export default App;
