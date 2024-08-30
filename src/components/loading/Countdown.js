import React, { useState } from "react"
import { Link } from "react-router-dom"
import './count.css'

const Countdown =()=>{
    return(
      <div classs="cbody">
        <div class="countdown">
    <div class="number">
      <h2>10</h2>
    </div>
    
    <div class="number">
      <h2>9</h2>
    </div>
    
    <div class="number">
      <h2>8</h2>
    </div>
    
    <div class="number">
      <h2>7</h2>
    </div>
    
    <div class="number">
      <h2>6</h2>
    </div>
    
    <div class="number">
      <h2>5</h2>
    </div>
    
    <div class="number">
      <h2>4</h2>
    </div>
    
    <div class="number">
      <h2>3</h2>
    </div>
    
    <div class="number">
      <h2>2</h2>
    </div>
    
    <div class="number">
      <h2>1</h2>
    </div>
   
  </div>
  </div>
    )
}
export default Countdown;