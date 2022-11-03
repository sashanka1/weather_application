
function Time ({data,sd}){
  
      
 return (

       <div className="sunrise">
            <div className="srd1">
                <p>Sunrise</p>
                <p>{data}am</p>
            </div>
            <div className="srd2">
                <p>sunset</p>
                <p>{sd}pm</p>
            </div>
            </div> 
    
 )
}
export{Time};