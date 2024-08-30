import react, { useState } from 'react'
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import CourseHome from '../allcourses/CourseHome'
//import './script'
//import './profile.html'
import Login from '../login/Login'
//import Const from '../doctor/Const';
import Header from "../common/header/Header";
import Search from '../search/Search';
//import SideBarAd from './SideBarAd';
import Exam from '../doctor/Exam'
import Question from "../doctor/Question";
//import DScript from '../docFile/DScript'
import '../doctor/doctor.css'
const  Admin =()=> {
    const [click, setClick] = useState(false)

    return (
        <div class="dbody">
         <header class="header">
                <section class="flex">
                <img src="/images/logo.jpg" class='image'alt=""/>
                   <a href="home.html" class="logo">Admin</a>
                   <form  class="search-form"> <Search/> </form>
                   <div class="icons">
                       <div id="search-btn" ><i class="fas fa-search"><Search/></i></div>
                   </div>
                   <div class="profile">
                       <img src="images/team/t3.png" class="image" alt=""/>
                       <h3 class="name">Ph.D Anna Hanzen</h3>
                       <p class="role">Admin</p>
                       <Link to='/adminisProfile'>view profile</Link>
                       <div class="flex-btn"></div>
                  </div>
               </section>
            </header>  
        <div class="side-bar">
           <div id="close-btn">
              <i class="fas fa-times"></i>
            </div>
           <div class="profile">
               
                <h3 class="name">Siham Barakat</h3>
                <p class="role">Admin</p>
                <Link to='/adminProfile' class="btn">view profile</Link>
           </div>
           <nav class="navbar">
               
               <Link to='/team'><i class="fas fa-question"></i><span>about</span></Link>
               <Link to='/ShowAllDoctorsAd'><i class="fas fa-chalkboard-teacher"></i><span>doctors</span></Link>
               <Link to='/contact'><i class="fas fa-headset"></i><span>contact us</span></Link>
               <Link to='/ShowAllAd'><i class="fas fa-user-circle"></i><span>Administrators</span></Link>
               <Link to='/'><i class="fa fa-sign-out"></i><span>Logout</span></Link>
           </nav>
       </div>
       <section class="home-grid">
       <section>
                  <h1 class="heading">our Doctors</h1>
                  <div class="box-container">
                  <div class="more-btn">
                      <Link to='/showAllDoctorsAd'class="inline-option-btn">view all Doctors</Link> 
                  </div>
                 </div>
              </section>
      </section>
      <section class="courses">
         
         <section>
         <h1 class="heading">our Administrator</h1>
              <div class="box-container">
                  <div class="more-btn">
                      <Link to='/ShowAllAd'class="inline-option-btn">view all Administrator</Link>
                   </div>
              </div>
         </section>
      </section>
       <script src="js/DScript.js"></script>
       <script src="js/DScript.js"></script>
       <script src="js/DScript.js"></script>
        <script src="js/DScript.js"></script>
    </div>     
       
)
    }

export default Admin;

/*

 <>
        <header class="header">
   
   <section class="flex">

      <a href="home.html" class="logo">Admin</a>

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
         <img src="images/team/t3.png" class="image" alt=""/>
         <h3 class="name">Siham Barakat</h3>
         <p class="role">Admin</p>
         <Link to='/adminProfile'>view profile</Link>
        
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
      <img src="images/team/t3.png" class="image" alt=""/>
      <h3 class="name">Siham Barakat</h3>
      <p class="role">Admin</p>
      <Link to='/adminProfile' class="btn">view profile</Link>
      
   </div>

   <nav class="navbar">
   <Link to='/'><i class="fas fa-home"></i><span>home</span></Link>
   <Link to='/team'><i class="fas fa-question"></i><span>about</span></Link>
   <Link to='/teachers'><i class="fas fa-chalkboard-teacher"></i><span>doctors</span></Link>
 
      
   </nav>

</div>

<section class="home-grid">



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

   
   <div class="box-container">
      

   <div class="more-btn">
   <Link to='/coursehome'class="inline-option-btn">view all courses</Link>
     
   </div>
</div>
</section>
<script src="js/DScript.js"></script>
<script src="js/DScript.js"></script>
<script src="js/DScript.js"></script>
<script src="js/DScript.js"></script>
        </>

        */
   
