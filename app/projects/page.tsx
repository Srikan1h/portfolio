import Link from "next/link";
import Image from "next/image";




export default function Projcts() {
  return (
    <div className="body sm:w-150 mx-auto py-4 sm:py-8 px-4 sm:px-3">
      <div className="container sm:flex items-center justify-between border-neutral-700 sm:border-b-1 pb-3 px-1">
  <div className="title">
    <Link href="./" className="font-sans text-2xl font-semibold">Sai Srikanth</Link>
  </div>

 <ul className="flex gap-6 py-3 sm:py-0 border-neutral-700 border-b-1 sm:border-0">
    <li className="">
      <Link className="text-gray-200" href="./">Projects</Link>
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
      <Link className="text-gray-400" href="./links">Links</Link>

    </li>
  </ul>
  </div>

  <section>
    <div className="pb-4 sm:py-5 border-b-1 border-neutral-700 ">


        <div className="sm:grid grid-cols-2 gap-4">
  <div className="bg-neutral-900 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-3">
            <h1 className="text-xl font-semibold">Employee Attrition Prediction Model</h1>
            <Link href="https://github.com/Srikan1h/Employee-Attrition-Prediction-Model">
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github " viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
            </Link>
           
    </div>
    <p className="text-neutral-400">A predictive model to estimate whether an employee is likely to leave the company based on their personal and professional factors. Complete end-to-end ML project with data cleaning, analysis, and model deployment.</p>
  </div>
 
</div>


    </div>
    
  </section>
  <footer>
    <div className="flex py-3 justify-between">
      <div>
        <span className="text-neutral-500 ">© kanth.in</span>
      </div>

      <div className="flex">

      </div>
    </div>
  </footer>
</div>

  );
}
