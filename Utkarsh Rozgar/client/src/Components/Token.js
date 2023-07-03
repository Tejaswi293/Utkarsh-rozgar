import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Token = () => {
    const navigate = useNavigate();
    const [userCredential, setUserCredential] = useState({
        token: ""
    });
    const setCredential = (e) => {
        let nameOfData = e.target.name;
        let value = e.target.value;
        setUserCredential({ ...userCredential, [nameOfData]: value });
    }
    const handleTokenSubmit = (e) => {
        navigate('/resetpassword {userCredential.token}');
        window.location.reload();
    }
    
  return (
    <div className="container mt-5 m-auto w-50 border p-5">
     <form>
      <div className="mb-3">
      <label for="exampleInputPassword1" class="form-label">Token</label>
      <input name = "token" type="string" className="form-control" id="exampleInputPassword1" value = {userCredential.token} onChange = {setCredential}/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleTokenSubmit}>Submit</button>
      </form>
      
    </div>
  )
}

export default Token
