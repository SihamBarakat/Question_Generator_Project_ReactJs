import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "../common/header/Head"
import './question.css'
import { CircularProgress } from '@material-ui/core';


function Exam(){
  const [click, setClick] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
 
    return(
      <>
        <div class='hh'>
         <section class="Qcontainer">
         <header>Exam Form</header>
         <form action="#" class="form">
        <table>
        <tr>
            <td>
            <div class="column">
                  <div class="input-box">
                    <label>Exam Name</label>
                    <input type="text" placeholder="Exam Name" required />
                  </div>
               </div>
            </td>

          </tr>
          <tr>
            <td>
            <div class="column">
                  <div class="input-box">
                    <label>Subject Name</label>
                    <input type="text" placeholder="Subject Name" required />
                  </div>
               </div>
            </td>
          </tr>
          <tr>
            <td>
            <div class="column">
                  <div class="input-box">
                    <label>Fculty</label>
                    <input type="text" placeholder="Fculty" required />
                  </div>
               </div>
            </td>
          </tr>
          <tr>
            <td>
            <div class="input-box address">
                   <label>Grad</label>
                   <input type="number" placeholder="Enter exam grad" required />
               </div>
            </td>
          </tr>
          <tr>
          <div class="gender-box">
          <h3>Difficulty Level</h3>
          <div class="gender-option">
            <td>
            <div class="gender">
              <input type="radio" id="check-male" name="gender"  />
              <label for="check-male">Easy</label>
            </div>
            </td>
            <td>
            <div class="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Middle</label>
            </div>
            </td>
            <td>
            <div class="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Difficult</label>
            </div>
            </td>
            </div>
            </div>
          </tr>

          
          <div class="gender-box">
          <h3>Chapter Number</h3>
          <tr>
          <div class="gender-option">
            <td>
            <div class="gender">
              <input type="checkbox" id="check-female" name="gender" />
              <label for="check-female">1</label>
            </div>
            </td>
            <td>
            <div class="gender">
              <input type="checkbox" id="check-female" name="gender" />
              <label for="check-female">2</label>
            </div>
            </td>
             <td>
             <div class="gender">
              <input type="checkbox" id="check-other" name="gender" />
              <label for="check-other">3</label>
            </div>
            </td>
             <td>
             <div class="gender">
              <input type="checkbox" id="check-other" name="gender" />
              <label for="check-other">4</label>
            </div>
            </td>
             <td>
             <div class="gender">
              <input type="checkbox" id="check-other" name="gender" />
              <label for="check-other">5</label>
            </div>
            </td>
            </div>
            </tr>

            <tr>
            <div class="gender-option">
              <td>
                  <div class="gender">
                     <input type="checkbox" id="check-other" name="gender" />
                     <label for="check-other">6</label>
                  </div>
              </td>
              <td>
              <div class="gender">
              <input type="checkbox" id="check-other" name="gender" />
              <label for="check-other">7</label>
            </div>
                </td>
                <td>
                   <div class="gender">
                  <input type="checkbox" id="check-other" name="gender" />
                 <label for="check-other">8</label>
                </div>
                </td>
                <td>
                <div class="gender">
              <input type="checkbox" id="check-other" name="gender" />
              <label for="check-other">9</label>
            </div>
                  </td>
                  <td>
                  <div class="gender">
              <input type="checkbox" id="check-other" name="gender" />
              <label for="check-other">10</label>
            </div>
                    </td>


            </div>
              </tr>

          </div>
          <tr>
          
          <Link to ='/loading'><button>Generate</button></Link>
          <Link to ='/dochome'><button>Go Back</button></Link>
                
                   </tr>
          </table>
  </form>
</section>
    </div>
</>
    )
}
export default Exam;