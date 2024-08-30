import React from "react"
import { Link } from "react-router-dom"
import Back from "../common/back/Back"
import "../contact/contact.css"

const Contactd = () => {
  /*const map = '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.7758813327423!2d36.28035307478337!3d33.08868036799508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15196a8b6c2c1465%3A0xb6e143f6f6ae35cf!2sYarmouk%20Private%20University!5e0!3m2!1sen!2s!4v1683391317289!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
 
  
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
 className='right row'
 
  */
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
      <div className='flexSB'>
          <div >
            <h1>Contact us</h1>
            <p>We're open for any suggestion </p><br/>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4><br/>
                <p>The international road linking Damascus and Daraa at a distance of 45 km from Damascus</p><br/>
             
                <div className='box'>
                   <h4>EMAIL:</h4><br/>
                     <p> info@ypu.edu.sy</p><br/>
                     
              
                <h4>PHONE:</h4>
                <p>01568691414</p>
                </div>
                <Link to ='/dochome'class="inline-option-btn">Go Back</Link>
              </div>
            </div>

           

           
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactd
