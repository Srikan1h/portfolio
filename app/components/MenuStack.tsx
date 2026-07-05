import React from 'react'
import Link from "next/link";


function MenuStack() {
  return (

  <nav className ="navbar navbar-expand-lg bg-white">
    <div className ="container col-12 col-md-11 col-lg-8 col-xl-4 px-lg-3 px-4">
    <a className ="navbar-brand fs-4 fw-normal" href="/">Sai Srikanth</a>

    


<button className="btn btn-transparent text-decoration-underline d-lg-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
</button>

<div className="offcanvas offcanvas-end d-lg-none px-3" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <span className="offcanvas-title fs-4 fw-normal" id="offcanvasRightLabel">Sai Srikanth</span>
    <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body py-0">
    <nav className="nav flex-column">
  <a className="nav-link text-dark px-0" href="/thoughts">Thoughts</a>
  <a className="nav-link text-dark px-0" href="https://linkedin.com/in/saisrikanths">Linkedin</a>

  <a className="nav-link text-dark px-0" href="https://github.com/srikan1h">Github</a>

  <a className="nav-link text-dark px-0" href="https://x.com/srikan1h">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-twitter-x text-dark mb-1 me-1" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>
  </a>


</nav>
  </div>
</div>
    
    
    


    <div className ="collapse navbar-collapse" id="navbarNav">
      <ul className ="navbar-nav ms-auto pe-1">
        <li className ="nav-item ms-md-4">
          <a className ="mx-1 link-secondary link-offset-3 link-underline-opacity-0 link-underline-opacity-25-hover" href="/thoughts">Thoughts</a>
        </li>
        <li className ="nav-item ms-md-4">
          <a className ="mx-1 link-secondary link-offset-3 link-underline-opacity-0 link-underline-opacity-25-hover" href="https://linkedin.com/in/saisrikanths">Linkedin</a>
        </li>
        <li className ="nav-item ms-md-4">
          <a className ="mx-1 link-secondary link-offset-3 link-underline-opacity-0 link-underline-opacity-25-hover" href="https://github.com/srikan1h">Github</a>
        </li>
        <li className ="nav-item ms-md-4">
          <a className ="mx-1 link-secondary link-offset-3 link-underline-opacity-0 link-underline-opacity-25-hover" href="https://x.com/srikan1h">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-twitter-x text-secondary mb-1 me-1" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg></a>
        </li>

      </ul>
    </div>
  </div>
</nav>


  )
}

export default MenuStack