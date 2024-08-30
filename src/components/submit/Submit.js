import react from 'react'
//import './submit.css'
const Submit =()=>{
    <script>
    const section = document.querySelector("section");
    const overlay = document.querySelector(".overlay");
    const showBtn = document.querySelector(".show-modal");
const closeBtn = document.querySelector(".close-btn");
 showBtn.addEventListener("click", () => section.classList.add("active"));
 overlay.addEventListener("click", () =>section.classList.remove("active"));
  closeBtn.addEventListener("click", () =>section.classList.remove("active"));</script>
    return(
        <>
            <section>
                 <button class="show-modal">Show Modal</button>
                   <span class="overlay"></span>
                   <div class="modal-box">
                       <i class="fa-regular fa-circle-check"></i>
                       <h2>Completed</h2>
                       <h3>You have sucessfully downloaded all the source code files.</h3>
                       <div class="buttons">
                          <button class="close-btn">Ok, Close</button>
                          <button>Open File</button>
                       </div>
                  </div>
             </section>
        </>
    )
}
export default Submit;
