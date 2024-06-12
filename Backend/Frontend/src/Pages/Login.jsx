import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

export function Login({ description, keywords, author, title }) {
  const navigate = useNavigate();
  const { color } = useParams(); // Use useParams to get the color from the URL
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useAuthContext();
  const URI = "http://localhost:5000/api/auth/login";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      setLogin({
        email: "",
        password: "",
      });
      toast.error("enter proper value");
    } else {
      try {
        const response = await fetch(URI, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        });
        const data = await response.json();
        if (response.ok) {
          toast.success(data.msg);
          console.log(data);
          // const userData = {
          //   name: data.user.name,
          //   email: data.user.email,
          //   mobile: data.user.mobile,
          // };
          setAuth({
            ...auth,
            user:data.user,
            token: data.token,
          })
          console.log(JSON.stringify(auth));
          localStorage.setItem("auth",JSON.stringify(auth));
          // console.log(auth);
          // localStorage.setItem("auth", JSON.stringify(auth));
          navigate("/");
          // console.log(userData);
          setLogin({
            email: "",
            password: "",
          });
        } else {
          toast.error(data.msg);
        }
      }
      // try {
      //   const response = await fetch(URI, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(login),
      //   });
      //   const data = await response.json();
      //   if (response.ok) {
      //     toast.success(data.msg);
      //     // console.log(data.user.name);
      //     const userData = {
      //       name: data.user.name,
      //       email: data.user.email,
      //       mobile: data.user.mobile,
      //     };
      //     const newAuth = {
      //       ...auth,
      //       userData,
      //       token: data.token,
      //     };
      //     setAuth(newAuth);
      //     console.log( "auth  "+JSON.stringify(auth));
      //     console.log( "newAuth  "+JSON.stringify(newAuth));
      //     localStorage.setItem("auth", JSON.stringify(newAuth)); // Stringify the new auth object before storing
      //     navigate("/");
      //     setLogin({
      //       email: "",
      //       password: "",
      //     });
      //   } else {
      //     toast.error(data.msg);
      //   }
      catch (error) {
        toast.error(error);
      }
    }
  };
  const OnchangeHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };
  return (
    <>
      <Helmet bodyAttributes={{ style: `background-color: #${color}` }} />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card w-100 mx-3" style={{ maxWidth: "28rem" }}>
          <div className="card-body">
            <h5 className="card-title m-2 p-1">Login</h5>
            <p className="card-text m-2 p-1">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={login.email}
                    onChange={OnchangeHandle}
                    required
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={login.password}
                    onChange={OnchangeHandle}
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-outline-success m-3"
                >
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
