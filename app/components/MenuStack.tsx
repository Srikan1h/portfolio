import React from 'react'
import Link from "next/link";


function MenuStack() {
  return (
    <div className="container sm:flex items-center justify-between p-2">
  <div className="title">
    <Link className="font-sans text-xl font-semibold"  href="./">Sai Srikanth</Link>
  </div>

 <ul className="flex gap-6 py-3 sm:py-0 border-neutral-700 border-b-1 sm:border-0">
     <li className="">
      <Link className="text-neutral-400 text-base" href="">Blog</Link>
    </li>
    

    <li>
      <Link className="text-neutral-400 text-base" href="/contact">Socials</Link>

    </li>
  </ul>
  </div>
  )
}

export default MenuStack