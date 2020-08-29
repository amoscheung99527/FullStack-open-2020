import React from 'react'
import Countryinfo from './Countryinfo'

const Countries = ({countries, changeCountries}) => {

  const needlist=(countries.length > 1 && countries.length<10);
  const listWithButton = countries.map(country=>{
    return(
      <div key={country.name}>
        {country.name}
        <button onClick={() => {changeCountries(country.name);}}>
          Show
        </button>
      </div>
    )
  })


  return(
    <div>
      {countries.length>10 && "Too many matches, specify another filter"}
      { needlist && <div>{listWithButton}</div>}
      {countries.length==1 && <Countryinfo countries={countries}/>}
    </div>
  )
}

export default Countries
