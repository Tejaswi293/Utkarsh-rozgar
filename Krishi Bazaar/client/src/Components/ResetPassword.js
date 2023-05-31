import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ResetPassword = (props) => {
    console.log(props);
    const navigate = useNavigate();
    const [userCredential, setUserCredential] = useState({
        password: "",
        confirmPassword: ""
    });
    const setCredential = (e) => {
        let nameOfData = e.target.name;
        let value = e.target.value;
        setUserCredential({ ...userCredential, [nameOfData]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = userCredential;
        if (password === confirmPassword) {
            const res = fetch('/resetpassword', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: props.token,
                    password : password,
                    confirmPassword : confirmPassword
                })
            });
            const data = res.json();
            if (data.state) {
                alert('Password Reset Successfully');
                navigate('/login');
            }
            else {
                alert('Password Reset Failed');
            }
        }
        else {
            alert('Password and Confirm Password should be same');
        }
    }

    return (
        <div>
            <h1>Reset Password</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input name="password" type="password" class="form-control" id="exampleInputPassword1" value={userCredential.password} onChange={setCredential} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input name="confirmPassword" type="password" class="form-control" id="exampleInputPassword1" value={userCredential.confirmPassword} onChange={setCredential} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default ResetPassword