import React from "react"
import { Link } from "react-router-dom"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const TeamAdmini = () => {
  return (
    <>
      <Back title='About' />
      <section className='team padding'>
        <div className='tcontainer grid'>
          <TeamCard />
        </div>
        <Link to ='/Administrator'class="inline-option-btn">Go Back</Link>
      </section>
      
    </>
  )
}

export default TeamAdmini
