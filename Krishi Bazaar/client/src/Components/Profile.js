import React, { useState, useEffect } from 'react'
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
                <h1>Profile</h1>
            </div>
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default Profile
