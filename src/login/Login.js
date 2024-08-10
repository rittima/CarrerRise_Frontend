import React from 'react'

export default function Login() {
    let body={
        padding:'5%',
        // backgroundColor:'yellow'
    }
  return (
    <div >
    <div className="container" style={body}>
      <h1>LOGIN</h1>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"

        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>...</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
          <option value="3">Consultant</option>
        </select>
        <label for="floatingSelect">Role</label>
      </div>
      <div>
      <button type="button" class="btn btn-outline-primary">Sign In</button>
      </div>
    </div>
    </div>
  );
}
