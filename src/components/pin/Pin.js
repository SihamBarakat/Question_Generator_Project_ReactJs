import React from "react"
import './pin.css'
//import {scriptPin} from './scriptPin'
function Pin() {
    return (
      <div class="pbody">
         <div class="pcontainer">
          <headerp>
            <i class="bx bxs-check-shield"></i>
          </headerp>
          <h4>Enter OTP Code</h4>
          <form action="#">
            <div class="input-field">
              <input type="number"  />
              <input type="number"  />
              <input type="number"  />
              <input type="number"  />
            </div>
           <button>Verify OTP</button>
         </form>
      </div>
      </div>
    )
  }
  
  export default Pin







  

