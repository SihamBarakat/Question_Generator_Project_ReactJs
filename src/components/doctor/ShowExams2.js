import react, { useState }  from 'react'
import { Link } from "react-router-dom"
import './com.css'
//import '../doctor/question.css'
const ShowExams2 = () => {
  const [click, setClick] = useState(false)
    return (
      <div class ="hh">
          <section class="ccontainer">
         
          <h2>Show</h2>
          <Link to ='/examw2'><button>DOCX File</button></Link>
          <Link to ='/examp2'><button>PDF File</button></Link> <br/>
          <Link to ='/dochome'><button>Go back to doctor page</button></Link> 
          
        
          
          
            
    </section>
    
      </div>
    )
}
export default ShowExams2