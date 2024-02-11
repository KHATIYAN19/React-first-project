import Card from "./Card"
import "../App.css"
function Cards({tours,removeTour}){
    return(
         <div className="">
          { tours.map((tour)=>{
                return <Card {...tour} removeTour={removeTour}></Card>  
            })
        }
         </div>
    )
}

export default Cards;