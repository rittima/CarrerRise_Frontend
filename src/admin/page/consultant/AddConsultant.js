import React, { useContext,  useEffect,   useRef,   useState } from 'react'
import consultantContext from "../../context/api/ConsultantContext";
import { useLocation, useNavigate } from 'react-router-dom';

const AddConsultant = () => {
  const {addConsultant} = useContext(consultantContext) ;
  const [consultant, setConsultant] = useState({name:"",email:"",company:"",role:""})
  const navigate = useNavigate();
  const refClose = useRef(null);
  const location = useLocation();

  const showModal = location.state?.showModal;
  useEffect(() => {
    // Automatically open the modal if showModal is true
    if (showModal) {
      const modal = new window.bootstrap.Modal(document.getElementById('staticBackdrop'))
      modal.show();
    }
  }, [showModal]);

  const handleClick=(e)=>{
    
    e.preventDefault();
    addConsultant(consultant.name, consultant.email, consultant.company, consultant.role);
    setConsultant({name:"",email:"",company:"",role:""})
    refClose.current.click();
    window.location.reload()
    navigate("/dashboard")
  }
  const onChange=(e)=>{
    setConsultant({...consultant,[e.target.name]:e.target.value})
  }
  return (
    <div>
      
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add the Your details </h1>
              
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="col-form-label">Full Name:</label>
                  <input type="text" className="form-control" id="name" name='name' onChange={onChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">Email :</label>
                  <input type="email" className="form-control" id="email" name='email'  onChange={onChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="col-form-label">Company Name</label>
                  <input type="text" className="form-control" id="company" name='company' onChange={onChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="col-form-label">What is your Role in the company</label>
                  <textarea type="text" className="form-control" id="role" name='role' onChange={onChange} required/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button disabled={consultant.name.length<5 && consultant.company.length<2 && consultant.role.length<5 } ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={consultant.name.length<5 && consultant.company.length<2 && consultant.role.length<5 } type="submit" className="btn btn-primary" onClick={handleClick} >Add</button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default AddConsultant