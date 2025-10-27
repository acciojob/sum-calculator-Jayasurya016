import React, { useEffect, useState } from "react"

export default function SumCalculator() {

  const [count, setCount] = useState(0)

  // useEffect(()=>{
  //   count=
  // })

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={(e) => {
        setCount(count + Number(e.target.value))
      }} />
      <p>Sum: {count}</p>
    </div>
  )
}