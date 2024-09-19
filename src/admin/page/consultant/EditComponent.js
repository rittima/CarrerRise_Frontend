import React, { useContext, useRef, useState } from 'react'
import consultantContext from "../../context/api/ConsultantContext";
import { useNavigate } from 'react-router-dom';


const EditComponent = ({ modalRef ,editConsultant}) => {
    const {updateConsultant} = useContext(consultantContext) ;
    const [consultant, setConsultant] = useState(editConsultant)
    const refClose = useRef(null)
    const navigate = useNavigate();

    const handleClick=(e)=>{
    refClose.current.click();
    e.preventDefault();
    updateConsultant(consultant._id,consultant.name, consultant.email, consultant.company, consultant.role);
    navigate("/")
  }
  const onChange=(e)=>{
    setConsultant({...consultant,[e.target.name]:e.target.value})
  }
  return (
    <div>
        <button ref={modalRef}  type="button "  className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
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
                  <label htmlFor="name" className="col-form-label">Update the Name of the Consultant:</label>
                  <input type="text" className="form-control" id="name" name='name' value={consultant.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">Update the Email of the Consultant:</label>
                  <input type="email" className="form-control" id="email" name='email' value={consultant.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="col-form-label">Update the Company Name</label>
                  <input type="text" className="form-control" id="company" name='company' value={consultant.company} onChange={onChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="col-form-label">Update its Role in the company</label>
                  <input type="text" className="form-control" id="role" name='role' value={consultant.role} onChange={onChange}/>
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
  )
}

export default EditComponent