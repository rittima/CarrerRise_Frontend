import React, { useContext, useEffect, useRef, useState } from 'react'
import consultantContext from "../../context/api/ConsultantContext";
import { useNavigate } from 'react-router-dom';
import EditComponent from '../consultant/EditComponent';

const Profile = () => {
  const {consultants,getConsultant} = useContext(consultantContext) ;
  const navigate=useNavigate();
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const modalRef = useRef(null);

  useEffect(()=>{
    const jwtToken=localStorage.getItem('token');
    if (!jwtToken) {
      navigate("/login",{replace:false});
    }
    else{     
      getConsultant();
    }    
  },[getConsultant])
  
  const handleUpdateClick=(consultant)=>{
    setSelectedConsultant({
      id:consultant._id, 
      name : consultant.name,
      email:consultant.email ,
      company:consultant.company,
      role:consultant.role
    }); 
    
    if (modalRef.current) {
      modalRef.current.click(); 
    }
  }

  return (
    <div className="container ">
      <h4 className="text-center mb-4"><b>View Your Profile</b></h4>
      <hr />
      {consultants.map((consultant) => (
        <div key={consultant._id} className="card shadow-sm mb-4">
          <div className="card-body">
            <form>
              <div className="form-group row my-3">
                <label htmlFor="name" className="col-sm-5 col-form-label"><b>Full Name:</b></label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="name"
                    value={consultant?.name || 'Enter your full name..'}
                  />
                </div>
              </div>

              <div className="form-group row my-3">
                <label htmlFor="email" className="col-sm-5 col-form-label"><b>Email:</b></label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="email"
                    value={consultant?.email || 'Enter your email..'}
                  />
                </div>
              </div>

              <div className="form-group row my-3">
                <label htmlFor="company" className="col-sm-5 col-form-label"><b>Company Name:</b></label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="company"
                    value={consultant?.company || 'Enter your company name..'}
                  />
                </div>
              </div>

              <div className="form-group row my-3">
                <label htmlFor="role" className="col-sm-5 col-form-label"><b>Your Role in Company:</b></label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="role"
                    value={consultant?.role || 'Enter your role..'}
                  />
                </div>
              </div>

              <div className="d-grid">
                <button
                  type='button'
                  className="btn btn-dark" 
                  onClick={()=>handleUpdateClick(consultant)}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      ))}
      {selectedConsultant && (
        <EditComponent modalRef={modalRef} editConsultant={selectedConsultant} />
      )}
    </div>
  )
}
export default Profile