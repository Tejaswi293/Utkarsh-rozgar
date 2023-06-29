import React, { useState, useEffect } from 'react'
import {Route, useNavigate} from 'react-router-dom';
// import Navbar from '../Navbar';
import './FarmerDashboard.css';
import Header from './FarmerDashboardComponents/Header';
import Anncounce from './FarmerDashboardComponents/Anncounce';
import Card from './FarmerDashboardComponents/Card';
import First from './FarmerDashboardComponents/First';
import Testimony from './FarmerDashboardComponents/Testimony';
import Job from './FarmerDashboardComponents/Job';
import Footer from './FarmerDashboardComponents/Footer';
const FarmerDashboard = () => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
    setAuthenticated(loggedInUser);
    }
    }, []);
    
    if(authenticated) {
        return (
            <>
      <Header title="Utkarsh Rozgar" />
      <First />
      <div className='main'>
        <Anncounce />
        <Card />
      </div>

      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-red-500"></div>
      </div>
      <Job/>

      <div className='review'>Testimony/ समीक्षा</div>
      <Testimony />

      <Footer title="Utkarsh Rozgar" />
    </>
        );
    }
    else
    {
        navigate("/");
        return null;
    }
    
};
export default FarmerDashboard;

        