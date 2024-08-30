import React, { useState } from "react"
import { Link } from "react-router-dom"
//import './n.css'
const  NavM =()=>{
    const [click, setClick] = useState(false)
    return(
        <>
         <div class="ncontainer">
    <nav>
        <div class="column">
        <ul  className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
             <h1> <Link to='/'>Home</Link> </h1>
            </li>
            
            <li>
            <h1><Link to='/courses'>All Exams</Link> </h1>
            </li>
            <li>
            <h1> <Link to='/pin'>Pin</Link> </h1>
            </li>
            <li>
            <h1><Link to='/dochome'>DocHome</Link> </h1>
            </li>
            <li>
            <h1>  <Link to='/team'>Team</Link> </h1>
            </li>
           
            <li>
            <h1> <Link to='/contact'>Contact</Link> </h1>
            </li>
          </ul>
        </div>
    </nav>
  </div>
        </>
    )
}
export default NavM