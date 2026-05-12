import Link from "next/link";

export default function Home() {
  return (
    <div className="text-sm fw-normal">
      <div>
          
        <h3 className="text-dark">About</h3>
        <p className="text-body-secondary">I’m a software engineer and Student. I’m originally from Nagercoil. Currently pursuing my undergrad in Computer Science and Engineering. I love building stuff on the internet, that solve niche problems.</p>
      </div>

        


            <section className = "interests py-2">
              <h3 className="text-dark">Interests</h3>

              <div  className="d-flex flex-wrap gap-3 interests py-1 ">
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Backend</span>
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Systems design</span>

              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Low latency</span>

              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">AI Agents</span>
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Crypto</span>

              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Open source</span>
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Community</span>

              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Startups</span>
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Financial markets</span>
              </div>
            </section>
            <section className="passion py-3">
                                    <h3 className="text-dark">Passion</h3>

            
            <div>
              <p className = "text-body-secondary">
              In the AI era, the bottleneck for most businesses isn’t ideas but, it’s execution across their digital journey. {" "}<a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://linkedin.com/company/softmerise">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p>

            <p className="text-body-secondary">
              I’ve built through and won hackathons with lean teams, learning to move fast, collaborate closely, and bring people on the same page to turn ideas into real products.</p>
            
            <p className="text-body-secondary">
             I enjoy product-oriented thinking and staying open-minded by engaging in conversations, listening to different perspectives, and asking questions.
            </p>
            </div>
            
</section>

        </div>
     
  
  );
}