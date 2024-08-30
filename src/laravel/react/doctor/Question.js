import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "../common/header/Head"
import './question.css'
import Header from '../common/header/Header';
function Question (){
  const [click, setClick] = useState(false)

    return(
      <>
     
        <div class='hh'>

      
         
            <section class="Qcontainer">
      <header>Question Form</header>
      <form action="#" class="form">
      <table>
        <tr>
        <div class="column">
      <div class="input-box">
            <label>Doctor Name</label>
            <input type="text" placeholder="Doctor Name" required />
          </div>
      </div>
          </tr>

          <tr>
          <div class="column">
              <td>
              <div class="input-box">
            <label>Subject Name</label>
            <input type="text" placeholder="Subject Name" required />
          </div>
              </td>
              <td>
              <div class="input-box">
            <label>Chapter Number</label>
            <input type="number" placeholder="Chapter Number" required />
          </div>
              </td>
              </div>
            </tr>
           <tr>
           <div class="input-box">
          <label>Question</label>
          <input type="text" placeholder="Enter Question" required />
        </div>
           </tr>
           <tr>
           <div class="input-box">
          <label>Answer 1</label>
          <input type="text" placeholder="Enter Answer 1" required />
        </div>
           </tr>
           <tr>
           <div class="input-box">
          <label>Answer 2</label>
          <input type="text" placeholder="Enter Answer 2" required />
        </div>
           </tr>
           <tr>
           <div class="input-box">
          <label>Answer 3</label>
          <input type="text" placeholder="Enter Answer 3" />
        </div>
           </tr>
           <tr>
           <div class="input-box address">
          <label>Grad</label>
          <input type="number" placeholder="Enter question grad" required />
        </div>
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
               <tr>
                 
               <Link to ='/'><button>Submit</button></Link>
               <Link to ='/dochome'><button>Go Back</button></Link>
              
                 </tr>




      </table> 
     
      </form>

    </section>
        </div>
        </>
    )
}
export default Question;


/*
<div class="column">
            <div class="select-box">
              <select>
                <option hidden>Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
            <input type="text" placeholder="Enter your city" required />
          </div>
<div class="column">
            <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
          */