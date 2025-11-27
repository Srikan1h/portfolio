import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/img/map-light.webp"
import gif from "@/app/assets/img/unnamed.gif"



export default function Links() {
  return (
    <div className="">


  <section>
    <div className="pb-4 sm:py-5">


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
