import { Today } from "@mui/icons-material"
import {nanoid} from "nanoid"
import {useRef, useState} from "react"


function Sevenday({data}){
    const [dayName,Setdayname]=useState(["Son","Mon","Tus","Wed","Thu","Fri","Sat",
    "Son","Mon","Tus","Wed","Thu","Fri","Sat","Son","Mon","Tus","Wed"])
    const [obje,Setobje]  = useState({
        "Sun":1,
        "Mon":2,
        "Tue":3,
        "Wed":4,
        "Thu":5,
        "Fri":6,
        "Sat":7
    })
    //console.log("ob",obje["Fri"])
    const [Today,Settoday] = useState(new Date().toString().split(" "))
    let start= useRef(obje[Today[0]])
    //console.log("start",start)
    //console.log(dayName[start.current],"dayname of start")
    return data.map((el,ind)=>(
        
        <div key={nanoid()}>
            <p>{dayName[start.current+ind]}
             
            </p>
            
            <p>{Math.floor(el.temp.max)}°    {Math.floor(el.temp.min)}°</p>
            <div className='imgdiv'>
            <img src={"http://openweathermap.org/img/w/" + el.weather[0].icon + ".png"} alt="" />
            </div>
           
            <p>{el.weather[0].main}</p>
       
        </div>

))
        
    
}

export{Sevenday}