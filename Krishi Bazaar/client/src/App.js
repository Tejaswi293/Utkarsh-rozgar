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
import Contact from './Components/Contact';
import Profile from './Components/Profile';
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
          <Route exact path = '/contact' element = {<Contact/>} />
          <Route exact path = '/profile' element = {<Profile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
