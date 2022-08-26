import React, { useState, useEffect } from 'react'

import getData from './services/getData'

import SearchForm from './components/SearchForm'
import AddForm from './components/AddForm'
import ListOfPersons from './components/ListOfPersons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    getData().then((res) => {
      console.log(res.persons)
      setPersons(res.persons)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!persons.find((person) => person.name === newName)) {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchForm newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <AddForm
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <ListOfPersons persons={persons} newSearch={newSearch} />
    </div>
  )
}

export default App
