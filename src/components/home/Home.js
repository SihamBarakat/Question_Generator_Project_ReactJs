import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Header from '../common/header/Header'
const Home = () => {
  return (
    <>
    <Header/>
      <Hero />
     
     <AboutCard/>
      <Testimonal />
      
      
    </>
  )
}

export default Home
