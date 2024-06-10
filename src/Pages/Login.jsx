import { Link,useNavigate } from "react-router-dom";
import React, { useState} from "react";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";

export function Login() {
  const navigate=useNavigate()
  const { color } = useParams(); // Use useParams to get the color from the URL
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const URI = "http://localhost:5000/api/auth/login";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      setLogin({
        email: "",
        password: "",
      });
      alert("enter proper value");
    } else {
      try {
        const response = await fetch(URI, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login)
        });
        const data=await response.json();
        if (response.ok) {
          alert(data.msg);
          navigate("/");
          console.log(data.token);
          localStorage.setItem('token', data.token);
          setLogin({
            email: "",
            password: "",
          });
        }else{
          alert(data.msg)
        }
      } catch (error) {
        console.log(error);
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
