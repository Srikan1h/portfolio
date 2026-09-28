import Link from "next/link";

export default function Home() {
  return (
    <div className="fw-normal ">

      <section className = "about pb-2" style={{ textAlign: 'justify' }}>
        <div className="noto-serif-light">          
          <p>
            I'm building <a className="text-decoration-none" href="https://twinly.tech">Twinly</a> for Windows while studying Computer Science at SRM Institute of Science and Technology, KTR, where I was selected to be part of <a className="text-decoration-none" href="https://nexttechlab.in">Next Tech Lab</a>, a QS award-winning research lab.
          </p>

          <p>
            Before my undergrad, I was already experimenting with building products. In 2021, I built a <a className="text-decoration-none" href="https://mathelogy.netlify.app/">mathematics learning platform</a> for secondary-school students during the COVID-19 lockdowns, which went on to help 200+ students across multiple schools. Later in high school, I co-developed an <a className="text-decoration-none" href="https://www.dakshinsahodaya.com/">education platform</a> that was adopted by a consortium of 150+ schools across South Tamil Nadu as part of <a className="text-decoration-none" href="https://www.linkedin.com/company/jezhtech">my first startup</a> venture.
          </p>
          
          <p className="past">
            Since then, I've worked across software engineering and research, from researching Deep Image Prior for historical palm-leaf manuscript restoration at <a className="text-decoration-none" href="https://www.nitk.ac.in/">NITK Surathkal</a> during my freshman year to competing in and winning multiple national-level hackathons, including <a href="https://www.sih.gov.in/" className="text-decoration-none">Smart India Hackathon</a> in 2022 and <a href="https://techfest.org/" className="text-decoration-none">Techfest </a>at IIT Bombay in 2024, and serving in student leadership roles.
          </p>
          
        </div>
      </section>
        

          

          <section className="contact pb-1">
            <p className="noto-serif-light">
             Connect with me on <a className="text-decoration-none" href="https://linkedin.com/in/saisrikanths">LinkedIn</a>, <a className="text-decoration-none" href="https://github.com/srikan1h">GitHub</a>, <a className="text-decoration-none" href="https://x.com/srikan1h">X</a>, or at sai [at] kanth [dot] in
            </p>
            
          </section>


    </div>
     
  
  );
}