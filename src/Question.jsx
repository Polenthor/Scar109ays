import React from 'react'
import { Link } from 'react-router-dom'

const Question = () => {
  return (
    <div>
        
        <h1>Did I ask for your opinion?</h1>
        <h1 class="title">Now, Are You Surprsed </h1>
    
<Link to="/question"><button >Yes</button></Link>  <span style={{ fontSize: "1.5rem", margin: "0 10px" }}>Or</span> <Link to="/yes"><button>No</button></Link>


    
    
    </div>
  )
}

export default Question