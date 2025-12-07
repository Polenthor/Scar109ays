import React from 'react'
import { Link } from 'react-router-dom'

const Iknew = () => {
  return (
    <div>
<h1 >I Knew u little <span  style={{
    fontSize: "3rem",
    margin: "0 10px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  }}>Gay</span> Man</h1>
        <h1 class="title">No Wonder You Only Hangout With Boys</h1>
    
  <Link to="/gay"><button >Next</button></Link>  

    </div>
  )
}

export default Iknew