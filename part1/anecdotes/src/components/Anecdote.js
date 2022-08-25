import React from 'react'

export default function Anecdote({ title, text, votes }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>Has {votes} votes</p>
    </div>
  )
}
