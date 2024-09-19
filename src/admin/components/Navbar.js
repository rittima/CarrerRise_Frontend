import React from 'react'
import { LuLogOut } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }

  const hadleSignup =()=>{
    localStorage.removeItem('token');
    navigate("/register");
  }

  return (
    <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " >
        <div className="container-fluid">
          {!localStorage.getItem("token")?<a className="navbar-brand" href="/" style={{fontSize:"35px",fontWeight:"bolder"}}>
          CarrierRise
          </a>:
          <a className="navbar-brand" href="/" style={{fontSize:"25px",fontWeight:"bolder"}}>
            Welcome to CarrierRise 
          </a>
          }
          {!localStorage.getItem("token")?<form className="d-flex">
          <Link type="button" to='/login' className="btn btn-outline-dark mx-2 my-3"> Sign in</Link>
          <button type="button" onClick={hadleSignup}  className="btn btn-outline-dark mx-2 my-3">Sign up</button>
          </form>:
          <button onClick={handleLogout} className='btn btn-disable-outline-dark mx-2 my-3'>Logout<LuLogOut className='mx-2'/></button>
          }
        </div>
      </nav>
      
    </div>
  );
}


export default Navbar