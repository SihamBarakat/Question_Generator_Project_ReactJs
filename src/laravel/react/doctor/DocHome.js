import React, { useState } from "react"
import { Link } from "react-router-dom"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './doctor.css'
import Login from '../login/Login'
import CourseHome from '../allcourses/CourseHome'
import Head from "../common/header/Head"
import Hero from "../home/hero/Hero";
import Header from "../common/header/Header";
import Team from '../team/Team'
import NavM from './NavM'
import Exam from './Exam'
import Search from '../search/Search';
import SideBar from "./SideBar";
import Question from "./Question";
//import DScript from '../docFile/DScript'
const DocHome =()=> {
    const [click, setClick] = useState(false);
   
    return (
        <>
        <header class="header">
   
   <section class="flex">

      <a href="home.html" class="logo">Doctor</a>

      <form  class="search-form">
         
         <Search/>
      </form>
       <div class="icons">
       
       <div id="menu-btn" class="fas fa-bars"></div>
         <div id="search-btn" ><i class="fas fa-search"><Search/></i></div>
         <div id="user-btn" class="fas fa-user"></div>
         <div id="toggle-btn" class="fas fa-sun"></div>
      
      </div>

      <div class="profile">
         <img src="images/team/t2.png" class="image" alt=""/>
         <h3 class="name">Ph.D Adrian Molises</h3>
         <p class="role">Doctor</p>
         <Link to='/profile'>view profile</Link>
        
         <div class="flex-btn">
           
         </div>
      </div>

   </section>

</header>   

<div class="side-bar">

   <div id="close-btn">
      <i class="fas fa-times"></i>
   </div>

   <div class="profile">
      <img src="images/team/t2.png" class="image" alt=""/>
      <h3 class="name">Ph.D Adrian Molises</h3>
      <p class="role">Doctor</p>
      <Link to='/profile' class="btn">view profile</Link>
      
   </div>

   <nav class="navbar">
   <Link to='/'><i class="fas fa-home"></i><span>home</span></Link>
   <Link to='/team'><i class="fas fa-question"></i><span>about</span></Link>
   <Link to='/coursehome'><i class="fas fa-graduation-cap"></i><span>Exams</span></Link>
   <Link to='/contact'><i class="fas fa-headset"></i><span>contact us</span></Link>
     
   </nav>

</div>

<section class="home-grid">


<section class="courses">
<h1 class="heading">Questions</h1>
<div class="box-container">
<div class="more-btn">
<Link to='/question'class="inline-option-btn">Show Questions</Link> 
  
</div>
</div>
</section>

<section class="courses">
<h1 class="heading">Exams Generate</h1>
<div class="box-container">
<div class="more-btn">
<Link to='/exam'class="inline-option-btn">Generate Exam</Link> 
  
</div>
</div>
</section>
   <h1 class="heading">quick options</h1>

   <div class="box-container">

      

      <div class="box">
         <h3 class="title">top categories</h3>
         <div class="flex">
            <a href="#"><i class="fas fa-code"></i><span>development</span></a>
            <a href="#"><i class="fas fa-chart-simple"></i><span>business</span></a>
            <a href="#"><i class="fas fa-pen"></i><span>design</span></a>
            <a href="#"><i class="fas fa-chart-line"></i><span>marketing</span></a>
            <a href="#"><i class="fas fa-music"></i><span>music</span></a>
            <a href="#"><i class="fas fa-camera"></i><span>photography</span></a>
            <a href="#"><i class="fas fa-cog"></i><span>software</span></a>
            <a href="#"><i class="fas fa-vial"></i><span>science</span></a>
         </div>
      </div>

      <div class="box">
         <h3 class="title">popular topics</h3>
         <div class="flex">
            <a href="#"><i class="fab fa-html5"></i><span>HTML</span></a>
            <a href="#"><i class="fab fa-css3"></i><span>CSS</span></a>
            <a href="#"><i class="fab fa-js"></i><span>javascript</span></a>
            <a href="#"><i class="fab fa-react"></i><span>react</span></a>
            <a href="#"><i class="fab fa-php"></i><span>PHP</span></a>
            <a href="#"><i class="fab fa-bootstrap"></i><span>bootstrap</span></a>
         </div>
      </div>
      

      

   </div>

</section>



<section class="courses">

   <h1 class="heading">our Exams</h1>
   <CourseHome/>
   <div class="box-container">
      

   <div class="more-btn">
   <Link to='/coursehome'class="inline-option-btn">view all Exams</Link>
     
   </div>
</div>
</section>
<script src="js/DScript.js"></script>
<script src="js/DScript.js"></script>
<script src="js/DScript.js"></script>
<script src="js/DScript.js"></script>
        </>
        
)
    }

