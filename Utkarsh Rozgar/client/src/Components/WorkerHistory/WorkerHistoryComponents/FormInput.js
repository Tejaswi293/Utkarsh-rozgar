const style = {
  // align div to center style
  "justify-content": "center",
  "align-items": "center",

}
function FormInput({handleChange, formInputData, handleSubmit}){
    return(
    
        <div style={style}>
          <div>
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
          </div>
          <div>
            <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
          </div>
          <div>
            <input type="text" onChange={handleChange} value={formInputData.salary} name="salary" className="form-control" placeholder="Salary" />
          </div>
          <div>
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
     
      
    )
    }
    
    export default FormInput;