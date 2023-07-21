import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [userCredential, setUserCredential] = useState({
    email: ""
});
const setCredential = (e) => {
    let nameOfData = e.target.name;
    let value = e.target.value;
    setUserCredential({ ...userCredential, [nameOfData]: value });
}
const sendData = async (e) => {
    e.preventDefault();
    const { email } = userCredential;
    const res = await fetch('/forgotpassword', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            email
        })
    });
    const data = await res.json();
    console.log(data);
    console.log(JSON.stringify(data));
    if(data.state){
      alert('Reset Password token sent to your email');
      navigate('/token')
      window.location.reload();
    }
    else{
      alert('Invalid Email');
    }

}
const handleSubmit = (e) => {
  e.preventDefault();
  sendData(e);
}

  return (
    <div className="container mt-5 m-auto w-50 border p-5">
        <h1>Forgot Password</h1>
        <form onSubmit = {handleSubmit}>
        <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input name = "email" type="email" className = "form-control" aria-describedby="emailHelp" value = {userCredential.email} onChange = {setCredential}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
export default ForgotPassword
