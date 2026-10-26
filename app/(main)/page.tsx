import Link from "next/link";

export default function Home() {
  return (
    <div className="fw-normal ">

      <section className = "about pb-2" style={{ textAlign: 'justify' }}>
        <div className="noto-serif-light">          
          <p>
            I'm a Computer Science undergrad at SRM Institute of Science and Technology, KTR, where I was selected to be part of <a className="text-decoration-none" href="https://nexttechlab.in">Next Tech Lab</a>, a QS award-winning research lab.
          </p>

          <p>
            Before my undergrad in 2021, I developed <a className="text-decoration-none" href="https://mathelogy.netlify.app/">Mathelogy</a>, a platform providing CBSE mathematics notes to students across multiple schools during the COVID-19 lockdowns. I later co-developed an <a className="text-decoration-none" href="https://www.dakshinsahodaya.com/">education platform</a> as a founding engineer at <a className="text-decoration-none" href="https://www.linkedin.com/company/jezhtech">Jezh Technologies</a> (my first startup venture) which was adopted by a consortium of 150+ schools across South Tamil Nadu.
          </p>
          
          <p className="past">
            Since starting university, I've explored both research and software engineering, from researching on Deep Image Prior for historical palm-leaf manuscript restoration at <a className="text-decoration-none" href="https://www.nitk.ac.in/">NITK Surathkal</a> during my freshman year to working on <a className="text-decoration-none" href="https://www.twinly.tech/">Twinly</a>'s Windows team, where I developed repository analysis and Git automation workflows for its AI agent.
          </p>

          <p className="achievements">
           I've also competed in and won multiple national-level hackathons, including <a href="https://www.sih.gov.in/" className="text-decoration-none">Smart India Hackathon</a> in 2022 and <a href="https://techfest.org/" className="text-decoration-none">Techfest </a>at IIT Bombay in 2024, and serving in student leadership roles.
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