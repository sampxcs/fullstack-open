import React from 'react'

export default function ListOfPersons({ persons, newSearch }) {
  return (
    <ul>
      <h2>Numbers</h2>
      {newSearch
        ? persons
            .filter((person) => person.name.includes(newSearch))
            .map((person) => (
              <li key={person.name}>
                {person.name} {person.number}
              </li>
            ))
        : persons.map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
    </ul>
  )
}
