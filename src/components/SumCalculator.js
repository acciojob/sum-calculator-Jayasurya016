import React, { useState } from "react"

export default function SumCalculator() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onClick={(e) => {
        setCount(count + Number(e.target.value))
      }} />
      <p>Sum: {count}</p>
    </div>
  )
}