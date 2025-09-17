import React, { useState } from 'react'
import { FiMapPin } from 'react-icons/fi';
import { BsCloudSunFill } from 'react-icons/bs';



function WeatherApi() {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");
    const API_KEY = "7300bf62711c45b49e0145036251609";
    async function Weather() {
        try{
        let api = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}`);
         let data1 = await api.json();
         if(!api.ok) throw new Error ('city not found');
         setData(data1);
        }
        catch(error){
             alert('city not found, Please try again')
             setData(null);
        }
        
    }  
    console.log(data);
    return ( 
    <div className='h-screen flex justify-center items-center flex-col gap-6 select-none ' style={{
        backgroundImage:"url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWFhZm5hcThza2M5dDFqNXMyMXhncjgzZ3VsZnRibmZuZ254bDFpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KZFrf9JusXzmpnPsT6/giphy.gif')",
          backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',    
    }}>   
              <h1 className='font-semibold text-white text-6xl mb-6 flex justify-center select-none items-center gap-4'>
                <BsCloudSunFill className="h-12 w-12 text-blue-500 select-none"></BsCloudSunFill>
                Weather
                  
                </h1>   
    <div >
           <input placeholder='Search your city' className='border-white bg-gray-700 select-none h-12 rounded-2xl text-white px-1' value = {search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}></input>
            <button className='h-12 w-30 rounded-2xl bg-blue-600 text-white border-white cursor-pointer select-none' onClick={()=>Weather()}>Search</button>
            {console.log(data)}

          </div>
         
          
            { data && 
                    <div className="rounded-lg p-6 mt-5 select-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}> 
                        <div className=' rounded-lg flex  p-6 mt-6 select-none' 
                     >
                       <h1  className="text-2xl font-bold flex items-center select-none text-white">
                               
                        </h1>

                        <h2 className="text-2xl font-bold flex justify-center select-none">
                              <span className='text-white text-9xl font-light select-none'>{data.current.temp_c}</span> <span className='text-white mr-5'>°C</span>
                              <FiMapPin className="mr-2 text-blue-500 select-none" />
                                <span className='text-white select-none'>{data.location.name}</span>
                        </h2>
                        
                     
                    </div> 
                    <div>
                        <div className='flex gap-4 items-center justify-center mt-4 select-none'>
                               <span className='text-white font-medium p-6 text-xl flex select-none'>{data.current.condition.text}</span>
                                <img 
                                 src={data.current.condition.icon}
                                 alt="Weather Icon"
                                 className=" w-12 select-none h-12 "
                                />
                        </div>
                        
                        <span className='text-white font-medium p-6 select-none'>💧 Humidity: {data.current.humidity}%</span>
                        <span className='text-white font-medium p-6 select-none'>🌬️ Wind: {data.current.wind_kph} kph</span>
                        
                    </div>
                    </div>       
            }
        
            
    </div>
  )
}

export default WeatherApi