import React, { useState } from "react"
import { Link } from "react-router-dom"
//import Head from "./components/common/header/Head.js"
//import './components/exams/exam.css'
import { CircularProgress } from '@material-ui/core';


function ExamW2(){
  const [click, setClick] = useState(false)
 
    return(
      <>
        <div class='hh'>       
          <section class="Qcontainer">
             <header>Exam As DOCX File</header>
              <form action="#" class="form">
                 <table>
                     <tr>
                      
                         <div class="image">
                         <img src="images/exam2/1.jpeg"  alt=""/>
                          </div>
                          
                         
                    </tr>
                    <tr>    
                    <div class="image">
                    <img src="images/exam2/2.jpeg"  alt=""/>
                          </div>
                    </tr>
                    <tr> 
                    <div class="image">
                    <img src="images/exam2/3.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam2/4.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    
                    <tr>
                          <Link to='/complete2'><button>Go Back</button></Link>
                    </tr>
               </table>  
          </form>
        </section>
     </div>
</>
    )
}
export default ExamW2;