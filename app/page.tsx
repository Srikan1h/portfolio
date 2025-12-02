import Link from "next/link";


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
    <div className="pb-7 sm:py-2 ">

      <article className="py-2">
        <p className="text-neutral-300">
          I am a software developer. I build web applications, experiment with Machine Learning Models, and actively invest in financial markets. I love the internet, and <u>kanth.in</u> serves as my public key on the Web 2.0 space.
        </p>
          {/*<div className="links pt-3">
            <Link className=" text-sm text-neutral-500" href="">
              GitHub
            </Link>
            <br />
            <Link className=" text-sm text-neutral-500" href="">
              X.com
            </Link>
          </div>*/}
      </article>


      <br />

              <div className="grid grid-flow-row auto-rows-max">

       <Link className="flex font-mono text-sm py-2 px-3 bg-neutral-800 rounded-md mb-2 justify-between " href="https://x.com/srikan1h">

        X.com <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-up-right mt-1 mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>
      </Link>

          <Link className="flex font-mono text-sm py-2 px-3 bg-neutral-800 rounded-md mb-2 justify-between " href="https://github.com/srikan1h">

        GitHub <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-up-right mt-1 mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>


      </Link>

      <a className="flex font-mono text-sm py-2 px-3 bg-neutral-800 rounded-md mb-2 justify-between" href="mailto:ss2675@srmist.edu.in">

        E-mail <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-up-right mt-1 mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>


      </a>




            <Link className="flex font-mono text-sm py-2 px-3 bg-neutral-800 rounded-md mb-2 justify-between" href="https://linkedin.com/in/saisrikanths">

        LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-up-right mt-1 mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>


      </Link>
   

 
</div>







    </div>
    
  </section>
  
</div>

  );
}
