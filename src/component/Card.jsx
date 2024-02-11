import { useState } from "react";
import "../App.css"
function Card({id,name,info,image,price,removeTour}){
    const[readmore,setreadmore]=useState(false);
    const des=readmore?info:`${info.substring(0,200)}....`;
    function readmorehandler(){
        setreadmore(!readmore);
    }

    return(
        
         <div className="card">
            <div >
               <img  className="img" src={image} alt="" />
            </div>
            <div >
               <h3 className="name">{name}</h3>
               <h3 className="price">&#x20B9;{price}</h3>
            </div>
            <div className="desc">
                <p>{des}
                <span className="readmore-btn" onClick={readmorehandler}>
                       {  readmore?`show less`:`read more`}

                </span>
                </p>
            </div>
            <div >
                <button className="red-btn" onClick={()=>removeTour(id)}>Not Interested</button>
            </div>
         </div>
        
    )
}

export default Card;