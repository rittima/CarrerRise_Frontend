import React, { useState } from 'react'

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => setAlert(null), 1500);
  };


  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }

    // Check if password length is < 8
    if (password.length < 8  ) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    // Check if password contains at least one Alphabate
    else if (!/[a-zA-Z]/.test(password)) {
      newErrors.password = 'Password must contain at least one letter.';
    }
  
    // Check if password contains at least one special character
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password = 'Password must contain at least one special character.';
    }

    // Check if password contains at least one numeric
    else if (!/[0-9]/.test(password)) {
      newErrors.password = 'Password must contain at least one numeric.';
    }

    // Role validation
    if (!role) {
      newErrors.role = 'Please select a role.';
    }

    setErrors(newErrors);

    // Returns true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Form is valid, proceed with submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully!');
      showAlert("You are Successfully login !","success");
    } else {
      console.log('Form validation failed.'); 
      showAlert("Login Failed !","danger");
    }
  };

  return (
    <div>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert">
          <strong>{alert.type === 'success' ? 'Success' : 'Error'}</strong>: {alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    
      <div className="container" style={{ padding: "5%", paddingLeft: '25%' }}>
        <h1><b>{props.title}</b></h1>
        <form onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* PASSWORD */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          
          {/*ROLE */}
          <div className="form-floating mb-3">
            <select
              className={`form-select ${errors.role ? 'is-invalid' : ''}`}
              id="floatingSelect"
              aria-label="Floating label select example"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled select>
                Select a role
              </option>
              <option value="1">Admin</option>
              <option value="2">User</option>
              <option value="3">Consultant</option>
            </select>
            <label htmlFor="floatingSelect">Role</label>
            {errors.role && (
              <div className="invalid-feedback">{errors.role}</div>
            )}
          </div>

          <div>
            <button type="submit" className="btn btn-outline-primary">
              Sign-in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
