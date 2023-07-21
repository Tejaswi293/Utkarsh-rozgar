import React, { useState } from 'react';
// align button to center.
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

function UserDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [Aadhar, setAadhar] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [Pin, setPin] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleOtherDetailsChange = (event) => {
    setOtherDetails(event.target.value);
  };

  const handleAadharChange = (event) => {
    setAadhar(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform any desired actions with the user details
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Gender:', gender);
    console.log('Other Details:', otherDetails);
    console.log('Aadhar:', Aadhar);
    console.log('City:', City);
    console.log('State:', State);
    console.log('Pin:', Pin);
  };

  return (
    <div className="container mb-64">
      <h1>User Details</h1>
      <form onSubmit={handleSubmit}>
        <label className="input-label x-90">
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} className="input-field" />
        </label>
        <label className="input-label-2">
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} className="input-field-2" />
        </label>
        <label className="input-label-3">
          Gender:
          <select value={gender} onChange={handleGenderChange} className="input-field-3">
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </label>
        <label className="input-label-4">
          Address:
          <textarea value={otherDetails} onChange={handleOtherDetailsChange} className="input-field-4" />
        </label>
        <label className="input-label-5">
          Aadhar:
          <input type="number" value={Aadhar} onChange={handleAadharChange} className="input-field" />
        </label>
        <label className="input-label-6 x-9">
          City:
          <input type="text" value={City} onChange={handleCityChange} className="input-field" />
        </label>
        <label className="input-label-7 x-9">
          State:
          <input type="text" value={State} onChange={handleStateChange} className="input-field" />
        </label>
        <label className="input-label-8 x-9">
          Pin code:
          <input type="text" value={Pin} onChange={handlePinChange} className="input-field" />
        </label>
        <label className="input-label-9">
          Married Status:
          <select value={gender} onChange={handleGenderChange} className="input-field-9">
            <option value="">Select</option>
            <option value="S">Single/Unmarried</option>
            <option value="M">Married</option>
            <option value="D">Divorsed</option>
          </select>
        </label>
        <label className="input-label-10">
          Work Hour:
          <select value={gender} onChange={handleGenderChange} className="input-field-10">
            <option value="">Select</option>
            <option value="S">0-2</option>
            <option value="M">2-4</option>
            <option value="D">4-6</option>
            <option value="E">6-8</option>
          </select>
        </label>
        <label className="input-label-11">
          Work Type Perference:
          <select value={gender} onChange={handleGenderChange} className="input-field-11">
            <option value="">Select</option>
            <option value="S">contractual</option>
            <option value="M">Daily wage</option>
            <option value="D">Any type</option>
          </select>
        </label>
        <label className="input-label-12 x-9">
          Age:
          <input type="Number" value={City} onChange={handleCityChange} className="input-field-12" />
        </label>
        

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default UserDetails;