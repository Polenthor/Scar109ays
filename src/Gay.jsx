import React from 'react'
import { Link } from 'react-router-dom'

const Gay = () => {
  return (
    <div>

      
        <h1 class="title">Question No:2 </h1>
        <h1 class="title">Are you ready  </h1>
    
<Link to="/3"><button >Yes</button></Link>  <span style={{ fontSize: "1.5rem", margin: "0 10px" }}>Or</span> <Link to="/gay"><button>No</button></Link>
    </div>
  )
}

export default Gay