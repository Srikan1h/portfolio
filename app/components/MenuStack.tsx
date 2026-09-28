import React from 'react'
import Link from "next/link";


function MenuStack() {
  return (

  <nav className ="navbar navbar-expand-lg bg-white mb-1">
    <div className ="container">
    <a className ="navbar-brand text-secondary fs-4 chakra-petch-regular" href="/">SAI SRIKANTH</a>



<button className="btn btn-transparent text-decoration-underline d-lg-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
</button>

<div
  className="offcanvas offcanvas-end offcanvas-fullscreen d-lg-none"
  tabIndex={-1}
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
>
    <div className="offcanvas-header">
      <span className="offcanvas-title text-secondary fs-4 chakra-petch-regular" id="offcanvasRightLabel">Sai Srikanth</span>
      <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
  <div className="offcanvas-body py-0">
    <nav className="nav flex-column">
      <a className="nav-link text-dark px-0" href="/thoughts">Thoughts</a>
      <a className="nav-link text-dark px-0" href="/thoughts">Projects</a>
    </nav>
  </div>
</div> 
    
    
    


    <div className ="collapse navbar-collapse" id="navbarNav">
      <ul className ="navbar-nav ms-auto">

        <li className ="nav-item ms-md-4">
          <a className ="mx-1 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-25-hover" href="/thoughts">Thoughts</a>
        </li>

        <li className ="nav-item ms-md-4">
          <a className ="mx-1 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-25-hover" href="/">Projects</a>
        </li>


      </ul>
    </div> 

  </div>
</nav>


  )
}

export default MenuStack