import SearchIcon from '@mui/icons-material/Search';
import {nanoid} from "nanoid"

import { useEffect, useState } from 'react';
import "./css/weather.css"
import {Sevenday} from "./showsevenday"
import {Today} from "./showtdw"
import {Showcityes} from "./showcities"
import {Showhumidity} from "./showhumidity"
import{Chat} from "./chat"
import{Time} from "./sunriseandsettime"


function Weather(){
    const [allcitylist, Setcirylist] = useState([
"AGARTALA,TRIPURA	NORTH",
"AGRA, UTTAR PRADESH",
"AHMEDABAD,	GUJARAT",
"AIZWAL, MIZORAM",
"AJMER,	RAJASTHAN",
"ALLAHABAD,	UTTAR PRADESH",
"ALLEPPEY, KERALA",
"ALIBAUG, MAHARASHTRA",
"ALMORA, UTTARANCHAL",
"ALSISAR, RAJASTHAN",
"ALWAR,	RAJASTHAN",
"AMBALA, HARYANA",
"AMLA, MADHYA PRADESH",
"AMRITSAR, PUNJAB",
"ANAND,	GUJARAT",
"ANKLESHWAR, GUJARAT",
"ASHTAMUDI,	KERALA",
"AULI,	HIMACHAL PRADESH",
"AURANGABAD, MAHARASHTRA",	 	 
"BADDI,	HIMACHAL PRADESH",
"BADRINATH,	UTTARANCHAL	",
"BALASINOR,	GUJARAT",
"BALRAMPUR,	UTTAR PRADESH",
"BAMBORA, RAJASTHAN",
"BANDHAVGARH, MADHYA PRADESH",
"BANDIPUR, KARNATAKA",
"BANGALORE,	KARNATAKA",
"BARBIL, ORISSA",
"BAREILLY, UTTAR PRADESH",
"BEHROR, RAJASTHAN",
"BELGAUM, KARNATAKA",
"BERHAMPUR,	ORISSA",
"BETALGHAT,	UTTARANCHAL	",
"BHARATPUR,	RAJASTHAN",
"BHANDARDARA, MAHARASHTRA",
"BHARUCH, GUJARAT",
"BHAVANGADH, GUJARAT",
"BHAVNAGAR,	GUJARAT",
"BHILAI, CHHATTISGARH",
"BHIMTAL, UTTARANCHAL",
"BHOPAL, MADHYA PRADESH	CE",
"BHUBANESHWAR, ORISSA",
"BHUJ,	GUJARAT",
"BIKANER,	RAJASTHAN",
"BINSAR, UTTARANCHAL",
"BODHGAYA, BIHAR",
"BUNDI,	RAJASTHAN", 	 
"CALICUT, KERALA",
"CANANNORE,	KERALA",
"CHAIL,	HIMACHAL PRADESH",
"CHAMBA, UTTARANCHAL",
"CHANDIGARH, PUNJAB",
"CHENNAI, TAMIL NADU",
"CHIKMAGALUR, KARNATAKA",
"CHIPLUN, MAHARASHTRA",
"CHITRAKOOT, MADHYA PRADESH",
"CHITTORGARH, RAJASTHAN",
"COIMBATORE, TAMIL NADU	",
"COONOOR, TAMIL NADU	",
"COORG,	KARNATAKA",
"CORBETT, UTTARANCHAL",
"CUTTACK, ORISSA", 	 
"DABHOSA, MAHARASHTRA",
"DALHOUSIE,	HIMACHAL PRADESH	",
"DAMAN,	UNION TERRITORY",
"DANDELI, KARNATAKA	",
"DAPOLI, MAHARASHTRA",
"DARJEELING, WEST BENGAL",
"DAUSA,	RAJASTHAN",
"DEHRADUN, UTTAR PRADESH",
"DHARAMSHALA, HIMACHAL PRADESH",
"DIBRUGARH,	ASSAM",
"DIGHA, WEST BENGAL",
"DIU, UNION TERRITORY",
"DIVE, AGAR	MAHARASHTRA",
"DOOARS, WEST BENGAL",
"DURGAPUR, WEST BENGAL",
"DURSHET, MAHARASHTRA",
"DWARKA, GUJARAT", 
"FARIDABAD,	HARYANA",
"FIROZABAD,	UTTAR PRADESH", 	 
"GANGOTRI, UTTARANCHAL",
"GANGTOK, SIKKIM",
"GANAPATIPULE, MAHARASHTRA	",
"GANDHIDHAM, GUJARAT",
"GANDHINAGAR, GUJARAT",
"GARHMUKTESHWAR, UTTAR PRADESH",
"GARHWAL,UTTARANCHAL",
"GAYA, BIHAR",
"GHAZIABAD,	NEW DELHI",
"GOA,	GOA",
"GOKHARNA, KERALA",
"GONDAL, GUJARAT",
"GORAKHPUR, UTTAR PRADESH",
"GREATER, NOIDA",
"GULMARG, JAMMU & KASHMIR",
"GURGAON, HARYANA",
"GURUVAYOOR, KERALA",
"GUWAHATI, ASSAM",
"GWALIOR,MADHYA PRADESH",
"HALEBID, KARNATAKA",
"HAMPI,	KARNATAKA",
"HANSI,	HARYANA	",
"HARIDWAR, UTTAR PRADESH",
"HASSAN, KARNATAKA",
"HOSPET, KARNATAKA",
"HOSUR, TAMIL NADU",
"HUBLI,	KARNATAKA",
"HYDERABAD,	ANDHRA PRADESH",
"IDUKKI, KERALA",
"IGATPURI, MAHARASHTRA",
"IMPHAL,MANIPUR",
"INDORE, MADHYA PRADESH",	 	 
"JABALPUR, Madhya Pradesh",
"JAIPUR, RAJASTHAN",
"JAISALMER,	RAJASTHAN ",
"JALANDHAR, PUNJAB",
"JALGAON, MAHARASHTRA",
"JAMBUGODHA, GUJARAT",
"JAMMU, JAMMU & KASHMIR",
"JAMNAGAR, GUJARAT",
"JAMSHEDPUR, JHARKHAND",
"JAWHAR, MAHARASHTRA",
"JHANSI, UTTAR PRADESH",
"JODHPUR, RAJASTHAN",
"JOJAWAR, RAJASTHAN",
"JORHAT, ASSAM",
"JUNAGADH, GUJARAT",
"KABINI, KARNATAKA",
"KALIMPONG, WEST BENGAL",
"KANATAL, UTTARANCHAL",	
"KANCHIPURAM, TAMIL NADU",	
"KANHA, MADHYA PRADESH",
"KANPUR, UTTAR PRADESH",
"KANYAKUMARI, TAMIL NADU",	
"KARGIL,JAMMU & KASHMIR",	
"KARJAT, MAHARASHTRA",
"KARNAL,HARYANA	",
"KARUR, TAMIL NADU",	
"KARWAR, KARNATAKA",	
"KASARGOD,KERALA",	
"KASAULI, HIMACHAL PRADESH",	
"KASHIPUR,UTTARANCHAL",	
"KASHID,MAHARASHTRA",
"KATRA, JAMMU & KASHMIR",	
"KAUSANI, UTTARAKHAND",	
"KAZA, HIMACHAL PRADESH",	
"KAZIRANGA, ASSAM","NAVI, MUMBAI",
"DELHI, DELHI",
"PATNA, BIHAR",
"PURI, ORISSA",
"MALSHEJ, GHAT",
"RAJGIR, BIHAR",
"RANNY, KERALA",
"GIR, GUJARAT ",
"VAPI, GUJARAT",
"KOCHIN, KERALA	",
"KOLLAM, KERALA	",
"KUMILY, KERALA	",
"LUMBINI, NEPAL	",
"MOHALI, PUNJAB	",
"MORBI, GUJARAT	",
"MUNNAR, KERALA	",
"MURUD, JANJIRA	",
"POOVAR, KERALA	",
"BLAIR, ANDAMAN	",
"SURAT, GUJARAT	",
"YUKSOM, SIKKIM	",
"KOTA, RAJASTHAN",
"KOVALAM, KERALA",
"LOTHAL, GUJARAT",
"MANESAR,HARYANA",
"MARARRI, KERALA",
"OOTY, TAMILNADU",
"PALI, RAJASTHAN",
"PATIALA, PUNJAB",
"RAJKOT, GUJARAT",
"VAGAMON, KERALA",
"VARKALA, KERALA",
"WAYANAD, KERALA",
"KOTTAYAM, KERALA",
"LUDHIANA, PUNJAB",
"MALPE, KARNATAKA",
"MANDAVI, GUJARAT",
"NADUKANI, KERALA",
"OSIAN, RAJASTHAN",
"PALLAKAD, KERALA",
"PHAGWARA, PUNJAB",
"PINJORE, HARYANA",
"POSHINA, GUJARAT",
"RAVANGLA, SIKKIM",
"ROURKELA, ORISSA",
"SIANA, RAJASTHAN",
"THEKKADY, KERALA",
"THRISSUR, KERALA",
"UDUPI, KARNATAKA",
"KUMARAKOM, KERALA",
"MYSORE, KARNATAKA",
"NAGAUR, RAJASTHAN",
"PALANPUR, GUJARAT",
"PALITANA, GUJARAT",
"PUNE, MAHARASHTRA",
"PUSKHAR,RAJASTHAN",
"RAJPIPLA, GUJARAT",
"RANCHI, JHARKHAND",
"SALEM, TAMIL NADU",
"SHIMLIPAL, ORISSA",
"VADODARA, GUJARAT",
"WANKANER, GUJARAT",
"KHIMSAR, RAJASTHAN",
"MALAPPURAM, KERALA",
"MANDAWA, RAJASTHAN",
"NAPNE, MAHARASHTRA",
"NASIK, MAHARASHTRA",
"NERAL, MAHARASHTRA",
"NILGIRI, TAMILNADU",
"PANCHKULA, HARYANA",
"PHALODI, RAJASTHAN",
"PORBANDAR, GUJARAT",
"RAMGARH, RAJASTHAN",
"SAPUTARA, GUJARAT ",
"THANE, MAHARASHTRA",
"UDAIPUR, RAJASTHAN",
"MADURAI, TAMIL NADU",
"MALVAN, MAHARASHTRA",
"MANMAD, MAHARASHTRA",
"MOUNTABU, RAJASTHAN",
"MUMBAI, MAHARASHTRA",
"MUNDRA, MAHARASHTRA",
"NAGPUR, MAHARASHTRA",
"NANDED, MAHARASHTRA",
"PANVEL, MAHARASHTRA",
"NAGAR, UTTARPRADESH",
"RANAKPUR, RAJASTHAN",
"SAJAN, MAHARASHTRA ",
"SATTAL, UTTARANCHAL",
"MADHOPUR, RAJASTHAN",
"SHILLONG, MEGHALAYA",
"SHIRDI, MAHARASHTRA",
"TANJORE, TAMIL NADU",
"TAPOLA, MAHARASHTRA",
"TIRUPUR, TAMIL NADU",
"VELLORE, TAMIL NADU",
"YERCAUD, TAMIL NADU",
"KOLKATA, WEST BENGAL",
"KOTAGIRI, TAMIL NADU",
"LEH, JAMMU & KASHMIR",
"MANGALORE, KARNATAKA",
"NAGARHOLE, KARNATAKA",
"NOIDA, UTTAR PRADESH",
"PANHALA, MAHARASHTRA",
"PELLING, WEST SIKKIM",
"RAICHAK, WEST BENGAL",
"RAIPUR, CHHATTISGARH",
"RAJASTHAN, RAJASTHAN",
"RAJSAMAND, RAJASTHAN",
"RISHYAP, WEST BENGAL",
"ROHETGARH, RAJASTHAN",
"VERAVAL, MAHARASHTRA",
"KHANDALA, MAHARASHTRA",
"KOLHAPUR, MAHARASHTRA",
"KUMBALGARH, RAJASTHAN",
"KURSEONG, WEST BENGAL",
"LACHUNG, NORTH SIKKIM",
"LONAVALA, MAHARASHTRA",
"MARCHULA, UTTARANCHAL",
"MATHERAN, MAHARASHTRA",
"ORCHHA, MADHYAPRADESH",
"PANNA, MADHYA PRADESH",
"PENCH, MADHYA PRADESH",
"RANIKHET, UTTARANCHAL",
"SILIGURI, WEST BENGAL",
"SIVAGANGA, TAMIL NADU",
"TARAPITH, WEST BENGAL",
"KODAIKANAL, TAMIL NADU	",
"KUMBAKONAM, TAMIL NADU	",
"LUCKNOW, UTTAR PRADESH	",
"MANDORMONI, WESTBENGAL	",
"MATHURA, UTTAR PRADESH	",
"MUSSOORIE, UTTARANCHAL	",
"NAGOTHANE, MAHARASHTRA	",
"NAINITAL, UTTARPRADESH	",
"PANCHGANI, MAHARASHTRA	",
"PANTNAGAR, UTTARANCHAL	",
"RANTHAMBORE, RAJASTHAN	",
"RATNAGIRI, MAHARASHTRA	",
"SILVASSA, NAGAR HAVELI	",
"SONAULI, UTTAR PRADESH	",
"SUNDERBAN, WEST BENGAL	",
"UJJAIN, MADHYA PRADESH	",
"VELANKANNI, TAMIL NADU	",
"YAMUNOTRI, UTTARANCHAL	",
"KUFRI, HIMACHAL PRADESH",
"KULLU, HIMACHAL PRADESH",
"MUKTESHWAR, UTTARANCHAL",
"NAGAPATTINAM, TAMILNADU",
"NAHAN, HIMACHAL PRADESH",
"PONDICHERRY, TAMIL NADU",
"BAREILLY, UTTAR PRADESH",
"RAMESHWARAM, TAMIL NADU",
"SAWANTWADI, MAHARASHTRA",
"SOLAN, HIMACHAL PRADESH",
"UTTARKASHI, UTTARANCHAL",
"VARANASI, UTTAR PRADESH",
"VIKRAMGADH, MAHARASHTRA",
"LAKSHADWEEP, LAKSHADWEEP",
"MANALI, HIMACHAL PRADESH",
"MORADABAD, UTTAR PRADESH",
"RISHIKESH, UTTAR PRADESH",
"SHIMLA, HIMACHAL PRADESH",
"TIRUPATI, ANDHRA PRADESH",
"KHAJURAHO, MADHYA PRADESH",
"KUSHINAGAR, UTTAR PRADESH",
"MAHABALIPURAM, TAMIL NADU",
"PACHMARHI, MADHYA PRADESH",
"PAHALGAM, JAMMU & KASHMIR",
"PATNITOP, JAMMU & KASHMIR",
"PRAGPUR, HIMACHAL PRADESH",
"SHIVANASAMUDRA, KARNATAKA",
"SRINAGAR, JAMMU & KASHMIR",
"UDHAMPUR, JAMMU & KASHMIR",
"KHAJJIAR, HIMACHAL PRADESH",
"MAHABALESHWAR, MAHARASHTRA",
"NALDHERA, HIMACHAL PRADESH",
"PALAMPUR, HIMACHAL PRADESH",
"PARWANOO, HIMACHAL PRADESH",
"PATHANKOT, JAMMU & KASHMIR",
"PUTTAPARTHI, ANDHRAPRADESH",
"SHARAVANBELGOLA, KARNATAKA",
"THIRVANNAMALAI, TAMIL NADU",
"THIRUVANANTHAPURAM, KERALA",
"TIRUCHIRAPALLI, TAMIL NADU",
"VIJAYAWADA, ANDHRA PRADESH",
"RAJAHMUNDRY, ANDHRA PRADESH",
"MCLEODGANJ, HIMACHAL PRADESH",
"SECUNDERABAD, ANDHRA PRADESH",
"VISHAKAPATNAM, ANDHRA PRADESH"



    ]) // city name with state in form of array
    const [serchvalue,Setserchvalue] = useState("cuttack, odisha") // value of the serch bar , the default value of serch bar cuttack 
                                                            // if geolocation fails to find the codinates the default city weather will be shown
    const [sevenday, Setsevenday] = useState([]) // state for the seven day forcast
    const [todayw,Settodayw] = useState([])     // state for the current wether
    const [filteredciry,Setfilteredciry] = useState([]) 
    const [hourly,Sethourly]= useState([]);
       let key ="8915586daa7ad7dbe0a4f20f6960043b" // 
       const [dayst, Setdayst] = useState("00:00");// sun rise time
       const [dayend,Setdayend]= useState("00:00") // sun set time
  

     const handlechange  = (e)=>{
        Setserchvalue(e.target.value)
       // console.log(serchvalue)
        let filterDataList = allcitylist.filter((elem)=>{
            if(elem.includes(e.target.value.toUpperCase())){
                return elem;
            }
        })
        Setfilteredciry([...filterDataList])
     }
     const handleclick = async(va)=>{
      // console.log("dymanic value", va)
       // console.log("the filtered data ",filteredciry)
       // console.log("theserch value inside function",serchvalue)

             let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${va}&appid=${key}&units=metric`);
             let res = await data.json();
             console.log(res, "the  weather")
             if(res.message){
                alert("data is not present for this location,showing default city weather data")
                Setserchvalue("cuttack,odisha")
                handleclick("cuttack")

                return;
            }
                Settodayw([res])
                
                let sunr = new Date(res.sys.sunrise*1000);
                  let final = sunr.getHours() + ":"+ sunr.getMinutes();
                console.log(final,"final time")
                Setdayst(final)
                 
                let theSunSet =  new Date(res.sys.sunset*1000)
                let finalSunSet = theSunSet.getHours()+":"+ theSunSet.getMinutes();
                Setdayend(finalSunSet)
                console.log(finalSunSet)
                

             
            
             sevendayforcast(res.coord.lat,res.coord.lon)
       
            
        
     }
     const sevendayforcast = async(lat,lon)=>{
            
                console.log("the today weather",todayw)
                // console.log("ttttt",todayw.main.temp)
                let dataget = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=6&appid=${key}&units=metric`)

                let sevendaydata = await dataget.json();
                // let thehour = await hourly.json()
                // console.log("the data of hour",thehour)
                console.log("theseven",sevendaydata)
                //console.log("the today weather",todayw)
                
              
                Setsevenday([...sevendaydata.daily])
                Sethourly([...sevendaydata.hourly])
            
     }

     const weathercallbycityclick= (c,e)=>{
           // console.log("inside the function ",c)
            Setserchvalue(e) 
            Setfilteredciry([]) // clearing the filtered city to show the clicked output
            // setting the city value to the input field
            handleclick(c) // calling the handle click function to get the data
     }
     //// get geo location
 

      const geolocation  =()=>{
        if ("geolocation" in navigator) {
            // check if geolocation is supported/enabled on current browser
            navigator.geolocation.getCurrentPosition(
             function success(position) {
               // for when getting location is a success
               console.log('latitude', position.coords.latitude, 
                           'longitude', position.coords.longitude);
                            //getting codinates successfully then
                           // get current location of your using codinates, calling the api with the codinates 
                           getdatabaseOnCodinate(position.coords.latitude, position.coords.longitude)

             },
            function error(error_message) {
                alert(`An error has occured while retrieving location - ${error_message}. 
                so showing default location weather`)
              // getting location results in an error
              // so I will call my default set location for when the page lode
              handleclick("cuttack");
              console.error('An error has occured while retrieving location', error_message)
            }
            )  
         
          } else {
            // geolocation is not supported
            // get your location some other way
            console.log('geolocation is not enabled on this browser')
            alert("geolocation is not enabled on this browser")
            handleclick("cuttack");
          }
      }
     ///
     ///// location call by geolocatin after gettin the codinates

      const getdatabaseOnCodinate = async(late,long)=>{ // calling the api with the  codinates
           let databyipadd = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${late}&lon=${long}&appid=${key}&units=metric`)
           let respdata  = await databyipadd.json()
           Setserchvalue(respdata.name) // setting my location on the serch bar
           handleclick(respdata.name); // calling the main function with my city location 
      }     

     useEffect(()=>{
       
        geolocation() // calling the geolocation for user location codinates;
     },[])

    return(
        <span>
        
        
       
       

        <nav>
            <input  type="text" name='serchvalue' value={serchvalue} onChange={handlechange} placeholder="Enter city ...."/>
            <button><SearchIcon/></button>
            
        </nav>

        { filteredciry.length>0 ? 
          
          filteredciry.map((e)=>(
            <div className="contc" onClick={()=>{let c = e.split(",");console.log(c[0]);weathercallbycityclick(c[0],e)}} key={nanoid()}>
                <div className="card" key={nanoid()}>
                <p>{e}</p>
                <div>
                    <p>N*c</p>
                    <div>{<SearchIcon/>}</div>
                    
                </div>
                </div>
            </div>
        )) :
          <span>
        <div className='bodydiv'>
        <div className='maincontentdiv'>
            <Sevenday data= {sevenday}/>
        </div>
   
        <div className='spancont'>

            <Today data = {todayw}/>
  
    <div className="graphdiv">
        <Chat data= {hourly}/>
    </div>

    <Showhumidity data= {todayw}/>
          
            <Time data={dayst} sd={dayend}/>
    {/* <div className="lastgraphdiv"></div> */}

    </div>

    

    </div>
    </span>
        
        
    }
    </span>
    )
}
export{Weather} 