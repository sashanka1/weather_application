import { Line } from 'react-chartjs-2';
import{Chart as ChartJs,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement} from "chart.js";
import { useState } from 'react';
ChartJs.register(
    Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement
)

function Chat({data}){
    //console.log("the val", data)
    const[hourtemp,Sethourtemp] = useState([])
     let x = data.map((e)=>{
            return e.temp
     })
     
    

    // console.log(x,"the array of temph")

    const [datas,Setdata] = useState({
        labels:["6am","7am","8am","9am","10am","11am","12pm","13pm","14pm","15pm","16pm","17pm","18pm","19pm","20pm","21pm","22pm","23pm","0am"],
        datasets:[
            {   label:"first Dataset",
                data:x,
                backgroundColor:"white",
                borderColor:"green",
                tension:0.4,
                
            }
        ]
    });

    const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginnZero: true,
            ticks: {
              display: false,
            },
            grid: {
              display: false,
              drawTicks: false,
            },
          },
    
          x: {
            beginnZero: true,
            ticks: {
              color: "teal",
              font: { size: 16 },
            },
            grid: {
              // display: false,
              drawTicks: false,
              drawBorder: false,
            },
          },
        },
      };
    return(
        <>
        <div>
            <Line data={datas} options={options}> </Line>
        </div>
        </>
    )
}

export{Chat}