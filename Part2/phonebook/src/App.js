import React, { useState, useEffect } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [ filter, setFilter ] = useState('')

  useEffect(()=>{
    personsService.getAll().then((persons)=>{
      setPersons(persons)
    })
  }, [])

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
    const duplicate = persons.find((person)=>person.name===newName)
    if(duplicate){
      const check = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(check){
        const updatedInfo ={...duplicate,number:newNumber}
        personsService.update(updatedInfo).then(info =>{
          setPersons(persons.map(person=> person.id === info.id ?info:person))
        })
      }
    }
    else{
      const personinfo={
        name: newName, number: newNumber
      }
      personsService
        .create(personinfo)
          .then(info=>{
              setPersons(persons.concat(info))
              setNewName('')
              setNewNumber('')
            })
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

      <Name persons={nametoShow} setPersons={setPersons}/>
    </div>
  )
}

export default App
