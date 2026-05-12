import Link from 'next/link'
import React from 'react'


function Footer() {
  return (
    <div>
        <footer className=''>
          <div className='container col-12 col-lg-4 border-top py-3'>


            <div className="d-flex">
  <div className=" flex-grow-1">
    <span className="text-secondary text-sm">Srikanth © 2007 – Present</span>
  </div>
  <div className="">
    <a className="ps-3 text-decoration-none text-dark" href="https://linkedin.com/in/saisrikanths/">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-linkedin ms-1 text-secondary" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg> 
                </a> 
  </div>
  <div className="">
     <a className="ps-3 text-decoration-none text-secondary" href="https://x.com/srikan1h">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-twitter-x ms-1 text-secondary" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
            </a> 
  </div>
  <div className="">
    <a className="ps-3 text-decoration-none text-secondary" href="mailto:ss2675@srmist.edu.in">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-envelope-fill ms-1 text-secondary" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
            </a>
  </div>
</div>

            </div>
        </footer>
    </div>
  )
}

export default Footer