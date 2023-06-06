import React, { useState, useEffect } from 'react'
import {Route, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
const FarmerDashboard = () => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
    setAuthenticated(loggedInUser);
    }
    }, []);
    const handleClick = () => {
        window.open("https://in.linkedin.com/company/mohua");
    }
    
    if(authenticated) {
        return (
            <div className = "container text-center h-100" style={{"padding-top" : "200px"}}>
            <h1 className = "mt-5">Welcome to Utkarsh Rozgar Farmer dashboard</h1>
            <button type="button" class="btn btn-dark" onClick = {handleClick}>Follow us on linkedin</button>
            </div>
        );
    }
    else
    {
        navigate("/");
        return null;
    }
    
};
export default FarmerDashboard;

        