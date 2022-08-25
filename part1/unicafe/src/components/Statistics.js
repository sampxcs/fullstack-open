import React from 'react'
import Statistic from './Statistic'

export default function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad
  const average = total ? (good - bad) / total : 0
  const positive = total ? (good / total) * 100 : 0

  return (
    <div>
      <h2>Stadistics</h2>
      {total ? (
        <table>
          <Statistic text={'Good'} value={good} />
          <Statistic text={'Neutral'} value={neutral} />
          <Statistic text={'Bad'} value={bad} />
          <Statistic text={'Total'} value={total} />
          <Statistic text={'Average'} value={average} />
          <Statistic text={'Positive'} value={positive} />
        </table>
      ) : (
        <h3>No feedback given</h3>
      )}
    </div>
  )
}
