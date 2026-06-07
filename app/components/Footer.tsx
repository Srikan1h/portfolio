import Link from 'next/link'
import React from 'react'


function Footer() {
  return (
    <div>
        <footer>
          <div className='container col-12 col-lg-4 p-3'>


            <div className="d-flex">
  <div className=" flex-grow-1">
    <span className="text-body-secondary text-sm">© 2007 – Present</span>
  </div>

  <div className="">
        <a href="https://x.com/srikan1h?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @srikan1h</a><script async src="https://platform.x.com/widgets.js" charSet="utf-8"></script>
  </div>

</div>

            </div>
        </footer>
    </div>
  )
}

export default Footer