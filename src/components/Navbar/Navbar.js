import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link to='/home'>
    <a class="navbar-brand" href="#">Home</a>
    </Link>
    <Link to='/mytask'>
    <a class="navbar-brand" href="#">My Task</a>
    </Link>
  </div>
    
</nav>
    
    
    </>
  )
}

export default Navbar