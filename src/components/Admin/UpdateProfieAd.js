import react from 'react'
import { Link } from "react-router-dom"
//import  './updateprofile.css'
//import update from './update'
const UpdateProfieAd =()=>{
   
    return(
        <>
           <div class='hh'>
         <section class="Qcontainer">
         <header>UPDATE</header>
         <form action="#" class="form">
        <table>
          <tr>
            <td>
            <div class="column">
                  <div class="input-box">
                    <label>Doctor Name</label>
                    <input type="text" placeholder="Doctor Name" required />
                  </div>
               </div>
            </td>
          </tr>
          <tr>
                 <Link to ='/submit'><button>Submit</button></Link>
                 <Link to ='/dochome'><button>Go Back</button></Link>
                   </tr>
          </table>
  </form>
</section>
    </div>
        </>

    )
}
export default UpdateProfieAd;