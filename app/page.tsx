import Link from "next/link";

export default function Home() {
  return (
    <div className="text-sm fw-normal">
      <section className = "about pb-2">
        <div>          
          <h5 className="text-dark">About</h5>
          
          <p className="text-body-secondary">Computer Science student with interests in software engineering, machine learning, and <a className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="https://capital.kanth.in">
                investing
              </a>.</p>

          <ul className="text-body-secondary ps-4">
            <li className="pb-2">
              Currently, I'm a Research Intern at NITK Surathkal, exploring Deep Image Prior and Transformer-based image restoration techniques.
            </li>
            <li className="pb-2">
              Previously, I built the client onboarding pipeline for an export business from the ground up.
            </li>
            <li className="pb-0">
              Before university, I joined the founding team of an early-stage startup and helped build and launch a web platform serving a network of 150+ private schools across South Tamil Nadu.
            </li>
          </ul>

        </div>
      </section>
        


           {/*  <section className = "interests pb-2">
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
            </section> */}

            <section className="passion py-2">
              <h5 className="text-dark">A few Highlights</h5>
              <div>
                {/* <p className = "text-body-secondary">
              In the AI era, the bottleneck for most businesses isn’t ideas but, it’s execution across their digital journey. {" "}<a className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://softmerise.github.io">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p> */}

            <p className="text-body-secondary">

              I've built and won multiple hackathons, including first-place finishes at Smart India Hackathon 2022, IIT Bombay Techfest 2024,  SRMIST Digithon 3.0 2026, among others.
            </p>

              <p className="text-body-secondary">
              Throughout these experiences, I've learned to work with lean teams, move quickly, align with people around a shared goal, and turn ideas into real products.</p>
            </div>
          </section>

          

          <section className="contact pb-3">
            <h5 className="text-dark">Get in touch</h5>
            
            <p className="text-body-secondary">
              Open to conversations around tech, research, startups, and opportunities.
            <br />
              You can reach me via <a className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="mailto:sai@kanth.in">
                email
              </a> or <a className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://linkedin.com/in/saisrikanths">
                Linkedin
              </a>, I’d love to hear from you!
            </p>
            
          </section>

        </div>
     
  
  );
}