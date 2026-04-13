import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section>
        <div className="pb-7 sm:py-2 ">
          
          <article className="py-2 text-neutral-300">
            <p>I love building things on the internet.</p>
            <p>
                Keenly focused on full-stack systems, machine learning, and financial markets. 
            </p>
            <p >
              In the AI era, the bottleneck for most businesses isn’t ideas but, it’s execution across their digital journey. {" "}<a className="text-blue-400" href="https://linkedin.com/company/softmerise">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p>

            <p>I’ve built through hackathons and lean teams, learning to move fast, collaborate closely, and bring people on the same page to turn ideas into real products.</p>

            <p>
             I enjoy product-oriented thinking and staying open-minded by engaging in conversations, listening to different perspectives, and asking questions.
            </p>
          </article>

        </div>
      </section>
    </div>
  );
}