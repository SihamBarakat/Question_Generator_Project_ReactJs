import React from "react"
import Heading from "../common/heading/Heading"
//import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='right row'>
            <Heading  title='Benefits About Question Paper generator' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item shadow'>
                   <div className='box flex'>
                      <div className='name'>
                         <h2>{val.title}</h2>
                         <p>{val.desc}</p>
                        </div>
                    </div>
                    </div>
                )
              })}
            </div>
          </div>
          <div className='left row'>
            <img src='./images/back.png' alt='' />
          </div>
        </div>
      </section>
     
    </>
  )
}

export default AboutCard
