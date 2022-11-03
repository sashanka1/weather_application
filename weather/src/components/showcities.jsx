import "./css/city.css"
import {nanoid} from "nanoid"
import SearchIcon from '@mui/icons-material/Search';
function Showcityes({data}){
    return data.map((e)=>(
        <div className="contc" onClick={()=>{let c = e.split(",");console.log(c[0])}} key={nanoid()}>
            <div className="card">
            <p>{e}</p>
            <div>
                <p>N*c</p>
                <div>{<SearchIcon/>}</div>
                
            </div>
            </div>
        </div>
    ))
}

export{Showcityes}