import React from 'react'
import Link from "next/link";


function MenuStack() {
  return (
    <div className="container flex items-center justify-between p-2">
      <div className="title">
        <Link className="font-sans text-2xl font-semibold"  href="./">Sai Srikanth</Link>
      </div>

      <ul className="menu flex">
        <li className="link1 pl-4">
          <Link className="text-neutral-400" href="/thoughts">
          Thoughts</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuStack