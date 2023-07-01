import React,{useState} from 'react'
import Swal from 'sweetalert2';
import Header from './WorkerHistoryComponents/Header'
import Edit from './WorkerHistoryComponents/Edit'
import List from './WorkerHistoryComponents/List'
import Add from './WorkerHistoryComponents/Add'
import employeesData from './/WorkerHistoryComponents/data'
function WorkerHistory() {
    const [employees,setEmployees]=useState(employeesData);
    const[selectedEmployee,setSelectedEmployee]=useState(null);
    const [isAdding, setIsAdding] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit=(id)=>{
        const [employee]=employees.filter(employee=>employee.id===id);
        setSelectedEmployee(employees);
        setIsEditing(true);
    }
    const handleDelete =(id)=>{
        
            Swal.fire({
                title: 'Auto close alert!',
                text: 'I will close in 2 seconds.',
                showCancelButton:true,
                confirmButtonText:"yes,delete it",
                cancelButtonText:"no,cancel",
            }).then(result =>{
                if(result.value){
                    const [employees]=employees.filter(employee=>
                        employee.id===id);
                        Swal.fire({
                            icon:'success',
                            titles:'detected',
                           timer:1500,


                        });
                        setEmployees(employees.filter(employee=>employee.id!==id));
                }
            });

        }
        


  return (
    <div className='container'>
        {!isAdding && !isEditing &&(
            <>
            <Header
            setIsAdding={setIsAdding}

            />
            <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
            </>
        )
}
{isAdding &&(
    <Add
    employees={employees}
    setEmployees={setEmployees}
    setIsAdding={setIsAdding}
    />

)}
{isEditing &&(
    <Edit
    employees={employees}
    selectedEmployee={selectedEmployee}
    setEmployees={setEmployees}
    setIsEditing={setIsEditing}
    />
)}
        
    </div>
  )}

    
        
    


export default WorkerHistory
