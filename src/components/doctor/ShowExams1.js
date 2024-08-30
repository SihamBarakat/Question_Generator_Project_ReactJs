import react, { useState }  from 'react'
import { Link } from "react-router-dom"
import './com.css'
//import '../doctor/question.css'
const ShowExams1 = () => {
  const [click, setClick] = useState(false)
    return (
      <div class ="hh">
          <section class="ccontainer">
         
          <h2>Show</h2>
          <Link to ='/examw1'><button>DOCX File</button></Link>
          <Link to ='/examp1'><button>PDF File</button></Link> <br/>
          <Link to ='/dochome'><button>Go back to doctor page</button></Link> 
          
        
          
          
            
    </section>
    
      </div>
    )
}
export default ShowExams1