// for add questions

import react, { useState }  from 'react'
import { Link } from "react-router-dom"
import './com.css'
//import '../doctor/question.css'
const Complete = () => {
  const [click, setClick] = useState(false)
    return (
      <div class ="hh">
          <section class="ccontainer">
          <header> <h2 class="ic"><i class="fa-regular fa-circle-check"></i></h2></header>
          <h2>Completed</h2>
         
          <Link to ='/dochome'><button>Go to doctor page</button></Link> 
          
        
          
          
            
    </section>
    
      </div>
    )
}
export default Complete