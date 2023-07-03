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
