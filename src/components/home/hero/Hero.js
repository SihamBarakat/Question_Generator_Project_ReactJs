import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO EXAMY' title='Best Question Paper generator' />
            <p>Yarmouk Private University was founded in 2005 to be one of the important pillars of  higher education in our beloved country, Syria.  The Presidential decree 262 of 2007  was issued to authorize the birth of YPU, which constitutes nine faculties.  The Minister of Higher Education inaugurated the university on 29/10/2008 declaring with that the beginning of its scientific activity, and that was after assuring the university provision of the various elements of reliability.</p><br/>
            <p>Yarmouk Private University prioritized catering for students’ scientific and practical needs through providing them with all necessary scientific factors (distinctive professors, effective academic guidance, highly developed laboratories ...), giving them the opportunity to practice useful and appropriate students’ activities.  In addition, YPU offers sophisticated services, which enable students to excel in their studies within a fertile and suitable environment for academic excellence and achievement.</p><br/>
            <p>At the same time, the university has been working on the qualitative elevation of education.  That is by adhering strictly to the regulations of reliability set by the Ministry of Higher Education, and by benefiting from the experiences of foreign, regional and local prestigious universities.</p><br/>
            

            <p>providing suitable places and technical support for students in order to practice their scientific, artistic, literary, and sporting hobbies through the assistance of specialized clubs and experts.</p><br/>
            
            <div className='button'>
             
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
