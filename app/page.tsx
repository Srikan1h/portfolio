import Link from "next/link";

export default function Home() {
  return (
    <div className="fw-normal">

      <section className = "about pb-2">
        <div>          
          <p className="">
            I'm building <a href="https://twinly.tech">Twinly</a> for Windows while studying CS at SRM Institute of Science and Technology KTR, where I'm part of <a href="https://nexttechlab.in">Next Tech Lab</a>.
          </p>
          
          <p className="">In the past, I've enjoyed working on Deep Image Prior research for restoring historical palm-leaf manuscripts at NITK Surathkal, building an education platform for a consortium of 150+ schools, winning multiple national-level hackathons, and serving in student leadership roles.</p>
          
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

          

          <section className="contact pb-2">
            <p className="">
              Connect with me on <a href="https://linkedin.com/in/saisrikanths">linkedIn</a>,  <a href="https://github.com/srika1h">github</a> , <a href="https://x.com/srika1h">x</a> , or at sai[at]kanth[dot]in .
            </p>
            
          </section>

        </div>
     
  
  );
}