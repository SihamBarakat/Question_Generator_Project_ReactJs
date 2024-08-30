import React, { useState } from "react"
import { Link } from "react-router-dom"
import './loading.css'
import Countdown from './Countdown'
import DocxReader from "../doctor/DocxReader";

const Loading= ()=>{
   

  
    return(
        <div class="lbody">
        <div class="lcontainer">
        <div class="wrapper">
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
        </div>
        <div class="text">
           Please wait <br/>
           
           <Link to='/complete1' ><button id="button" >Show </button></Link>
         
        </div>
        <Countdown/>
       
     </div>
    
     </div>


      
    )

}





export default Loading;

/*

 const button = document.getElementById("button");
button.disabled = true; // disabling it by default

// capturing the checkbox element
const checkBoxElement = document.getElementById("agree");

// function to disable the button
const disableButton = () => {
  button.disabled = false;
};

// calling the disableButton() function when the checkbox's state gets change
checkBoxElement.addEventListener("change", disableButton);
 
    











*/

/*
 <div class="lcontainer">
        <div class="spinner"></div>
      </div>
      */
/*
 <div class ="lbody">
        <div class="lcontainer">
        <div class="wrapper">
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
           <div class="loader">
              <div class="dot"></div>
           </div>
        </div>
        <div class="text">
           Please wait <br/>
          <DocxReader/>
        </div>
        <Countdown/>
       
     </div>
     </div>
     */