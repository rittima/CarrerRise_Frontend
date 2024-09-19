import React, { useContext, useEffect, useRef, useState } from 'react'

import consultantContext from "../../context/api/ConsultantContext";
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { LuView } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const ConsultantList = (props) => {
  const {consultants,getConsultant,deleteConsultant, updateConsultant} = useContext(consultantContext) ;
  const ref = useRef(null)
  const navigate=useNavigate();
  const refClose = useRef(null)
  const [consultant, setConsultant] = useState({id:"",ename:"",eemail:"",ecompany:"",erole:""})
  
  const editConsultant = (consultant)=>{
    ref.current.click()
    setConsultant({id:consultant._id, ename : consultant.name,eemail:consultant.email ,ecompany:consultant.company,erole:consultant.role})
  }
  const handleClick =(e)=>{
    refClose.current.click();
    updateConsultant(consultant.id,consultant.ename,consultant.eemail,consultant.ecompany,consultant.erole)
    props.showAlert("Successfully updated","success");
  }    

  const onChange = (e) =>{
      setConsultant({...consultant,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    const jwtToken=localStorage.getItem('token');
    if (!jwtToken) {
      navigate("/login",{replace:false});
    }
    else{     
      getConsultant();
    }
  },[getConsultant])

  return (
    <div>
      <div>
        <button ref={ref}  type="button "  className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
            edit
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Update the Consultant details </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={refClose}></button>
              </div>
              <div className="modal-body">
                <form>
                <div className="mb-3">
                    <label htmlFor="ename" className="col-form-label">Update the Name of the Consultant:</label>
                    <input type="text" className="form-control" id="ename" name='ename' value={consultant.ename} onChange={onChange}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="eemail" className="col-form-label">Update the Email of the Consultant:</label>
                    <input type="email" className="form-control" id="eemail" name='eemail' value={consultant.eemail}  onChange={onChange}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ecompany" className="col-form-label">Update the Company Name</label>
                    <input type="text" className="form-control" id="ecompany" name='ecompany' value={consultant.ecompany} onChange={onChange}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="role" className="col-form-label">Update its Role in the company</label>
                    <textarea type="text" className="form-control" id="role" name='erole' value={consultant.erole} onChange={onChange}/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='container my-3'>
        <h4> @Consultant List</h4>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">@Email</th>
              <th scope="col">Role</th>
              <th scope="col-2"style={{textAlign:'center'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {consultants.map((consultant, index) => {
              return <tr key={consultant._id||index} consultant={consultant}>
                <th scope="row">{index + 1}</th>
                <td>{consultant.name}</td>
                <td>{consultant.email}</td>
                <td>{consultant.role}</td>
                <td style={{textAlign:'center'}}>
                  <LuView className='icons mx-2' />
                  <FaRegEdit className='icons mx-2' onClick={()=>{ editConsultant(consultant)}}/>
                  <MdDelete className='icons mx-2' onClick={()=>{ deleteConsultant(consultant._id)}}/>
                </td>
              </tr>
            })}
          </tbody>
        </table>
        <b style={{
          fontSize:"20px",
          padding:'10px',
          color:'red'
        }}>{consultants.length === 0 && "Till now no consultants are added !"}</b>
      </div>
    </div>
  )
}

export default ConsultantList
