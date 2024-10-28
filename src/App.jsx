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

const WeatherDetails = ({icon , temp , city , country , lat , log}) => 
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

          <span>{lat}</span>

        </div>

      </div>

    </>

  );
}

const App = () => {

  const [icon , setIcon] = useState(snowImage);

  const [temp , setTemp] = useState(0);

  const [city , setCity] = useState("Trincomalee");

  const [country , setCountry] = useState("Sri Lanka");

  const [lat , setLat] = useState(0);

  const [log , setLog] = useState(0)

  return (
    
    <div className="container">

      <div className="input-container">

        <input type="text" className='city-input' placeholder='Search City'/>

        <div className="search-icon">
          <img src={searchIcon} alt="search" />
        </div>

      </div>      
      <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log}/>
    </div>

  )
}

export default App

