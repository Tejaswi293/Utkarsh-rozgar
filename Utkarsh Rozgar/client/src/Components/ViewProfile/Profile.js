import React, { useState, useEffect } from 'react'
import Nav from './ViewProfileComponents/Nav';
import UserDetails from './ViewProfileComponents/Info';
const Profile = () => {
    const [authenticated, setAuthenticated] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if(loggedInUser) {
    setAuthenticated(loggedInUser);
    }
    }, []);
    if(authenticated)
    {
        return (
          <div>
          <>
          <Nav/>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <UserDetails/>
          </>
          
        </div>
        )
    }
  return (
    <div>
      <h1>Not authenticated</h1>
    </div>
  )
}

export default Profile
