import React from 'react'
import './Form.css'
export default function Form() {
    return (
        <div className='contain' id='contain'>
            <h1>
                Complete Your Profile/ अपनी प्रोफ़ाइल पूर्ण करें
            </h1>
            <form id='form' >
                <div class="form-control">
                    <label for="name" id="label-name">
                        Name
                    </label>
                    <input type="text"
                        id="name"
                        placeholder="Enter your First name" />
                    <input type="text"
                        id="name"
                        placeholder="Enter your last name" />
                </div>
                <div className="form-age">
                    <label for="age" id="age">Age: </label>
                    <input type="number" id="age" placeholder='अपनी उम्र दर्ज करें' />
                </div>
                <div className='form-gender'>
                    <label htmlFor="gender"> Tick Your gender:</label>
                    <input type='radio' name='gender' id='gender' /> Male
                    <input type='radio' name='gender' id='gender' /> Female
                </div>
                <div className='form-aadhar'>
                    <label htmlFor='aadhar' >Enter Your aadhar Number /
                        अपना आधार नंबर दर्ज करें :<br /> </label>
                    <input type='number' maxLength={12} minLength={12} placeholder='XXXX XXXX XXXX ' />
                </div>
                <div className='form-address'>
                    <label htmlFor='address' id='address' > Enter Your Address / अपना पता दर्ज करें:<br /> </label>
                    <input type='number' minLength={6} maxLength={6} placeholder='PINCODE' />
                    <input type='text' placeholder='CITY' />
                    <select name="state" id="state" class="form-control" placeholder='STATE'>
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
                    <input type='radio' name='status' /> Married
                    <input type='radio' name='status' /> Unmarried
                    <input type='radio' name='status' /> Divorced
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