export default DocHome;



/*
<>
        <header class="header">
        <section class="flex">

<a href="home.html" class="logo">Educa.</a>

<form action="search.html" method="post" class="search-form">
   <input type="text" name="search_box" required placeholder="search courses..." maxlength="100"/>
   <button type="submit" class="fas fa-search"></button>
</form>

<div class="icons">
   <div id="menu-btn" class="fas fa-bars"><Link to='/SideBar'></Link></div>
   <div id="search-btn" class="fas fa-search"><Search/></div>
   <div id="user-btn" class="fas fa-user"></div>
   <div id="toggle-btn" class="fas fa-sun"></div>
</div>

<div class="profile">
   <img src="images/pic-1.jpg" class="image" alt=""/>
   <h3 class="name">shaikh anas</h3>
   <p class="role">studen</p>
   <a href="profile.html" class="btn">view profile</a>
   <div class="flex-btn">
      <a href="login.html" class="option-btn">login</a>
      <a href="register.html" class="option-btn">register</a>
   </div>
</div>

</section>
       </header>  
<div class="side-bar">

   <div id="close-btn">
      <i class="fas fa-times"></i>
   </div>

   <div class="profile">
      <img src="./images/team/t2.png" class="image" alt=""/>
      <h3 class="name">Arthur MaGregor</h3>
      <p class="role">Doctor</p>
      <a href="profile.js" class="btn">view profile</a>
   </div>

   <nav class="navbar">
<Link to='/DocHome.js'><i class="fas fa-home"></i><span>home</span></Link>
        <SideBar/>
   

</nav>
</div>
<section class="home-grid">
    <h1 class="heading">Questions</h1>
     <Question/>

   <h1 class="heading">Exams Generate</h1>
     <Exam/>
   <div class="box-container">

     </div>

</section>
<section class="courses">

   <h1 class="heading">our Exam</h1>
<CourseHome/>
   <div class="box-container">

      

      
     body{
  
   background-image: url("E:\React\learn-react\public\images\bg1.png");
   padding-left: 0rem;
   background-size: cover;
   background-attachment: fixed;
   background-origin: content-box;
   position: absolute;
   
}


      

      

      
   </div>

   <div class="more-btn">
      <a href="courses.html" class="inline-option-btn">view all courses</a>
   </div>

</section>
        </>

*/


/*
 <nav class="navbar">
            
              
            
               <a href="DocHome.js"><i class="fas fa-home"></i><span>home</span></a>
                <a href="Team.js"><i class="fas fa-question"></i><span>about</span></a>
               <a href="courses.js"><i class="fas fa-graduation-cap"></i><span>Exams</span></a>
              <a href="/Question.js"><span>Question</span></a>
               <a href="contact.js"><i class="fas fa-headset"></i><span>contact us</span></a>
           </nav>


            <div class="flex-btn">
                   
                     <a href="Login.js" class="option-btn">login</a>
                     <a href="register.html" class="option-btn">register</a>
                     <Header/>  
                 </div>







                  <section class="flex">
                <h1  class="logo">Doctor</h1>
                <form  class="search-form">
                    <div class="box">
                      <input type="checkbox" id="check"/>
                      <div class="search-box">
                          <input type="text" placeholder="Type here..."/>
                              <label for="check" class="icon">
                              <i class="fas fa-search"></i>
                           </label>
                       </div>
                    </div>
                </form>
                <div class="icons">
                
             <div id="menu-btn" class="fas fa-bars"></div>
               <div id="search-btn" class="fas fa-search"><Search/></div>
         <div id="user-btn" class="fas fa-user"></div>
         <div id="toggle-btn" class="fas fa-sun"></div>

                 
                
                    
                </div>

                <div class="profile">
                         <img src="images/pic-1.jpg" class="image" alt=""/>
                         <h3 class="name">shaikh anas</h3>
                          <p class="role">studen</p>
                          <Link to ='/profile' class="btn">view profile</Link>
                       
         <div class="flex-btn">
            <a href="login.html" class="option-btn">login</a>
            <a href="register.html" class="option-btn">register</a>
         </div>
                  
            </div>
            </section> 
*/   
