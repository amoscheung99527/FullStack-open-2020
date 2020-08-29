import React from 'react'
import Weatherinfo from './Weatherinfo'

const Countryinfo = ({countries}) => {
  return(
    <div>
      <h1>{countries[0].name}</h1>
      <p>capital {countries[0].capital}</p>
      <p>population {countries[0].population}</p>
      <h2>languages</h2>
      <ul>
        {countries[0].languages.map(lan => {
              return <li key={lan.name}>{lan.name}</li>;
            })}
      </ul>
      <img src={countries[0].flag} width="200px" alt="Country Flag"/>
      <Weatherinfo city ={countries[0].capital} />
    </div>
  )
}

export default Countryinfo
