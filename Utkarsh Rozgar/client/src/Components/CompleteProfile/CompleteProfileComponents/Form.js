import React from 'react'
import './Form.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from './ImageUpload';
// place button in the center.
const buttonStyle = {
    margin: 'auto',
    width: '50%',
    padding: '10px',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer'
}
// place imageUpload in centre
export default function Form() {
    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState({
        firstname: '',
        lastname: '',
        age: '',
        gender: '',
        aadhar: '',
        pincode: '',
        address: '',
        state: '',
        maritial_status: '',
    })
    const setCredential = (e) => {
        let nameOfData = e.target.id;
        let value = e.target.value;
        setUserDetail({ ...userDetail, [nameOfData]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem('email');
        // send data to backend
        const {firstname, lastname, age, gender, aadhar, pincode, address, state, maritial_status} = userDetail;
        const res = await fetch('/completeprofile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname, lastname, age, gender, aadhar, pincode, address, state, maritial_status, email
            })
        });
        const data =  res.json();
        if (data.status === 422 || !data) {
            alert('Enter the details properly');
        }
        else {
            alert('Profile completed successfully');
            navigate('/profile');
            window.location.reload();
        }

    }
    const galleryImageList = [
        "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
        "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
        "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
        "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
      ];



    return (
        <div className='contain' id='contain'>
            <h1>
                Complete Your Profile/ अपनी प्रोफ़ाइल पूर्ण करें
            </h1>
            <form id='form'>
                <div class="form-control">
                {/* upload profile picture */}
                {/* imageupload */}
                <ImageUpload cardName="Input Image" imageGallery={galleryImageList} />
                    <label for="name" id="label-name">
                        Name
                    </label>
                    <input type="text"
                        id="firstname"
                        placeholder="Enter your First name" value={userDetail.firstname} onChange={setCredential} />
                    <input type="text"
                        id="lastname"
                        placeholder="Enter your last name" value={userDetail.lastname} onChange={setCredential} />
                </div>
                <div className="form-age">
                    <label for="age" id="age">Age: </label>
                    <input type="number" id="age" placeholder='अपनी उम्र दर्ज करें' value={userDetail.age} onChange={setCredential} />
                </div>
                <div className='form-gender'>
                    <label htmlFor="gender"> Tick Your gender:</label>
                    <input type='radio' name='gender' id='gender' value={userDetail.gender} onChange={setCredential}/> Male
                    <input type='radio' name='gender' id='gender' value={userDetail.gender} onChange={setCredential}/> Female
                </div>
                <div className='form-aadhar'>
                    <label htmlFor='aadhar' >Enter Your aadhar Number /
                        अपना आधार नंबर दर्ज करें :<br /> </label>
                    <input type='number' id='aadhar' maxLength={12} minLength={12} placeholder='XXXX XXXX XXXX' value={userDetail.aadhar} onChange={setCredential} />
                </div>
                <div className='form-address'>
                    <label htmlFor='address' id='address' > Enter Your Address / अपना पता दर्ज करें:<br /> </label>
                    <input type='number' id='pincode' value={userDetail.pincode} minLength={6} maxLength={6} placeholder='PINCODE' onChange={setCredential}/>
                    <input type='text'id='address' value={userDetail.address} placeholder='ADDRESS' onChange={setCredential} />
                    <select name="state" id="state" class="form-control" placeholder='STATE' value={userDetail.state} onChange={setCredential}>
                        <option value=""  ><div className="state">STATE</div></option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>
                <div className='form-maritial' >
                    <label htmlFor='maritial_status' > Your Maritial Status / आपकी वैवाहिक स्थिति: <br /></label>
                    <input type='radio' name='status' id='maritial_status' value={userDetail.maritial_status} onChange={setCredential}/> Married
                    <input type='radio' name='status' id='maritial_status' value={userDetail.maritial_status} onChange={setCredential}/> Unmarried
                    <input type='radio' name='status' id='maritial_status' value={userDetail.maritial_status} onChange={setCredential}/> Divorced
                </div>
                <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
            </form>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
