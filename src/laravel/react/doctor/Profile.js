import react from 'react'
import { Link } from "react-router-dom"
function Profile() {
    return (
        <>
        <header class="header">
   
   <section class="flex">

      <a href="home.html" class="logo">Examy</a>

      <form action="search.html" method="post" class="search-form">
         <input type="text" name="search_box" required placeholder="search courses..." maxlength="100"/>
         <button type="submit" class="fas fa-search"></button>
      </form>

      <div class="icons">
         <div id="menu-btn" class="fas fa-bars"></div>
         <div id="search-btn" class="fas fa-search"></div>
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
      <img src="images/team/t2.png" class="image" alt=""/>
      <h3 class="name">Ph.D Adrian Molises</h3>
      <p class="role">Doctor</p>
      <a href="profile.html" class="btn">view profile</a>
   </div>

   <nav class="navbar">
   <Link to='/'><i class="fas fa-home"></i><span>home</span></Link>
   <Link to='/team'><i class="fas fa-question"></i><span>about</span></Link>
   <Link to='/coursehome'><i class="fas fa-graduation-cap"></i><span>Exams</span></Link>
   <Link to='/contact'><i class="fas fa-headset"></i><span>contact us</span></Link>
   </nav>

</div>

<section class="user-profile">

   <h1 class="heading">your profile</h1>

   <div class="info">

      <div class="user">
         <img src="images/team/t2.png" alt=""/>
         <h3>Ph.D Adrian Molises</h3>
         <p>Doctor</p>
         <Link to='/UpdateProfie'>update profile</Link>
        
      </div>
   
      <div class="box-container">
   
        
   
      </div>
   </div>

</section>
        </>
)
}
export default Profile;













