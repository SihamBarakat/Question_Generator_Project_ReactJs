import React from "react"
import { homeAbout } from "../../dummydata"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
        {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
    
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
