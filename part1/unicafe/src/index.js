import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    e.target.textContent === 'Good' && setGood((prev) => prev + 1)
    e.target.textContent === 'Neutral' && setNeutral((prev) => prev + 1)
    e.target.textContent === 'Bad' && setBad((prev) => prev + 1)
    if (e.target.textContent === 'Clear') {
      setGood(0)
      setNeutral(0)
      setBad(0)
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleClick}>Good</Button>
      <Button onClick={handleClick}>Neutral</Button>
      <Button onClick={handleClick}>Bad</Button>
      <Button onClick={handleClick}>Clear</Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
