import React from 'react'
import Link from "next/link";


function MenuStack() {
  return (

  <nav className ="navbar navbar-expand-lg bg-body-tertiary">
    <div className ="container col-12 col-lg-6">
    <a className ="navbar-brand fs-3" href="/">Srikan1h</a>

    


<button className="btn btn-transparent text-decoration-underline d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Menu</button>

<div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header bg-body-tertiary">
    <span className="offcanvas-title ps-3 fs-3 " id="offcanvasRightLabel">Srikan1h</span>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <nav className="nav flex-column">
  <a className="nav-link" href="/about">About</a>
  <a className="nav-link" href="/thoughts">Thoughts</a>
  <a className="nav-link" href="/contact">Contact</a>
  <a className="nav-link" href="/resume">CV</a>
  <a className ="nav-link" href="https://github.com/srikan1h">Github</a>

</nav>
  </div>
</div>
    
    
    


    <div className ="collapse navbar-collapse" id="navbarNav">
      <ul className ="navbar-nav pt-1">
        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="#">About</a>
        </li>
        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="/thoughts">Thoughts</a>
        </li>
        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="#">Contact</a>
        </li>
        
        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="#">CV</a>
        </li>
        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="https://github,com/srikan1h">Github</a>
        </li>

      </ul>
    </div>
  </div>
</nav>


  )
}

export default MenuStack