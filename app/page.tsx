import Link from "next/link";

export default function Home() {
  return (
    <div className="py-4 fs-5">
      <div>
        <span className="fs-2">Hi! I'm Sai Srikanth</span>
          
  
        <p className="text-body-secondary">An undergradate student pursuing Computer Science and Engineering. I love building stuff on the internet, that solve niche problems.</p>
      </div>

        


            <section className = "d-flex flex-wrap gap-2 interests py-2">
              <span className="pt-1">My interests lie in </span>
              <span className="fs-6 px-3 pt-1 rounded-pill fs-6 bg-secondary-subtle text-dark fw-normal">Backend dev</span>
              <span className="fs-6 px-3 pt-1 rounded-pill fs-6 bg-secondary-subtle text-dark fw-normal">Low latency</span>

              <span className="fs-6 px-3 pt-1 rounded-pill fs-6 bg-secondary-subtle text-dark fw-normal">AI Agents</span>
              <span className="fs-6 px-3 pt-1 rounded-pill fs-6 bg-secondary-subtle text-dark fw-normal">Crypto</span>

              <span className="fs-6 px-3 pt-1 rounded-pill fs-6 bg-secondary-subtle text-dark fw-normal">Open source</span>
              <span className="fs-6 px-3 pt-1 rounded-pill fs-6 bg-secondary-subtle text-dark fw-normal">Community</span>

              <span className="fs-6 px-3 pt-1 rounded-pill fs-6 bg-secondary-subtle text-dark fw-normal">Startups</span>
              <span className="fs-6 px-3 pt-1 rounded-pill fs-6 bg-secondary-subtle text-dark fw-normal">Financial markets</span>

            </section>

            <div>
              <p className = "text-body-secondary pt-4">
              In the AI era, the bottleneck for most businesses isn’t ideas but, it’s execution across their digital journey. {" "}<a className="text-blue-400" href="https://linkedin.com/company/softmerise">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p>

            <p className="text-body-secondary">I’ve built through hackathons and lean teams, learning to move fast, collaborate closely, and bring people on the same page to turn ideas into real products.</p>
            
            <p className="text-body-secondary">
             I enjoy product-oriented thinking and staying open-minded by engaging in conversations, listening to different perspectives, and asking questions.
            </p>
            </div>
            


        </div>
     
  
  );
}