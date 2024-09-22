import React from 'react'
// import consultantContext from "../../context/api/ConsultantContext";


const ViewProfile = (props) => {
    // const {consultants} = useContext(consultantContext) ;
    const {consultant,editConsultant}=props;
   

  return (
    <div className="container "> 
                <div className="my-4"><b>Name : </b>{consultant.name}</div>
                <div className="my-4"><b>Email : </b>{consultant.email}</div>
                <div className="my-4"><b>Company : </b>{consultant.company}</div>
                <div className="my-4"><b>Role : </b>{consultant.role}</div>
                <div className="d-grid">
                <button
                  type='button'
                  className="btn btn-dark" 
                  onClick={()=>{editConsultant(consultant)}}>
                  Update
                </button>
              </div>
      </div>
  )
}

export default ViewProfile