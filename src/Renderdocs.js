import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./components/common/header/Head.js"
import './components/doctor/question.css'
import { CircularProgress } from '@material-ui/core';


function Renderdocs(){
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
     
  <button>Submit</button>
  <button>Go Back</button>
  
     </tr>




</table> 

</form>

</section>
</div>
</>
    )
}
export default Renderdocs;
  /*
Renderdocs
   <td><img src="images/t1.png"  alt=""styles={{height:1000000,width:10000000000}}/><br/></td>
       
      </tr>
  <tr>
  <td> <img src="images/t3.png"  alt=""styles={{height:1000000,width:10000000000}}/></td>

   const docs = [
      { url :"C:\Users\Toshiba\Desktop\SQL injection.docx",
       fileType:"docs",
        fileName:"demo.docx"
  
       },
      
    ];
    return (
      <>
       <h1>Document</h1>
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}
        styles={{height:1000}}
        />
     </>

     */