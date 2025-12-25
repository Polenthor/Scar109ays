import React, { useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import NotFound from './NotFound'

const N = () => {
  
    useEffect(() => {
    document.title = "Scar109lays";
  }, []);
  return (
    <div><h1 clase="title" >Surprise !  </h1>
    <h2>Click </h2><Link to="/question1"><button >This</button></Link> 

    
     </div>
  )
}

export default N