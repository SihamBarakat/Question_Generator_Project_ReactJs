import "./App.css"
//import { render } from "react-dom";
import Header from "./components/common/header/Header"
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import TeamDoc from './components/team/TeamDoc'
import TeamAdmini from './components/team/TeamAdmini'
//import Switch from 'react-switch'
import Home from "./components/home/Home"
import Blog from './components/blog/Blog'
import Contact from "./components/contact/Contact"
//import Footer from "./components/common/footer/Footer"
//import Login from './components/login/Login'
//import Testimonal from './components/home/testimonal/Testimonal'
import Login from './components/login/Login'
import DocHome from "./components/doctor/DocHome";
//import Search from "./components/search/Search";
import Pin from "./components/pin/Pin";
//import Pin from "./components/pin/Pin";
//import  {AccountBox} from "./components/login/Login";
import Administrator from './components/administrator/Administrator'
import Question from "./components/doctor/Question";
import PinGen from "./components/PinGen/PinGen";
import Profile from "./components/doctor/Profile";
import Exam from "./components/doctor/Exam";
import Admin from './components/Admin/Admin'
import AdminisProfile from './components/administrator/AdminisProfile'
import AdminProfile from './components/Admin/AdminProfile'
import UpdateProfieDoc from './components/doctor/UpdateProfieDoc'
import UpdateProfieAdmi from './components/administrator/UpdateProfieAdmi'
//import Headers from './components/Headers/Headers'
import DocViewer ,{DocViewerRenders} from '@cyntler/react-doc-viewer'
import Loading from './components/loading/Loading'
import Countdown from './components/loading/Countdown'
//import Submit from './components/submit/Submit'
import Submit from './components/submit/Submit'
import Renderdocs from './Renderdocs'
import ShowAllDoctors from './components/administrator/ShowAllDoctors'
import Contactd from './components/doctor/Contactd'
import Contactad from './components/administrator/Contactad'
import ShowAllAd from './components/Admin/ShowAllAd'
import ShowAllDoctorsAd from './components/Admin/ShowAllDoctorsAd'
import ShowAllExams1 from './components/doctor/ShowAllExams1'
import ShowAllExams2 from './components/doctor/ShowAllExams2'
import ShowExams1 from './components/doctor/ShowExams1'
import ShowExams2 from './components/doctor/ShowExams2'
import UpdateProfieAd from './components/Admin/UpdateProfieAd'
//import SignupForm from './components/login/accountBox/signupForm'
import DocxReader from './components/doctor/DocxReader'
import Complete from './components/doctor/Complete'
import Complete1 from './components/exams/exam1/Complete1'
import Complete2 from './components/exams/exam2/Complete2'
import ExamW1 from './components/exams/exam1/ExamW1'
import ExamP1 from './components/exams/exam1/ExamP1'
import ExamW2 from './components/exams/exam2/ExamW2'
import ExamP2 from './components/exams/exam2/ExamP2'
function App() {
  const doc = [{ uri: "C:\Users\Toshiba\Desktop\SQL injection.docx" }];
  return (
    <>
    
    <Router>
  
  <Routes>
    <Route  path='/' element={<Home/>} />
    <Route path='/courseHome' element={<CourseHome/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route  path='/DocHome' element={<DocHome/>} />
    <Route  path='/administrator' element={<Administrator/>} />
    <Route  path='/adminisProfile' element={<AdminisProfile/>} />
    <Route  path='/admin' element={<Admin/>} />
    <Route  path='/adminProfile' element={<AdminProfile/>} />
    <Route  path='/exam' element={<Exam/>} />
    <Route  path='/question' element={<Question/>} />
    <Route  path='/team' element={<Team/>} />

    <Route  path='/TeamAdmini' element={<TeamAdmini/>} />
    <Route  path='/TeamDoc' element={<TeamDoc/>} />

    <Route  path='/pinGen' element={<PinGen/>} />
    <Route path ='./updateProfieAdmi' element={<UpdateProfieAdmi/>}/>
    <Route path ='./updateProfieAd' element={<UpdateProfieAd/>}/>
    <Route  path='/Complete' element={<Complete/>} />
    <Route  path='/Complete1' element={<Complete1/>} />
    <Route  path='/Complete2' element={<Complete2/>} />
    <Route  path='/updateProfiedoc' element={<UpdateProfieDoc/>} />
    <Route  path='/pin' element={<Pin/>} />
    <Route  path='/contact' element={<Contact/>} />
    <Route  path='/Contactd' element={<Contactd/>} />
    <Route  path='/Contactad' element={<Contactad/>} />
    <Route  path='/loading' element={<Loading/>} />
    <Route  path='/renderdocs' element={<Renderdocs/>} />
    <Route  path='/ShowAllDoctors' element={<ShowAllDoctors/>} />
    <Route  path='/ShowAllDoctorsad' element={<ShowAllDoctorsAd/>} />
    <Route  path='/ShowAllExams1' element={<ShowAllExams1/>} />
    <Route  path='/ShowAllExams2' element={<ShowAllExams2/>} />
    <Route  path='/ShowAllAd' element={<ShowAllAd/>} />
    <Route  path='/ShowExams1' element={<ShowExams1/>} />
    <Route  path='/ShowExams2' element={<ShowExams2/>} />
    <Route  path='/examw1' element={<ExamW1/>} />
    <Route  path='/examp1' element={<ExamP1/>} />
    <Route  path='/examw2' element={<ExamW2/>} />
    <Route  path='/examp2' element={<ExamP2/>} />
  </Routes>
 
</Router>
    
   </>
  )
}

export default App
/*
<Router>
  
  <Routes>
    <Route  path='/' element={<Home/>} />
    <Route path='/courseHome' element={<CourseHome/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route  path='/DocHome' element={<DocHome/>} />
    <Route  path='/administrator' element={<Administrator/>} />
    <Route  path='/adminisProfile' element={<AdminisProfile/>} />
    <Route  path='/admin' element={<Admin/>} />
    <Route  path='/adminProfile' element={<AdminProfile/>} />
    <Route  path='/exam' element={<Exam/>} />
    <Route  path='/question' element={<Question/>} />
    <Route  path='/team' element={<Team/>} />

    <Route  path='/TeamAdmini' element={<TeamAdmini/>} />
    <Route  path='/TeamDoc' element={<TeamDoc/>} />

    <Route  path='/pinGen' element={<PinGen/>} />
    <Route path ='./updateProfieAdmi' element={<UpdateProfieAdmi/>}/>
    <Route path ='./updateProfieAd' element={<UpdateProfieAd/>}/>
    <Route  path='/Complete' element={<Complete/>} />
    <Route  path='/updateProfiedoc' element={<UpdateProfieDoc/>} />
    <Route  path='/pin' element={<Pin/>} />
    <Route  path='/contact' element={<Contact/>} />
    <Route  path='/Contactd' element={<Contactd/>} />
    <Route  path='/loading' element={<Loading/>} />
    <Route  path='/renderdocs' element={<Renderdocs/>} />
    <Route  path='/ShowAllDoctors' element={<ShowAllDoctors/>} />
    <Route  path='/ShowAllDoctorsad' element={<ShowAllDoctorsAd/>} />
    <Route  path='/ShowAllExams' element={<ShowAllExams/>} />
    <Route  path='/ShowAllAd' element={<ShowAllAd/>} />
    <Route  path='/examw' element={<ExamW/>} />
  </Routes>
 
</Router>
   
      *?







/*
<Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>

*/








/*
import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App



*/