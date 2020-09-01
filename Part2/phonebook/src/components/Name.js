import React from 'react'
import personsService from "../services/persons"

const Name = ({ persons, setPersons }) => {

  const handleDeleteInfo = deleteInfo =>{
    const {id, name} = deleteInfo
    const popup = window.confirm(`Delete ${name}?`)
    if (popup){
      personsService.deleteinfo(id).then(data=>{
        setPersons(persons.filter(person=>person.id !== id))
      })
    }
    console.log(popup, id)
  }

  return (
    <div>
      {persons.map(person=>(
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={()=>{handleDeleteInfo(person)}}>
            delete
          </button>
        </p>
      ))}
    </div>
  )
}

export default Name
