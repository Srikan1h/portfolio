import Link from "next/link";

export default function Home() {
  return (
    <div className="text-sm fw-normal">
      <section className = "about pb-2">
        <div>          
          <h4 className="text-dark">About</h4>
          <p className="text-body-secondary">I’m a software tinkerer and Student. Currently pursuing my undergrad in Computer Science and Engineering. I love building stuff on the internet, that solve niche problems.</p>
        </div>
      </section>
        


            <section className = "interests pb-2">
              <h4 className="text-dark">Interests</h4>

              <div  className="d-flex flex-wrap gap-2 interests py-1 ">
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Machine Learning</span>
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Systems design</span>
              <span className="px-3 py-1 text-sm rounded-3 bg-body-secondary text-body-secondary fw-normal">Backend</span>
              
              


              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">AI Agents</span>
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Open source</span>
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Community</span>

              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Startups</span>
              <span className="px-3 py-1 rounded-3 bg-body-secondary text-body-secondary fw-normal">Finance</span>
 

              

 
              </div>
            </section>

            <section className="passion py-2">
              <h4 className="text-dark">Passion</h4>
              <div>
                <p className = "text-body-secondary">
              In the AI era, the bottleneck for most businesses isn’t ideas but, it’s execution across their digital journey. {" "}<a className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://softmerise.github.io">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p>

            <p className="text-body-secondary">
              I’ve built through and won hackathons with lean teams, learning to move fast, collaborate closely, and bring people on the same page to turn ideas into real products.</p>
            </div>
          </section>

          <section className="contact pb-3">
            <h4 className="text-dark">Get in touch</h4>
            
            <p className="text-body-secondary">
             I enjoy product-oriented thinking and staying open-minded by engaging in conversations, listening to different perspectives, and asking questions.
            </p>
            <p className="text-body-secondary">
              You can <a className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="mailto:sai@kanth.in">
                email
              </a> me directly or reach out on <a className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://linkedin.com/in/saisrikanths">
                linkedin
              </a>, I’d love to hear from you!
            </p>
            
          </section>

        </div>
     
  
  );
}