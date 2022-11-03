import {nanoid} from "nanoid"

function Today({data}){


    return data.map((e)=>(
        <div className="todaytempdiv" key={nanoid()}>
        <div className='cd1'>{Math.floor(e.main.temp)}°C</div>
        <div className='cd2'>
        <img src={"http://openweathermap.org/img/w/" + e.weather[0].icon + ".png"} alt="" />
        </div>

    </div> 
    ))
}


export{Today}