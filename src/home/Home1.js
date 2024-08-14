import React from 'react'
import "./Home.css";

export default function Home1(props) {
  return (
    <div>
      <div className="body">
        <nav className="navbar bg-body-tertiary" style={{ marginLeft: "12%" }}>
          <div className="container-fluid">
            <a className="navbar-brand" style={{ fontWeight: "bolder", fontSize: "32px" ,marginLeft:'70px'}}>
              {props.title}
            </a>
            <form className="input-group " role="search" style={{width:'30%'}}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit" style={{right:'8px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
          </div>
        </nav>

        <div className="sidenav">
           <p className="menu"><strong>FILTER</strong></p>
          <hr id="hr" />

          <div className="accordion accordion-flush" id="accordionFlushExample" >
            <div className="accordion-item" id='list'>
              <h2 className="accordion-header" id='list'>
                <button className="accordion-button collapsed-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"  id='list'>
                  List #1
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
                <div className="accordion-body" style={{border:'none'}}>
                  <ul className="list-group"  id='list'>
                    <li className="list-group-item" id='list'> item 1 </li><hr id="hr" />
                    <li className="list-group-item" id='list'> item 2 </li><hr id="hr" />
                    <li className="list-group-item" id='list'> item 3 </li><hr id="hr" />
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item" id='list'>
             <h2 className="accordion-header" id='list'>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" id='list'>
                List #2
              </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{border:'none'}}>
                  <ul className="list-group"  id='list'>
                    <li className="list-group-item" id='list'> item 1 </li><hr id="hr" />
                    <li className="list-group-item" id='list'> item 2 </li><hr id="hr" />
                    <li className="list-group-item" id='list'> item 3 </li><hr id="hr" />
                  </ul>
              </div>
              </div>
            </div>
          
           <div className="accordion-item" id='list'>
            <h2 className="accordion-header" id='list'>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" id='list'>
                List #3
              </button> 
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={{border:'none'}}>
                  <ul className="list-group"  id='list'>
                    <li className="list-group-item" id='list'> item 1 </li><hr id="hr" />
                    <li className="list-group-item" id='list'> item 2 </li><hr id="hr" />
                    <li className="list-group-item" id='list'> item 3 </li><hr id="hr" />
                    
                  </ul>
              </div>
            </div>
          </div>



        </div>
        </div>
      </div>
    </div>
  );
}
