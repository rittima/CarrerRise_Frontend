import React, { useState }  from 'react'

export default function Login() {
//     let body={
//         padding:'5%',
//         // backgroundColor:'yellow'
//     }
//   return (
//     <div >
//     <div className="container" style={body}>
//       <h1>Register</h1>
//       <div className="form-floating mb-3">
//         <input
//           type="email"
//           className="form-control"
//           id="floatingInput"
//           placeholder="name@example.com"

//         />
//         <label for="floatingInput">Email address</label>
//       </div>
//       <div className="form-floating mb-3">
//         <input
//           type="password"
//           className="form-control"
//           id="floatingPassword"
//           placeholder="Password"
//         />
//         <label htmlFor="floatingPassword">Password</label>
//       </div>
//       <div className="form-floating mb-3">
//         <input
//           type="password"
//           className="form-control"
//           id="floatingPassword"
//           placeholder="Password"
//         />
//         <label htmlFor="floatingPassword"> Confirm Password</label>
//       </div>
//       <div class="form-floating mb-3">
//         <select
//           class="form-select"
//           id="floatingSelect"
//           aria-label="Floating label select example"
//         >
//           <option selected>...</option>
//           <option value="1">Admin</option>
//           <option value="2">User</option>
//           <option value="3">Consultant</option>
//         </select>
//         <label for="floatingSelect">Role</label>
//       </div>
//       <div>
//       <button type="button" class="btn btn-outline-primary">Register</button>
//       </div>
//     </div>
//     </div>
//   );



const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }

    // Password validation
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    // Role validation
    if (!role) {
      newErrors.role = 'Please select a role.';
    }

    setErrors(newErrors);

    // Returns true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted successfully!');
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div>
      <div className="container" style={{ padding: '5%' }}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
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
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            {errors.confirmPassword && (
              <div className="invalid-feedback">{errors.confirmPassword}</div>
            )}
          </div>
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
