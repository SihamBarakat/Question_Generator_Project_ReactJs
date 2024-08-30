import react from 'react'
import {Link} from 'react-router-dom'
import Search from '../search/Search';
function AdminProfile() {
    return (
        <>
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
                       <h3 class="name">Siham Barakat</h3>
                       <p class="role">Admin</p>
                       <Link to='/adminisProfile'>view profile</Link>
                       <div class="flex-btn"></div>
                  </div>
               </section>
            </header> 
         



<section class="user-profile">

   <h1 class="heading">your profile</h1>

   <div class="info">

      <div class="user">
         
         <h3>Siham Barakat</h3>
         <p>Admin</p>
         
         <Link to ='/admin'class="inline-btn">Go Back</Link>
      </div>
   
      <div class="box-container">
   
        
   
      </div>
   </div>

</section>
        </>
)
}
export default AdminProfile;













