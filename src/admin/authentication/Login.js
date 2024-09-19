
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({showAlert}) => {
    const navigate = useNavigate();
    
    const [credential, setCredential] = useState({email:"",password:"",role:""})
    const handleClick = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email:credential.email, password:credential.password ,role:credential.role}),
            headers: {
              "Content-Type": "application/json"
            },
          });
          const json = await response.json();  
          console.log(json);        
          if (json.success) {
            showAlert("Successfully Login !","success");
            localStorage.setItem('token',json.authtoken);

            if (json.admin && json.admin.name) {
              localStorage.setItem('username', json.admin.name);
          } else {
              console.warn("Username not found in the response");
          }

            navigate("/dashboard");
          }
          else{
            showAlert("Invalid Credential","danger");
          }
      } 

    const onChange = (e) =>{
      setCredential({...credential,[e.target.name]:e.target.value})
    }
      
    return (
      <div>
        <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <h1 className='card-title text-center mb-4'>Login</h1>
              <form onSubmit={handleClick}>
                <div className='mb-3'>
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={onChange}
                    value={credential.email}
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className='mb-3'>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={onChange}
                    value={credential.password}
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="role" className="form-label">Role</label>
                  <select
                    className="form-select"
                    id="role"
                    name="role"
                    onChange={onChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="1">Consultant</option>
                    <option value="2">User</option>
                  </select>
                </div>

                <div className='d-grid'>
                  <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        {/* <h1>Login</h1>
        <form onSubmit={handleClick}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={onChange}
              value={credential.email}
              id="email1"
              aria-describedby="email"
            />
            <div id="email" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={onChange}
              value={credential.password}
              id="password"
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="role">
              Options
            </label>
            <select
              className="form-select"
              id="role"
              name="role"
              onChange={onChange}
              required
            >
              <option value={credential.role}>Choose...</option>
              <option value="1">Consultant</option>
              <option value="2">User</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form> */}
      </div>
    );
    }

export default Login
