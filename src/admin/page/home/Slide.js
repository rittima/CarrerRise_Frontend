import React from 'react'

const Slide = () => {

  return (
    // <div className='container' style={{paddingBottom:"10%"}}>
    //     <div className="col-sm-10">
    //         <div className="card" >
    //           <div className="card-body">
    //             <h5 className="card-title">Add your sessions</h5>
    //             <p className="card-text">Please give your time when you are available to give metorship guidence to the student.Session should be less than 1 hour or equals to 1 hour</p>
    //             <a  className="btn btn-dark">Session</a>
    //           </div>
    //         </div>
    //     </div>
    // </div>
    <div className='container' style={{ paddingBottom: "10%" }}>
      <div className="col-sm-10 mx-auto">
        <div className="card shadow-lg border-0 rounded">
          <div className="card-body text-center">
            <h5 className="card-title fw-bold text-primary">Add Your Sessions</h5>
            <p className="card-text text-muted mb-4">
              Please provide your available times for mentorship guidance to students. 
              Sessions should be less than or equal to 1 hour.
            </p>
            <a href="/" className="btn btn-dark btn-lg">
              Schedule Session
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Slide