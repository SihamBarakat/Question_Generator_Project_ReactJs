import React, { useState } from "react"
import { Link } from "react-router-dom"
//import Head from "./Head"
//import "./header.css"
//import Hero from "../../home/hero/Hero";

const SideBar = () => {
  const [click, setClick] = useState(false)

  return (
    <>

   
      <nav class="navbar">
        <ul >
          <li>
            <Link to='/'>Home</Link>
          </li> 
        </ul>
        <ul>
          <li>
            <Link to='/dochome'>DocHome</Link>
          </li>
        </ul>
        <ul >
          <li>
            <Link to='/question'>Questions</Link>
          </li>
        </ul>
        <ul >
          <li>
            <Link to='/exam'>Exams</Link>
          </li>
        </ul>
       
      </nav>
      
 

  </>
   
  )
}

export default SideBar


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