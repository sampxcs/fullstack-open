import React from 'react'

export default function Hearder({ course }) {
  return (
    <h3>
      {course.id}. {course.name}
    </h3>
  )
}
