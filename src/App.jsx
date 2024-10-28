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

const WeatherDetails = ({icon , temp}) => 
{
  return (

    <>

      <div className="images">

        <img src={icon} alt="image" />

      </div>

      <div className="temp">{temp}°C</div>

    </>

  );
}

const App = () => {

  const [icon , setIcon] = useState(snowImage);

  const [temp , setTemp] = useState(-2)
  return (
    
    <div className="container">

      <div className="input-container">

        <input type="text" className='city-input' placeholder='Search City'/>

        <div className="search-icon">
          <img src={searchIcon} alt="search" />
        </div>

      </div>      
      <WeatherDetails icon={icon} temp={temp}/>
    </div>

  )
}

export default App

