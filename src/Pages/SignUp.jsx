import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Helmet from "react-helmet";

export function SignUp() {
  const URI = "http://localhost:5000/api/auth/signup";
  const { color } = useParams(); // Use useParams to get the color from the URL
  const [register, Setregister] = useState({
    fullName: "",
    mobile: "+91",
    email: "",
    password: "",
  });
  const changeHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    Setregister({
      ...register,
      [name]: value,
    });
  };
  const submitHandle = async(e) => {
    if (
      !register.fullName ||
      register.mobile.length<13 ||
      !register.email ||
      !register.password
    ) {
      Setregister({
        fullName: "",
        mobile: "+91",
        email: "",
        password: "",
      });
      alert("enter proper value");
    } else {
      e.preventDefault();
      const response= await fetch(URI,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(register)
      });
      if(response.ok){
        alert("Sign Up Succesfull");
        Setregister({
          fullName: "",
          mobile: "+91",
          email: "",
          password: "",
        });
      }else if(response.status===400){
        alert("User Already Registered")
      }else{
        alert(response.statusText)
      }
    }
  };

  return (
    <>
      <Helmet bodyAttributes={{ style: `background-color: #${color}` }} />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card w-100 mx-3" style={{ maxWidth: "28rem" }}>
          <div className="card-body">
            <h5 className="card-title m-2 p-1">Sign Up</h5>
            <p className="card-text m-2 p-1">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingFullName"
                    placeholder="Vishal Agrahari"
                    name="fullName"
                    onChange={changeHandle}
                    value={register.fullName}
                  />
                  <label htmlFor="floatingFullName">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingNumber"
                    placeholder="75708xxxxx"
                    name="mobile"
                    onChange={changeHandle}
                    value={register.mobile}
                  />
                  <label htmlFor="floatingNumber">Mobile Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    name="email"
                    onChange={changeHandle}
                    value={register.email}
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    onChange={changeHandle}
                    value={register.password}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  type="button"
                  onClick={submitHandle}
                  className="btn btn-outline-success m-3"
                >
                  Register
                </button>
              </form>
            </p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link
                to={`/login/${color}`}
                className="btn btn-outline-primary m-3 p-2"
              >
                Login
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
