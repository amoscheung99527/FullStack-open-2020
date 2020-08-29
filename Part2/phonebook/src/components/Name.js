import React from 'react'

const Name = ({ persons }) => {
  return (
    <li>{persons.name} {persons.number}</li>
  )
}

export default Name
