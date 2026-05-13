import React from 'react'
import Link from "next/link";


function MenuStack() {
  return (

  <nav className ="navbar navbar-expand-lg ">
    <div className ="container col-12 col-lg-4 px-3">
    <a className ="navbar-brand fs-3 fw-medium" href="/">Sai Srikanth</a>

    


<button className="btn btn-transparent text-decoration-underline d-lg-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
</button>

<div className="offcanvas offcanvas-end d-lg-none px-3" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <span className="offcanvas-title fs-3 fw-medium" id="offcanvasRightLabel">Sai Srikanth</span>
    <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body py-0">
    <nav className="nav flex-column">
  <a className="nav-link text-body-secondary px-0" href="/">About</a>
  <a className="nav-link text-body-secondary px-0" href="/thoughts">Thoughts</a>
  <a className="nav-link text-body-secondary px-0" href="/">CV</a>
  <a className="nav-link text-body-secondary px-0" href="https://github.com/srikan1h">Github</a>

</nav>
  </div>
</div>
    
    
    


    <div className ="collapse navbar-collapse" id="navbarNav">
      <ul className ="navbar-nav ms-auto pt-1">
        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="/">About</a>
        </li>
        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="/thoughts">Thoughts</a>
        </li>

        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="/">CV</a>
        </li>
        <li className ="nav-item mx-md-2">
          <a className ="nav-link" href="https://github.com/srikan1h">Github</a>
        </li>

      </ul>
    </div>
  </div>
</nav>


  )
}

export default MenuStack