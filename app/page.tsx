import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/img/map-light.webp"
import gif from "@/app/assets/img/unnamed.gif"



export default function Home() {
  return (

    
    <div className="">
     {/* <div className="container sm:flex items-center justify-between border-neutral-700 sm:border-b-1 pb-3 px-1">
  <div className="title">
    <span className="font-sans text-2xl font-semibold">Sai Srikanth</span>
  </div>

 <ul className="flex gap-6 py-3 sm:py-0 border-neutral-700 border-b-1 sm:border-0">
    <li className="">
      <Link className="text-gray-400" href="./projects">Projects</Link>
    </li>
     <li className="">
      <Link className="text-gray-400" href="./">Blog</Link>
    </li>
    <li>
      <Link className="text-gray-400" href="./">CV</Link>

    </li>
    <li>
      <Link className="text-gray-400" href="./">Music</Link>

    </li>
    <li>
      <Link className="text-gray-400" href="/links">Links</Link>

    </li>
  </ul>
  </div>*/}

 {/* <section>
    <div className="flex justify-left py-3 bg-transparent">
  <div className="flex relative">

    <Link href="/" className="group relative z-10 w-5 h-5 bg-black rounded-full border-2 border-neutral-600 shadow-xl transition-all duration-300 active:bg-neutral-100 focus:bg-neutral-100 focus:text-black hover:border-neutral-400 hover:-translate-y-2 flex items-center justify-center text-white font-normal font-xs p-5 ">
      1
    </Link>

    <Link href="#" className="group relative z-20 -ml-[9px] w-5 h-5 rounded-full bg-black rounded-full border-2 border-neutral-600 shadow-xl transition-all duration-300 focus:bg-neutral-100 focus:text-black hover:border-neutral-400 hover:-translate-y-2 flex items-center justify-center text-white font-normal font-xs p-5">
      2
    </Link>

    <Link href="/projects" className="group relative z-30 -ml-[9px] w-5 h-5 rounded-full bg-black rounded-full border-2 border-neutral-600 shadow-xl transition-all duration-300 focus:bg-neutral-100 focus:text-black hover:border-neutral-400 hover:-translate-y-2 flex items-center justify-center text-white font-normal font-xs p-5">
      3
    </Link>

    <Link href="/links" className="group relative z-40 -ml-[9px] w-5 h-5 rounded-full bg-black rounded-full border-2 border-neutral-600 shadow-xl transition-all duration-300 focus:bg-neutral-100 focus:text-black hover:border-neutral-400 hover:-translate-y-2 flex items-center justify-center text-white font-normal font-xs p-5">
      4
    </Link>

   

  </div>
</div>
  </section>*/}
  

  <section>
    <div className="pb-4 sm:py-5 px-1">
       <div className="title">
    <h1 className="font-sans text-2xl text-white font-semibold">Hi, I'm Sai Srikanth</h1>
    <p className="font-sans text-base text-neutral-300 font-normal mt-2 mb-4">Full Stack Dev</p>

  </div>

      <article className="border-y-1 py-6 border-neutral-800 ">
  <Image width={250} height={190} alt="hero banner" className="w-100 sm:w-72 px-auto sm:float-right sm:ml-5 rounded-sm mb-4" src={gif} />
      <p className="text-neutral-300">
        Someone who loves figuring out how things work, especially in the world of technology. I enjoy building small projects, experimenting with code, and learning new concepts that help me improve as a developer and creator.
      </p>
<br />
<p className="text-neutral-300">
  I’m inspired by modern tech products, creative design, and startups that solve real-world problems. I believe in growing through learning, sharing, and constant curiosity.
</p>
<br />
<p className="text-neutral-300">
  When I’m not coding or exploring new tech, you’ll find me brainstorming product ideas, watching tech breakdowns, or learning something new that sparks my interest.
  </p>
</article>







    </div>
    
  </section>
  <footer>
    <div className="flex py-3 justify-between">
      <div>
        <span className="text-neutral-500 ">© kanth.in</span>
      </div>

      <div className="flex w-auto">
      <Link className="break-all" href="">

      </Link>
      </div>
    </div>
  </footer>
</div>

  );
}
