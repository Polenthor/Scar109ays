import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Three = () => {
  const [count, setCount] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    // Run every 1 second
    const timer = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)

    // When countdown ends
    if (count === 0) {
      clearInterval(timer)
      navigate("/birthday")  // ← change this to your route
    }

    return () => clearInterval(timer)
  }, [count, navigate])

  return (
    <div 
      style={{
        fontSize: "10rem",
        textAlign: "center",
        color: "white"
      }}
    >
      {count}
    </div>
  )
}

export default Three