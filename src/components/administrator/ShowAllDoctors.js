import React from "react"
import { Link } from "react-router-dom"
import "../allcourses/courses.css"
import { doctors } from "../../dummydata"
import Search from '../search/Search';
//import "../team/team.css"
//import "../about/about.css"
const ShowAllDoctors = () => {
  return (
    <>
    <header class="header">
                <section class="flex">
                <img src="/images/logo.jpg" class='image'alt=""/>
                   <a href="home.html" class="logo">Administrator</a>
                   <form  class="search-form"> <Search/> </form>
                   <div class="icons">
                       <div id="search-btn" ><i class="fas fa-search"><Search/></i></div>
                   </div>
                   <div class="profile">
                       <img src="images/team/t3.png" class="image" alt=""/>
                       <h3 class="name">Ph.D Anna Hanzen</h3>
                       <p class="role">Administrator</p>
                       <Link to='/adminisProfile'>view profile</Link>
                       <div class="flex-btn"></div>
                  </div>
               </section>
            </header> 
    <section className='coursesCard'>
        <div className='ccontainer grid2'>
          {doctors.map((val) => (
            <div className='items'>
              <div className='content flex'>
                
                <div className='name'>
                  <h2>{val.name}</h2>
                  <div className='rate'>
                    
                  </div>
                  <div className='details'>
                  <h3>{val.work} </h3>
                  </div>
                </div>
              </div>
              <div className='price'> 
              </div>
             
            </div>
          ))}
          
        </div>
        <Link to ='/Administrator'class="inline-option-btn">Go Back</Link>
      </section>
    </>
  )
}

export default ShowAllDoctors



/*import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='ccontainer grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard;*/
