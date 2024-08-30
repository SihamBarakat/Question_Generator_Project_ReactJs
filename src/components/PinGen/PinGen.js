import react from 'react'

//import importScript from 'customHooks/importScript';
//import './gen.css'
import { Helmet } from "react-helmet"
//import script from 'react-scripts'

//import PScript from './PScript'
function PinGen () {
   
   
    return (
    <>
        <div class="gcontainer">
      <h1>Captcha Generator</h1>
      <div class="input_field captch_box">
        <input type="text" value="" disabled />
        <button class="refresh_button" >
          <i class="fa-solid fa-rotate-right"></i>
        </button>
      </div>
      <div class="input_field captch_input">
        <input type="text" placeholder="Enter captcha" />
      </div>
      <div class="message">Entered captcha is correct</div>
      <div class="input_field button disabled">
        <button>Submit Captcha</button>
      </div>
    </div>
    <script src="js/PScript.js"></script>
    </>
    )
}
export default PinGen


/*
import { Helmet } from "react-helmet"
<Helmet>
           <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"/>
           </Helmet>
   

*/