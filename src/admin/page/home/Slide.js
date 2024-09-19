import React, { useRef } from 'react'
import EditComponent from '../consultant/EditComponent';
// import addImg from "../../image/addconsultant.jpg";
// import editImg from "../../image/addconsultant.jpg";

const Slide = () => {
  const modalRef = useRef(null);

  // const handleUpdateClick = () => {
  //   if (modalRef.current) {
  //     modalRef.current.click(); // Programmatically click the hidden button in EditComponent
  //   }
  // };
  return (
    <div className='container' style={{paddingBottom:"10%"}}>

        
        <div className="col-sm-10">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Add your sessions</h5>
                <p className="card-text">Please give your time when you are available to give metorship guidence to the student.Session should be less than 1 hour or equals to 1 hour</p>
                <a href="/" className="btn btn-dark">Session</a>
              </div>
            </div>
          
        </div>
        {/* <EditComponent modalRef={modalRef} editConsultant={{name:"",email:"",company:"",role:""}}/> */}
    </div>
  )
}

export default Slide