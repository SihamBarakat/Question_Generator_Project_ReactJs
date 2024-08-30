import React, { useState } from "react"
import { Link } from "react-router-dom"
//import Head from "./components/common/header/Head.js"
//import './components/exams/exam.css'
import { CircularProgress } from '@material-ui/core';


function ExamP2(){
  const [click, setClick] = useState(false)
 
    return(
      <>
        <div class='hh'>       
          <section class="Qcontainer">
             <header>Exam As PDF File</header>
              <form action="#" class="form">
                 <table>
                     <tr>
                      
                         <div class="image">
                         <img src="images/exam2/5.jpeg"  alt=""/>
                          </div>
                          
                         
                    </tr>
                    <tr>    
                    <div class="image">
                    <img src="images/exam2/6.jpeg"  alt=""/>
                          </div>
                    </tr>
                    <tr> 
                    <div class="image">
                    <img src="images/exam2/7.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam2/8.jpeg"  alt=""/>
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
export default ExamP2;