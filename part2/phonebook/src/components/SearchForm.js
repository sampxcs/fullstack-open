import React from 'react'

export default function SearchForm({ newSearch, handleSearchChange }) {
  return (
    <div>
      filter shown with: <input value={newSearch} onChange={handleSearchChange} />
    </div>
  )
}
