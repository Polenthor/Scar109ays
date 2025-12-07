import React from 'react'
import { Link } from 'react-router-dom'

const Question1 = () => {
  return (
    <div>
        

        <h1 class="title">Now, Are You Surprised </h1>
    
  <Link to="/yes"><button >Yes</button></Link>  <span style={{ fontSize: "1.5rem", margin: "0 10px" }}>Or</span> <Link to="/question"><button >No</button></Link>

    </div>
  )
}

export default Question1