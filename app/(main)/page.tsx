import Link from "next/link";

export default function Home() {
  return (
    <div className="fw-normal ">

      <section className = "about pb-2 " style={{ textAlign: 'justify' }}>
        <div>          
          <p className="">
            I'm building <a className="text-decoration-none" href="https://twinly.tech">Twinly</a> for Windows while studying Computer Science at SRM Institute of Science and Technology, KTR, where I was selected to be part of <a className="text-decoration-none" href="https://nexttechlab.in">Next Tech Lab</a>, a QS award-winning research lab.
          </p>

          <p>
            Before college, I was already experimenting with building products. In 2021, I built a <a className="text-decoration-none" href="https://mathelogy.netlify.app/">mathematics learning platform</a> for secondary-school students during the COVID-19 lockdowns, which went on to help 200+ students across multiple schools. Later in high school, I co-developed an <a className="text-decoration-none" href="https://www.dakshinsahodaya.com/">education platform</a> that was adopted by a consortium of 150+ schools across South Tamil Nadu as part of <a className="text-decoration-none" href="https://www.linkedin.com/company/jezhtech">my first startup</a> venture.
          </p>
          
          <p className="past">Since then, I've worked across software engineering and research, from researching Deep Image Prior for historical palm-leaf manuscript restoration at <a className="text-decoration-none" href="https://www.nitk.ac.in/">NITK Surathkal</a> to competing in and winning multiple national-level hackathons, including <a href="https://www.sih.gov.in/" className="text-decoration-none">Smart India Hackathon</a> in 2022 and <a href="https://techfest.org/" className="text-decoration-none">Techfest </a>at IIT Bombay in 2024, and serving in student leadership roles.</p>
          
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

{/*             <section className="passion pb-2">
              <div className="pb-2">
                <span className="text-dark fw-normal fs-5">A few Highlights</span>
              </div>
              <div>
                {/* <p className = "text-body-secondary">
              In the AI era, the bottleneck for most businesses isn’t ideas but, it’s execution across their digital journey. {" "}<a className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://softmerise.github.io">
                Softmerise
              </a>{" "} is my current attempt at reducing that friction.
            </p> 

            <p className="text-body-secondary">

              I've won multiple hackathons, including 🥇 first-place finishes at Smart India Hackathon 2022, IIT Bombay Techfest 2024,  SRMIST Digithon 3.0 2026, among others.
            </p>

              {/* <p className="text-body-secondary">
              Throughout these experiences, I've learned to work with lean teams, move quickly, align with people around a shared goal, and turn ideas into real products.</p> 
            </div>
          </section> */}

          

          <section className="contact pb-1">
            <p className="">
             Connect with me on <a className="text-decoration-none" href="https://linkedin.com/in/saisrikanths">LinkedIn</a>, <a className="text-decoration-none" href="https://github.com/srikan1h">GitHub</a>, <a className="text-decoration-none" href="https://x.com/srikan1h">X</a>,
or at sai [at] kanth [dot] in.
            </p>
            
          </section>

          {/* <section>
            <p>
              Notes on things I've built and learned. <a className="text-decoration-none" href="/thoughts">Blog →</a>
            </p>
          </section> */}

        </div>
     
  
  );
}