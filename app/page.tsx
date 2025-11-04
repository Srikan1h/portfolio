import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/img/map-light.webp"
import gif from "@/app/assets/img/unnamed.gif"



export default function Home() {
  return (
    <div className="sm:w-150  mx-auto py-4 sm:py-8 px-4 sm:px-3">
      <div className="container sm:flex items-center justify-between border-neutral-700 sm:border-b-1 pb-3 px-1">
  <div className="title">
    <span className="font-sans text-xl font-semibold
">Sai Srikanth</span>
  </div>

 <ul className="flex justify-between gap-6 py-3 sm:py-0 border-neutral-700 border-b-1 sm:border-0">
    <li className="">
      <Link className="text-gray-400" href="./">Projects</Link>
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
  </div>

  <section>
    <div className="pb-4 sm:py-5 border-b-1 border-neutral-700 px-1">


      <article className="">
  <Image width={250} height={190} alt="hero banner" className="w-100 sm:w-72 px-auto sm:float-right sm:ml-5 rounded-sm mb-4" src={gif} />
      <p className="">
        Hey! I’m Sai Srikanth — someone who loves figuring out how things work, especially in the world of technology. I enjoy building small projects, experimenting with code, and learning new concepts that help me improve as a developer and creator.
      </p>
<br />
<p className="">
  I’m inspired by modern tech products, creative design, and startups that solve real-world problems. I believe in growing through learning, sharing, and constant curiosity.
</p>
<br />
<p className="">
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
