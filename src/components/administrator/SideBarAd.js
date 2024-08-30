
import React, { useState } from "react"
import { Link } from "react-router-dom"
//import Head from "./Head"
import "../common/header/header.css"
//import Hero from "../../home/hero/Hero";

const SideBarAd = () => {
  const [click, setClick] = useState(false)

  return (
    <>

  
      <nav class="navbar">
        <ul >
          <li>
            <Link to='/'><i class="fas fa-home"></i><span>home</span></Link>
          </li> 
        </ul>
        <ul>
          <li>
            <Link to='/teachers'><i class="fas fa-chalkboard-user"></i><span>teachers</span></Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/team'><i class="fas fa-question"></i><span>about</span></Link>
          </li>
        </ul>
       
        <ul>
          <li>
            <Link to='/team'><i class="fas fa-headset"></i><span>contact us</span></Link>
          </li>
        </ul>
       
       
       
      </nav>
      
 

  </>
   
  )
}

export default SideBarAd


/*

 
            <li>
           <Link to='/courses'>All Exams</Link> 
            </li>
            <li>
             <Link to='/pin'>Pin</Link> 
             </li>
            <li>
            <Link to='/dochome'>DocHome</Link> 
            </li>
            <li>
             <Link to='/team'>Team</Link> 
            </li>

            <li>
            <Link to='/contact'>Contact</Link> 
            </li>


*/