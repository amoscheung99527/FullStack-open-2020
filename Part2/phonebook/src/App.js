import React, { useState } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [ filter, setFilter ] = useState('')

  const handleNewName =(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) =>{
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const checkInfo = (event) =>{
    event.preventDefault()
    if(persons.find((person)=>person.name===newName)){
      console.log("stop")
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      const personinfo={
        name: newName, number: newNumber
      }
      setPersons(persons.concat(personinfo))
    }
  }

  const nametoShow = filter ? persons.filter((person) => (person.name).includes(filter)):persons

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter}/>

      <h3>Add a new</h3>

      <PersonForm checkInfo={checkInfo} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}/>

      <h3>Numbers</h3>

      <ul>
        {nametoShow.map(person=> <Name key={person.name} persons={person}/>)}

      </ul>
    </div>
  )
}

export default App
