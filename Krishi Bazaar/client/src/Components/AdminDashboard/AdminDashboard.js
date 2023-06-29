import React, { useState, useEffect } from 'react'
import {Route, useNavigate} from 'react-router-dom';
import Navbar from '../Navbar';
import Header from '../AdminDashboardComponents/Header';
import Footer from '../AdminDashboardComponents/Footer';
import Main from '../AdminDashboardComponents/Main';
import Main2 from '../AdminDashboardComponents/Main2';
import Main3 from '../AdminDashboardComponents/Main3';
const AdminDashboard = () => {
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
            <Header/>
            <Main/>
            <Main2/>
            <Main3/>
            <Footer/>
            </>
        );
    }
    else
    {
        navigate("/");
        return null;
    }
    
};
export default AdminDashboard;

        