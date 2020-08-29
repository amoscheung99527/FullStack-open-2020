import axios from "axios";
import React, { useState, useEffect } from "react";

const cityUrl= city => `http://api.weatherstack.com/current?access_key=9e09fe8068106c6d8bf4b61a5de55059&query=${city}`;

const getCity = city =>{
  return axios.get(cityUrl(city)).then(res=>res.data)
}

const CityWeather=({city}) => {
  const [weather, setWeather] = useState({})
  const [hasData, setHasData] = useState(false)

  useEffect(()=>{
    getCity(city).then(data =>{
      setHasData(true)
      setWeather({
        temperature: data.current.temperature,
        icon: data.current.weather_icons[0],
        windSpeed: data.current.wind_speed,
        windDirection: data.current.wind_dir
      })
    })
  },[])

  return hasData? (
    <div>
      <h2>Weather in {city}</h2>
      <p>
        <b>temperature:</b> {weather.temperature} celsius
      </p>
      <img src={weather.icon} alt ="current weather icon" />
      <p>
        <b>wind:</b> {weather.windSpeed} kph direction{" "} {weather.windDirection}
      </p>
    </div>
  ) : null ;
}

export default CityWeather
