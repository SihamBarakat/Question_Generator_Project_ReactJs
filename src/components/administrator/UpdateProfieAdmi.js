import react from 'react'
import { Link } from "react-router-dom"
//import  './updateprofile.css'
//import update from './update'
const UpdateProfieAdmi =()=>{
   
    return(
      <div class='hh'>
         <section class="Qcontainer">
         <header>UPDATE</header>
         <form action="#" class="form">
        <table>
          <tr>
            <td>
            <div class="column">
                  <div class="input-box">
                    <label>Administrator Name</label>
                    <input type="text" placeholder="Doctor Name" required />
                  </div>
               </div>
            </td>
          </tr>
          <tr>
                 <Link to ='/submit'><button>Submit</button></Link>
                 <Link to ='/Administrator'><button>Go Back</button></Link>
                   </tr>
          </table>
  </form>
</section>
    </div>

    )
}
export default UpdateProfieAdmi;