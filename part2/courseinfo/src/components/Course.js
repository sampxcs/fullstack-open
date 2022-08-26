import React from 'react'

import Hearder from './Header'
import Content from './Content'
import Total from './Total'

export default function Course({ course }) {
  return (
    <>
      <Hearder course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}
