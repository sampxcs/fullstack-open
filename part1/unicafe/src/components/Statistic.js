import React from 'react'

export default function Statistic({ text, value }) {
  return (
    <tr>
      <td>{text}:</td> <td>{value}</td>
    </tr>
  )
}
