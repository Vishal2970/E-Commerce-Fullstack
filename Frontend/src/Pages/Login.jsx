// import { Link, useNavigate, useLocation } from "react-router-dom";
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Helmet from "react-helmet";
// import toast from "react-hot-toast";
// import { useAuthContext } from "../Context/AuthContext";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from "../firebase";

// export function Login({ description, keywords, author, title }) {
//   const navigate = useNavigate();
//   const { color } = useParams(); // Use useParams to get the color from the URL
//   const [login, setLogin] = useState({
//     email: "",
//     password: "",
//   });
//   const auth = getAuth(app);
//   const location = useLocation();
//   const { setAuth } = useAuthContext();
//   const URI = "http://localhost:5000/api/auth/login";

//   const provider = new GoogleAuthProvider();
//   const handleGoogle = async () => {
//     try {
//       const response = await signInWithPopup(auth, provider).then((result) => {
//         const user = response.user.JSON;
//         console.log(user);
//         const userdata = {
//           name: user.displayName,
//           email: user.email,
//           photo: user.photoURL,
//         };
//         // toast.success(data.msg);
//         setAuth({
//           user: userdata,
//           token: user.accessToken,
//         });
//         sessionStorage.setItem(
//           "auth",
//           JSON.stringify({ user: userdata, token: user.accessToken })
//         );
//         navigate(location.state || "/");
//         setLogin({
//           email: "",
//           password: "",
//         });
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!login.email || !login.password) {
//       setLogin({
//         email: "",
//         password: "",
//       });
//       toast.error("Enter proper value");
//     } else {
//       try {
//         const response = await fetch(URI, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(login),
//         });
//         const data = await response.json();
//         if (response.ok) {
//           toast.success(data.msg);
//           setAuth({
//             user: data.user,
//             token: data.token,
//           });
//           // localStorage.setItem(
//           //   "auth",
//           //   JSON.stringify({ user: data.user, token: data.token })
//           // );
//           sessionStorage.setItem(
//             "auth",
//             JSON.stringify({ user: data.user, token: data.token })
//           );
//           navigate(location.state || "/");
//           setLogin({
//             email: "",
//             password: "",
//           });
//         } else {
//           toast.error(data.msg);
//         }
//       } catch (error) {
//         toast.error(error.message || "An error occurred");
//       }
//     }
//   };

//   const OnchangeHandle = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setLogin({
//       ...login,
//       [name]: value,
//     });
//   };

//   return (
//     <>
//       <Helmet bodyAttributes={{ style: `background-color: #${color}` }} />
//       <Helmet>
//         <meta charSet="utf-8" />
//         <meta name="description" content={description} />
//         <meta name="keywords" content={keywords} />
//         <meta name="author" content={author} />
//         <title>{title}</title>
//       </Helmet>
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <div className="card w-100 mx-3" style={{ maxWidth: "28rem" }}>
//           <div className="card-body">
//             <h5 className="card-title m-2 p-1">Login</h5>
//             <p className="card-text m-2 p-1">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="floatingInput"
//                     placeholder="name@example.com"
//                     name="email"
//                     value={login.email}
//                     onChange={OnchangeHandle}
//                     required
//                   />
//                   <label htmlFor="floatingInput">Email address</label>
//                 </div>
//                 <div className="form-floating">
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="floatingPassword"
//                     placeholder="Password"
//                     name="password"
//                     value={login.password}
//                     onChange={OnchangeHandle}
//                     required
//                   />
//                   <label htmlFor="floatingPassword">Password</label>
//                 </div>
//                 <button type="submit" className="btn btn-outline-success m-3">
//                   Login
//                 </button>
//               </form>
//               <button
//                 onClick={handleGoogle}
//                 className="btn btn-outline-success m-3"
//               >
//                 Login with Google
//               </button>
//             </p>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <Link to={`/signup/${color}`} className="btn btn-primary m-3 p-2">
//                 Register
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase";

export function Login({ description, keywords, author, title }) {
  const navigate = useNavigate();
  const { color } = useParams(); // Use useParams to get the color from the URL
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth(app);
  const location = useLocation();
  const { setAuth } = useAuthContext();
  const URI = "http://localhost:5000/api/auth/login";

  const provider = new GoogleAuthProvider();

  const ghandleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const data = result.user.JSON;
      setAuth({
        user: data.user,
        token: data.token,
      });
      sessionStorage.setItem(
        "auth",
        JSON.stringify({ user: data.user, token: data.token })
      );
      navigate(location.state?.from || "/");
      setLogin({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Google login error:", error.message);
      toast.error("Failed to sign in with Google.");
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Extracting user details
      const userdata = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };

      // Update authentication context and session storage
      setAuth({
        user: userdata,
        token: user.accessToken,
      });
      sessionStorage.setItem(
        "auth",
        JSON.stringify({ user: userdata, token: user.accessToken })
      );

      // Redirect to the previous page or home
      navigate(location.state?.from || "/");
      setLogin({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Google login error:", error.message);
      toast.error("Failed to sign in with Google.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      toast.error("Please enter valid email and password.");
      return;
    }

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
        setAuth({
          user: data.user,
          token: data.token,
        });
        sessionStorage.setItem(
          "auth",
          JSON.stringify({ user: data.user, token: data.token })
        );
        navigate(location.state?.from || "/");
        setLogin({
          email: "",
          password: "",
        });
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error("An error occurred during login.");
      console.error("Login error:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button type="submit" className="btn btn-outline-success m-3">
                Login
              </button>
            </form>
            <button
              onClick={handleGoogle}
              className="btn btn-outline-success m-3"
            >
              Login with Google
            </button>
            <Link to={`/signup/${color}`} className="btn btn-primary m-3 p-2">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

