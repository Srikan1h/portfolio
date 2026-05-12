import Link from 'next/link'
import React from 'react'


function Footer() {
  return (
    <div>
        <footer className=''>
          <div className='container col-12 col-lg-4 px-3'>


            <div className="d-flex">
  <div className=" flex-grow-1">
    <span className="text-body-secondary text-sm">Srikanth © 2007 – Present</span>
  </div>

  <div className="">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-twitter-x ms-1 text-secondary" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>

     <a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover font-monospace ps-1" href="https://x.com/srikan1h">(@srikan1h)</a> 
  </div>

</div>

            </div>
        </footer>
    </div>
  )
}

export default Footer