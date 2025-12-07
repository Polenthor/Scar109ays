import React from 'react'
import { Link } from 'react-router-dom'

const Yess = () => {
  return (
    <div><h1>Question 1:</h1>
        <h1 class="title">Are you Gay? </h1>
    
  <Link to="/iknew"><button style={{
    background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "1.2rem",
    cursor: "pointer"
  }}>Yes</button></Link>  <span style={{ fontSize: "1.5rem", margin: "0 10px" }}>Or</span> <Link to="/ays"><button >No</button></Link></div>
  )
}

export default Yess