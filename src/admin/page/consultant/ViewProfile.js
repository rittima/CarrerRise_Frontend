import React from 'react'
// import consultantContext from "../../context/api/ConsultantContext";


const ViewProfile = (props) => {
    // const {consultants} = useContext(consultantContext) ;
    const {consultant,editConsultant}=props;
   

  return (
    <div className="container mt-4">
    <div className="p-4 border rounded shadow-lg">
      <div className="card-body">
        <h5 className="card-title text-center">Consultant Profile</h5>
        <div className="my-3">
          <b>Name:</b> {consultant.name}
        </div>
        <div className="my-3">
          <b>Email:</b> {consultant.email}
        </div>
        <div className="my-3">
          <b>Company:</b> {consultant.company}
        </div>
        <div className="my-3">
          <b>Role:</b> {consultant.role}
        </div>
        <div className="d-grid mt-4">
          <button
            type='button'
            className="btn btn-dark"
            onClick={() => { editConsultant(consultant); }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ViewProfile