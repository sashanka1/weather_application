import {nanoid} from "nanoid"
 function Showhumidity({data}){
    return data.map((e)=>(
         <div className="pressurediv" key= {nanoid()}>
            <div className="d1 pressureshow1">
                <p>Pressure</p>
                <p>{e.main.pressure} hpa</p>
            </div>
            <div className="d2 pressureshow1">
                <p>Humidity</p>
                <p>{e.main.humidity} %</p>
            </div>
        
        
    </div> 

    ))
 }

 export{Showhumidity}