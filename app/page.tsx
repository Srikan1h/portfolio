import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section>
        <div className="pb-7 sm:py-2 ">
          
          <article className="py-2 text-xl text-neutral-300">
            <p>I love building things on the internet.</p>
            <p>
                Keenly focused on full-stack systems, machine learning, and financial markets. 
            </p>
            <p >
              In the AI era, the bottleneck for most businesses isn’t ideas but,it’s execution across their digital journey. {" "}<a className="text-blue-400" href="https://linkedin.com/company/softmerise">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p>

            <p>
              I enjoy conversations, listening to different perspectives, and asking questions.
Always open to ideas and learning.
            </p>
          </article>

          <div className="grid grid-flow-row auto-rows-max text-neutral-400 py-5">

            <p >⟶ Connect [<Link href="https://linkedin.com/in/saisrikanths/"> <u>LinkedIn </u> </Link>] 
            </p> 

            <p >⟶ Thoughts [<Link href="https://x.com/srikan1h"> <u>X.com </u> </Link>] 
            </p>

            <p >⟶ Reach out [<Link href="mailto:ss2675@srmist.edu.in"> <u>E-mail </u> </Link>] 
            </p>





            

          </div>
        </div>
      </section>
    </div>
  );
}