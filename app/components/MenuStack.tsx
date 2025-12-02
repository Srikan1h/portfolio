import React from 'react'
import Link from "next/link";


function MenuStack() {
  return (
    <div className="container flex items-center justify-between p-2">
      <div className="title">
        <Link className="font-sans text-xl font-semibold"  href="./">Sai Srikanth</Link>
      </div>

      <ul className="menu">
        <li className="link1">
          <Link className="text-neutral-500 text-base" href="https://kryptokanth.medium.com">Thoughts</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuStack