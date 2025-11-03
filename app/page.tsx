import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/img/map-light.webp"
import gif from "@/app/assets/img/unnamed.gif"



export default function Home() {
  return (
    <div className="w-150 mx-auto py-8 px-3">
      <div className="container flex items-center justify-between border-neutral-700 border-b-1 pb-3 px-1">
  <div className="title">
    <span className="font-sans text-xl font-semibold
">Sai Srikanth</span>
  </div>

 <ul className="flex gap-6">
    <li className="">
      <Link className="" href="./">Projects</Link>
    </li>
    <li>
      <Link className="" href="./">Writings</Link>

    </li>
    <li>
      <Link className="" href="./">Music</Link>

    </li>
  </ul>
  </div>

  <section>
    <div className="py-5 border-b-1 border-neutral-700 px-1">


      <article>
  <Image width={240} height={190} alt="hero banner" className="float-right ml-5 rounded-sm" src={gif} />
      <p className="text-justify
">Hey! I’m Sai Srikanth — someone who loves figuring out how things work, especially in the world of technology. I enjoy building small projects, experimenting with code, and learning new concepts that help me improve as a developer and creator.</p>
<br />
<p className="text-justify
">I’m inspired by modern tech products, creative design, and startups that solve real-world problems. I believe in growing through learning, sharing, and constant curiosity.
</p>
<br />
<p className="text-justify
">
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

      <div className="flex">
      <Link className="flex font-mono text-sm" href="https://linkedin.com/in/saisrikanths">

        LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-up-right mt-1 mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>


      </Link>
       <Link className="flex font-mono text-sm ms-3" href="https://github.com/srikan1h">

        GitHub <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-up-right mt-1 mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>


      </Link>
      </div>
    </div>
  </footer>
</div>

  );
}
