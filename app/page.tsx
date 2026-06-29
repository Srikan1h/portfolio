import Link from "next/link";

export default function Home() {
  return (
    <div className="text-sm fw-normal">
      <section className = "about pb-1">
        <div className="pb-2">
          <span className="text-dark fw-normal fs-5">About</span>
        </div>
        <div>          
          
          <p className="text-body-secondary">Computer Science student with interests in software engineering, machine learning, and <a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="https://capital.kanth.in">
                investing
              </a>.</p>

          <ul className="text-body-secondary ps-4">
            <li className="pb-2">
              Currently, I'm a Research Intern at <a href="https://www.linkedin.com/school/nitk-surathkal/" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover">NITK Surathkal</a>, exploring Deep Image Prior and Transformer-based image restoration techniques.
            </li>
            <li className="pb-2">
              Previously, I built the client inquiry pipeline and blogging platform for <a href="https://www.linkedin.com/company/trombaytrading" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover">Trombay Trading LLP</a>, an international exporter, from the ground up.
            </li>
            <li className="pb-0">
              Before university, I joined the founding team of <a href="https://www.linkedin.com/company/jezhtech" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover">Jezh Technologies</a> were I co-built and launched a web platform serving a network of 150+ private CBSE schools across south Tamilnadu.
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

            <section className="passion py-1">
              <div className="pb-2">
                <span className="text-dark fw-normal fs-5">A few Highlights</span>
              </div>
              <div>
                {/* <p className = "text-body-secondary">
              In the AI era, the bottleneck for most businesses isn’t ideas but, it’s execution across their digital journey. {" "}<a className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://softmerise.github.io">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p> */}

            <p className="text-body-secondary">

              I've built and won multiple hackathons, including first-place finishes at Smart India Hackathon 2022, IIT Bombay Techfest 2024,  SRMIST Digithon 3.0 2026, among others.
            </p>

              {/* <p className="text-body-secondary">
              Throughout these experiences, I've learned to work with lean teams, move quickly, align with people around a shared goal, and turn ideas into real products.</p> */}
            </div>
          </section>

          

          <section className="contact pb-2">
            <div className="pb-2">
              <span className="text-dark fw-normal fs-5">Get in touch</span>
            </div>
            
            <p className="text-body-secondary">
              Open to conversations around tech, research, startups, and opportunities.
           <br />
            <span className="text-body-secondary mt-sm-2">
              You can reach me via <a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="mailto:sai@kanth.in">
                email
              </a>, I’d love to hear from you!
            </span></p>
            
          </section>

        </div>
     
  
  );
}