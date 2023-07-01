import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({employees,selectedEmployee,setEmployees,setIsEditing}) {
  const id=selectedEmployee.id;
   const[name,setName]=useState(selectedEmployee,name);
   const [email, setEmail] = useState(selectedEmployee.email);
   const[employeesalary,setemployeesalary]=useState(selectedEmployee.salary);
   const[aadharNumber,setaadharnumber]=useState(selectedEmployee.aadharNumber);
   const[workerexperience,setworkerexperience]=useState(selectedEmployee.workerexperience);
   const[workersalary,setworkersalary]=useState(selectedEmployee.workersalary);
   const handleUpdate=(e)=>{
    e.preventDefault();
    if(!name ||!aadharNumber||!workerexperience){
        alert('Please fill all');

   
   const employee={
    id,
    name,
    aadharNumber,
    workersalary,
    workerexperience
   };
   for(let i=0;i<employees.length;i++){
    if(employees[i].id===id){
      employees.splice(i,1,employee);
      break;
    }
   }

   employees.push(new employees);
   setEmployees(employees);
   setIsEditing(false);

   
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      timer: 2000
   });
  }

   }
  return (
    <div className='small-container'>
      <form onSubmit={handleUpdate}>
        <h1>Edit employee</h1>
        <label htmlFor='name'>name</label>
        <input
        id="name"
        type="text"
        name="name"
        value={name}
        enchange={e=>setName(e.target.value)}/>
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
      value={employeesalary}
      enchange={e => setemployeesalary(e.target.value)}
      />
      <div style={{marginTop:"30px"}}>
        <input type="submit" value="update"/>
        <input
        style={{marginLeft:"12px"}}
        className="muted-button"
        type="button"
        value="cancel"
        onClick={()=>setIsEditing(false)}
        />
      </div>
      </form>
      
    </div>
  )
}

export default Edit
