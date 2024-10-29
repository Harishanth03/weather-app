import React, { useState } from 'react'

import './App.css'

/* Images */
import searchIcon from './assets/search.png';

import sunImage from './assets/sun.png'

import cloudImage from './assets/cloud.png';

import dropImage from './assets/drop.png';

import dropImage2 from './assets/drop2.png';

import rainImage from './assets/rain.png';

import snowImage from './assets/snow.png';

import wind from './assets/wind.png';

const WeatherDetails = ({icon , temp , city , country , lat , log , humidity , windSpeed}) => 
{

  return (

    <>

      <div className="images">

        <img src={icon} alt="image" />

      </div>

      <div className="temp">{temp}°C</div>

      <div className="location">{city}</div>

      <div className="country">{country}</div>

      <div className="cord">

        <div>

          <span className="lat">Latitude</span>

          <span>{lat}</span>

        </div>

        <div>

          <span className="log">Logtitude</span>

          <span>{log}</span>

        </div>

      </div>

      <div className="data-container">

        <div className="element">

          <img src={dropImage} alt="humidity" className='icon'/>

          <div className="humility-percentage">{humidity}%</div>

          <div className="text">Humidity</div>
        </div>

        <div className="element">

          <img src={wind} alt="wind" className='icon'/>

          <div className="humility-percentage">{windSpeed} km/h</div>

          <div className="text">Wind Speed</div>
        </div>

      </div>

    </>

  );
}

//=====================================================================================================================================

const searchUrl = async () => 
{
  let URL = "https://api.openweathermap.org/data/2.5/weather?q=Trincomalee&appid=5efa0145cbf2f2c74cc1ea3975b1e2e0&units=Metric";
  console.log(URL);
}

const App = () => {

  const [icon , setIcon] = useState(snowImage);

  const [temp , setTemp] = useState(0);

  const [city , setCity] = useState("Trincomalee");

  const [country , setCountry] = useState("Sri Lanka");

  const [lat , setLat] = useState(0);

  const [log , setLog] = useState(0);

  const [humidity , setHumidity] = useState(85);

  const [windSpeed , setWindSpeed] = useState(5);

  

  return (
    
    <div className="container">

      <div className="input-container">

        <input type="text" className='city-input' placeholder='Search City'/>

        <div className="search-icon">
          <img src={searchIcon} alt="search" />
        </div>

       

      </div>      
      <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} windSpeed={windSpeed}/>
    </div>
    

    

  );
}

export default App

