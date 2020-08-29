import React from 'react'

const PersonForm = ({checkInfo, newName, handleNewName, newNumber, handleNewNumber})=>(
  <form onSubmit={checkInfo}>
    <div>
      name: <input value={newName} onChange={handleNewName}/>
    </div>

    <div>
      number: <input value={newNumber} onChange={handleNewNumber}/>
    </div>

    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm
