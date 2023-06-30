import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";
import Anchor from './Anchor.png'
const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const [name, setName] = useState("");
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    const userName = localStorage.getItem("Name");
    if (loggedInUser) {
    setAuthenticated(loggedInUser);
    setName(userName);
    }
    }, []);
    const handleLogout = () => {
      localStorage.removeItem("authenticated");
      setAuthenticated(false);
    }
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);
    if(authenticated) {
      // open dropdown
    return (    
        <nav className ="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(239,68,68)"}}>
        <div className ="container-fluid">
          <a className ="navbar-brand" href="#">
          <img src={Anchor} width={50} height={50} alt=""></img>
          </a>
          <NavLink className ="navbar-brand" to ="/">Utkarsh Rozgar</NavLink>
          <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
          </button>
          <div className ="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
            <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                  <p className='nav-link-active' style={{color : "white", paddingTop : "8px"}}>Welcome {name}</p>
              </li>
              <li>
              <NavLink className ="nav-link active" aria-current="page" to ="/workerdashboard">Home</NavLink>
            </li>
              <li>
              {/* dropdown */}
              <NavLink>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleOpen}>
                  Profile
                </button>
                <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1" >
                  <li><NavLink className ="dropdown-item" to ="/profile">View Profile</NavLink></li>
                  <li><NavLink className ="dropdown-item" to ="/editprofile">Edit Profile</NavLink></li>
                </ul>
              </div>
              </NavLink>
              </li>
              <li>
              <NavLink className ="nav-link active" aria-current="page" to ="/" onClick={handleLogout}>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>              
      );
    };
  return (
    <>
      <nav className ="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(239,68,68)"}}>
        <div className ="container-fluid">
        <a className ="navbar-brand" href="#">
          <img src={Anchor} height={50} width={50} alt=""></img>
          </a>
          <NavLink className ="navbar-brand" to ="/">Utkarsh Rozgar</NavLink>
          <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
          </button>
          <div className ="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
            <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className ="nav-item">
                <NavLink className ="nav-link active" aria-current="page" to ="/">Home</NavLink>
              </li>
              <li className ="nav-item">
                <NavLink className ="nav-link" to ="/signup">Signup</NavLink>
              </li>
              <li className ="nav-item">
                <NavLink className ="nav-link" to ="/login">Login</NavLink>
              </li>
              <li className ="nav-item">
                <NavLink className ="nav-link" to ="/about">About us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
