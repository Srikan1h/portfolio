import Link from 'next/link'
import React from 'react'


function Footer() {
  return (
    <div>
        <footer className=''>
          <div className='container col-12 col-lg-6 border-top py-3'>
            <div className="flex">

                <span className="pe-3"><a className="text-decoration-none text-dark" href="https://linkedin.com/in/saisrikanths/"> LinkedIn </a> 
            </span> 

            <span className="pe-3"><a className="text-decoration-none text-dark" href="https://x.com/srikan1h"> X.com  </a> 
            </span>

            <span className="pe-3"><a className="text-decoration-none text-dark" href="mailto:ss2675@srmist.edu.in"> E-mail </a></span>





            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer