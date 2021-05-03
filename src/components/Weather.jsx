import React, { useEffect, useState } from 'react'
import "./css/weather.css"

function Weather() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => { 
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=59e2a480a2f07750ef2593e08c23979e`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        };
        
        fetchApi();
    },[search] )
    
    return (

        <div className="body"> 

           
          

            <div className="box">
                <div className="inputData">
                    <input
                     type="search"
                     value={search}
                     className="inputFeild"
                     onChange={ (event)   => { setSearch(event.target.value) } } />

                </div>
            {!city ? (
               <p className="errorMsg">No Data Found</p> 
            ) : (
                 <div>   
                <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>
                        {search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}°Cel
                    </h1>
                    <h3 className="tempmin_max">
                        Feels-like : {city.feels_like}°Cel
                        <br />
                        Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                        <br />
                        Humidity : {city.humidity}% 
                    </h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
            )}
    
              
           </div>

        </div>
    )
}

export default Weather;
