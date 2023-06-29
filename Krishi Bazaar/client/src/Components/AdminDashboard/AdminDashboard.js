import React, { useState, useEffect } from 'react'
import {Route, useNavigate} from 'react-router-dom';
import Header from './AdminDashboardComponents/Header';
import Main from './AdminDashboardComponents/Main';
import Main2 from './AdminDashboardComponents/Main2';
import Main3 from './AdminDashboardComponents/Main3';
import Footer from './AdminDashboardComponents/Footer';
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
            <div>
                <Header title="Utkarsh Rozgar" />
                <Main />
                <Main2 />
                <Main3 />
                <Footer title="Utkarsh Rozgar" />
            </div>
        );
    }
    else
    {
        navigate("/");
        return null;
    }
    
};
export default AdminDashboard;

        