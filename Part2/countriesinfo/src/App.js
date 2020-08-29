import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from './components/Filter'
import Countryinfo from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [ filter, setFilter ] = useState('')
  const [countryfind, setCountryfind] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => setCountries(response.data))
  }, [])

  const handleFilter = (event) =>{
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const changeCountries = country =>{
    setFilter(country);
  }

  const countriesToShow = filter ? countries.filter((country) =>(country.name.toLowerCase()).includes((filter.toLowerCase()))): countries;
  if (filter ==''){
    return(
      <div>
        <Filter filter={filter} handleFilter={handleFilter} value={countryfind}/>
      </div>
    )
  }
  else{
    return(
      <div>
        <Filter filter={filter} handleFilter={handleFilter} value={countryfind}/>
        <Countryinfo countries={countriesToShow} changeCountries={changeCountries}/>
      </div>
    )
  }
}

export default App
