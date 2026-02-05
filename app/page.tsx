import Link from "next/link";


export default function Home() {
  return (

    
    <div className="">
  

  <section>
    <div className="pb-7 sm:py-2 ">

      <article className="py-2">
        <p className="text-xl text-neutral-300">
          I'm currently a CS under grad. I build web applications, experiment with Machine Learning Models, and actively invest in financial markets. I love the internet, and <a className="text-blue-500" href="https://kanth.in">kanth.in</a> serves as my public key on the Web2 space.
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

                            <Link className="flex font-mono text-sm py-2 px-3 bg-neutral-800 rounded-md mb-2 justify-between" href="https://linkedin.com/in/saisrikanths">

        LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-up-right mt-1 mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>


      </Link>

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





   

 
</div>







    </div>
    
  </section>
  
</div>

  );
}
