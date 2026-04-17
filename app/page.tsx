import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section>
        <div className="py-2 ">
          
          <article className=" text-neutral-300">
            <p>I'm a cs undergrad, who love's building things on the internet. My interests are ...</p>

            <section className = "flex flex-wrap gap-3 interests pb-5">
              
  <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 whitespace-nowrap">
    Full-stack systems
  </span>
  <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 whitespace-nowrap">
    machine learning
  </span>
  <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 whitespace-nowrap">
    Computer vision
  </span>
     <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 whitespace-nowrap">
    Startups
  </span>
   <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 whitespace-nowrap">
    Programming
  </span>

  <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 whitespace-nowrap">
    Open source
  </span>

    <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 whitespace-nowrap">
    Crypto
  </span>
  <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 whitespace-nowrap">
    Financial markets
  </span>
 

   
  

            </section>

            <p >
              In the AI era, the bottleneck for most businesses isn’t ideas but, it’s execution across their digital journey. {" "}<a className="text-blue-400" href="https://linkedin.com/company/softmerise">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p>

            <p>I’ve built through hackathons and lean teams, learning to move fast, collaborate closely, and bring people on the same page to turn ideas into real products.</p>
            
            <p className="pt-5 border-t-1 border-neutral-800">
             I enjoy product-oriented thinking and staying open-minded by engaging in conversations, listening to different perspectives, and asking questions.
            </p>
          </article>

        </div>
      </section>
    </div>
  );
}