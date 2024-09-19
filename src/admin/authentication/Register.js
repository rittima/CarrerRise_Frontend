import React, {  useState }  from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register(props) { 
  const [credential, setCredential] = useState({name:"" ,email:"",password:"" , cpassword:"",role:""})
  const {showAlert}=props
  const navigate=useNavigate()

  const handleClick = async(e)=>{
    e.preventDefault();
    const{name,email,password,cpassword,role}=credential;

    if (password !== cpassword) {
      showAlert("Passwords do not match", "danger");
      return;
    }
    
    const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name,email,password,role}),
        headers: {
          "Content-Type": "application/json"
        },
      });
      const json = await response.json();  
      console.log(json);        
      if (json.success) {
        showAlert("Successfully Registered !","success");
        localStorage.setItem('token',json.authtoken);
        localStorage.setItem('username',name);
        navigate("/consultant-add", { state: { showModal: true } });
      }
      else{
        showAlert("Invalid Credential","danger");
      }
  } 
 
  const onChange = (e) =>{
    setCredential({...credential,[e.target.name]:e.target.value})
  }

  return (
    <div className='container' >
        <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h1 className='card-title text-center mb-4'>Register</h1>
              <form onSubmit={handleClick}>
                <div className='mb-3'>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={credential.name}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={credential.email}
                    onChange={onChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credential.password}
                    onChange={onChange}
                    placeholder="Enter your password"
                    minLength={3}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    value={credential.cpassword}
                    onChange={onChange}
                    placeholder="Confirm your password"
                    minLength={3}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="role" className="form-label">Role</label>
                  <select
                    className="form-select"
                    id="role"
                    name="role"
                    value={credential.role}
                    onChange={onChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="1">Consultant</option>
                    <option value="2">User</option>
                  </select>
                </div>

                <div className='d-grid'>
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
