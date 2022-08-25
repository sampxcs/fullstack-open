import React from 'react'
import ReactDOM from 'react-dom'

import Hearder from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { id: '01', name: 'Fundamentals of React', exercises: 10 },
      { id: '02', name: 'Using props to pass data', exercises: 7 },
      { id: '03', name: 'State of a component', exercises: 14 },
      { id: '04', name: 'Another part...', exercises: 9 },
    ],
  }

  return (
    <div>
      <Hearder course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
