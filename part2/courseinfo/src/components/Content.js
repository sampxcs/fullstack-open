import React from 'react'

export default function Content({ parts }) {
  return parts.map(({ id, name, exercises }) => (
    <p key={id}>
      {name} {exercises}
    </p>
  ))
}
