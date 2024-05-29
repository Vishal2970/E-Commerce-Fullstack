import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";

export function Login() {
  const { color } = useParams();  // Use useParams to get the color from the URL

  return (
    <>
      <Helmet bodyAttributes={{ style: `background-color: #${color}` }} />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card w-100 mx-3" style={{ maxWidth: "28rem" }}>
          <div className="card-body">
            <h5 className="card-title m-2 p-1">Login</h5>
            <p className="card-text m-2 p-1">
              <form action="">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="button" className="btn btn-outline-success m-3">
                  Login
                </button>
              </form>
            </p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <a className="btn btn-outline-primary" href="/signup" role="button">
                Register
              </a> */}
              <Link to={`/signup/${color}`} className="btn btn-primary m-3 p-2">
                  Register
                </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
