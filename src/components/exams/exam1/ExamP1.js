import React, { useState } from "react"
import { Link } from "react-router-dom"
//import Head from "./components/common/header/Head.js"
//import './components/exams/exam.css'
import { CircularProgress } from '@material-ui/core';


function ExamW1(){
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
                         <img src="images/exam1/11.jpeg"  alt=""/>
                          </div>
                          
                         
                    </tr>
                    <tr>    
                    <div class="image">
                    <img src="images/exam1/12.jpeg"  alt=""/>
                          </div>
                    </tr>
                    <tr> 
                    <div class="image">
                    <img src="images/exam1/13.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam1/14.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam1/15.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam1/16.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam1/17.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam1/18.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam1/19.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                    <div class="image">
                    <img src="images/exam1/20.jpeg"  alt=""/>
                          </div>
                     
                    </tr>
                    <tr>
                          <Link to='/complete1'><button>Go Back</button></Link>
                    </tr>
               </table>  
          </form>
        </section>
     </div>
</>
    )
}
export default ExamW1;