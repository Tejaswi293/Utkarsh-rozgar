 import React, { useEffect, useRef, useState } from 'react'
 import Swal from 'sweetalert2';
 function Add({employees,
  setEmployees,
  setIsAdding}) {
    const [Name, setName]=useState('');
    const [aadharNumber,setaadharnumber]=useState('');
    const [workerexperience,setworkerexperience]=useState('');
    const [workersalary,setworkersalary]=useState('');
    const textInput= useRef(null);
    useEffect(()=>{
        textInput.current.focus();
    },[])
    
    const handleAdd = e =>{
      e.preventDefault();
      if(!Name ||!aadharNumber||!workerexperience){
          alert('Please fill all');

     const id=employees.length+1;
     const newemployee={
      id,
      Name,
      aadharNumber,
      workersalary,
      workerexperience
     } 
     employees.push(new employees);
     setEmployees(employees);
     setIsAdding(false);

     
      Swal.fire({
        title: 'Auto close alert!',
        text: 'I will close in 2 seconds.',
        timer: 2000
     });
    }

  }
   return (
     <div className='small-container'> 
     <form onSubmit={handleAdd}>
      <h1>Add employee</h1>
      <label htmlFor='name'>Name</label>
      <input
      id= "name"
      type="text"
      ref={textInput}
      name="Name"
      value={Name}
      enchange={e => setName(e.target.value)}
      />
      <label htmlFor='aadhar number'> aadhar number</label>
      <input
      id="aadhar number"
      type="number"
      name="aadhar number"
      value={aadharNumber}
      enchange={e => setaadharnumber(e.target.value)}/>
      <label htmlFor="worker experience"> worker experience</label>
      <input
      id="worker experience"
      type="number"
      name="worker experience"
      value={workerexperience}
      enchange={e => setworkerexperience(e.target.value)}
      />
      <label htmlFor='employee salary'>salary ()</label>
      <input
      id="employee salary"
      type="number"
      name="employee salary"
      value={workersalary}
      enchange={e => setworkersalary(e.target.value)}
      />
      <div style={{marginTop: "30px"}}>
        <input type="submit" value="update"/>
        <input
        style={{marginLeft:"12px"}}
        className="muted-button"
        type="button"
        value="cancel"
        onClick={()=>setIsAdding(false)}
        />

       </div>


      

      
       </form>
       
     </div>
   );
  }
 
 
 export default Add
 