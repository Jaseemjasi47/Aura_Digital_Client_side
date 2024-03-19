import React from "react";
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div
            className="card cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign In</h2>
              <form>
                

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>


                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign In
                </button>

              </form>
              <div>I Don't have a account, </div>
              <Link to='/signup'>Create new Account?</Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
