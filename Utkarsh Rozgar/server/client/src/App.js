import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Token from './Components/Token';
import WorkerDashboard from './Components/WorkerDashboard/WorkerDashboard';
import AboutUs from './Components/About us/AboutUs';
import Profile from './Components/ViewProfile/Profile'
import JobSearch from './Components/JobSearch/JobSearch';
import CompleteProfile from './Components/CompleteProfile/CompleteProfile';
import WorkerHistory from './Components/WorkerHistory/WorkerHistory';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path = '/' index element = {<Home/>}/>
          <Route exact path = '/signup' element = {<Signup/>} />
          <Route exact path = '/login' element = {<Login/>} />
          <Route exact path = '/admindashboard' element = {<AdminDashboard/>} />
          <Route exact path = '/forgotpassword' element = {<ForgotPassword/>} />
          <Route exact path = '/resetpassword' element = {<ResetPassword/>} />
          <Route exact path = '/token' element = {<Token/>} />
          <Route exact path = '/workerdashboard' element = {<WorkerDashboard/>} />
          <Route exact path = '/about' element = {<AboutUs/>} />
          <Route exact path = '/profile' element = {<Profile/>} />
          <Route exact path = '/jobsearch' element = {<JobSearch/>} />
          <Route exact path = '/completeprofile' element = {<CompleteProfile/>} />
          <Route exact path = '/workerhistory' element = {<WorkerHistory/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
