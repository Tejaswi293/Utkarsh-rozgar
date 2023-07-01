import React from 'react'

function List(employees,handleEdit,handleDelete) {
    const formatter=new Intl.NumberFormat('en=India',{
        style:'currency',
        currency:'ISR',
        minimunFractionDigest:null
    });
  return (
    <div className='contain-table'><table className='striped-table'>
    <thead>
      <tr>
        <th>SL no.</th>
        <th>Name</th>
        <th>aadhar number</th>
        <th>worker experience</th>
        <th>salary</th>
        <th colSpan={2}className='text-center'> Action</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
    <tbody>
      {employees.length>0?(
        employees.map((employee,i)=>(
            <tr key={employee.id}>
            <td>{i+1}</td>
            <td>{employee.name}</td>
            <td>{employee.aadharnumber}</td>
            <td>{employee.workerexperience}</td>
            <td>{formatter.format(employee.salary)}</td>
            <td className='text-right'><button
            onClick={()=>handleEdit(employee.id)}className='button muted-button'>Edit</button></td>
<td className="text-left"><button
onClick={()=>handleDelete(employee.id)}className='button muted-button'>Delete</button></td>
            </tr>
        ))
  ):(
    <tr>
        <td colSpan={6}>No employees</td>
    </tr>
      )}
    </tbody>
  </table>
      
    </div>
  )
}

export default List
