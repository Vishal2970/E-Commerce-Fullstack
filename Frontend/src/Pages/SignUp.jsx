// import React, { useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import Helmet from "react-helmet";
// import toast from "react-hot-toast";

// export function SignUp({ description, keywords, author, title }) {
//   const URI = "http://localhost:5000/api/auth/signup";
//   const navigate = useNavigate();
//   const { color } = useParams(); // Use useParams to get the color from the URL
//   const [register, Setregister] = useState({
//     fullName: "",
//     mobile: "+91",
//     email: "",
//     password: "",
//   });
//   const changeHandle = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     Setregister({
//       ...register,
//       [name]: value,
//     });
//   };
//   const submitHandle = async (e) => {
//     if (
//       !register.fullName ||
//       register.mobile.length < 13 ||
//       !register.email ||
//       !register.password
//     ) {
//       Setregister({
//         fullName: "",
//         mobile: "+91",
//         email: "",
//         password: "",
//       });
//       toast.error("enter proper value");
//     } else {
//       e.preventDefault();
//       const response = await fetch(URI, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(register)
//       });
//       const data = await response.json();
//       if (response.ok) {
//         toast.success(data.msg)
//         console.log("Token " + data.token);
//         navigate("/loginmode")
//         Setregister({
//           fullName: "",
//           mobile: "+91",
//           email: "",
//           password: "",
//         });
//       } else if (response.status === 400) {
//         toast.error("User Already Registered");
//       } else {
//         toast.error(response.statusText);
//       }
//     }
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
//             <h5 className="card-title m-2 p-1">Sign Up</h5>
//             <p className="card-text m-2 p-1">
//               <form>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingFullName"
//                     placeholder="Vishal Agrahari"
//                     name="fullName"
//                     onChange={changeHandle}
//                     value={register.fullName}
//                   />
//                   <label htmlFor="floatingFullName">Full Name</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingNumber"
//                     placeholder="75708xxxxx"
//                     name="mobile"
//                     onChange={changeHandle}
//                     value={register.mobile}
//                   />
//                   <label htmlFor="floatingNumber">Mobile Number</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="floatingEmail"
//                     placeholder="name@example.com"
//                     name="email"
//                     onChange={changeHandle}
//                     value={register.email}
//                   />
//                   <label htmlFor="floatingEmail">Email address</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="floatingPassword"
//                     placeholder="Password"
//                     name="password"
//                     onChange={changeHandle}
//                     value={register.password}
//                   />
//                   <label htmlFor="floatingPassword">Password</label>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={submitHandle}
//                   className="btn btn-outline-success m-3"
//                 >
//                   Register
//                 </button>
//               </form>
//             </p>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <Link
//                 to={`/login/${color}`}
//                 className="btn btn-outline-primary m-3 p-2"
//               >
//                 Login
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import toast from "react-hot-toast";

export function SignUp({ description, keywords, author, title }) {
  const URI = "http://localhost:5000/api/auth/signup";
  const navigate = useNavigate();
  const { color } = useParams(); // Use useParams to get the color from the URL
  const [register, setRegister] = useState({
    fullName: "",
    mobile: "+91",
    email: "",
    password: "",
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type === "image/jpeg" || selectedFile.type === "image/png")
    ) {
      setError("");
      setFile(selectedFile);
    } else {
      setError("Only JPEG and PNG files are allowed.");
      setFile(null);
    }
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    if (
      !register.fullName ||
      register.mobile.length < 13 ||
      !register.email ||
      !register.password
    ) {
      setRegister({
        fullName: "",
        mobile: "+91",
        email: "",
        password: "",
      });
      toast.error("Enter proper value");
    } else {
      const formData = new FormData();
      formData.append("fullName", register.fullName);
      formData.append("mobile", register.mobile);
      formData.append("email", register.email);
      formData.append("password", register.password);
      if (file) {
        formData.append("image", file);
      }

      try {
        const response = await fetch(URI, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (response.ok) {
          toast.success(data.msg);
          console.log("Token " + data.token);
          navigate("/loginmode");
          setRegister({
            fullName: "",
            mobile: "+91",
            email: "",
            password: "",
          });
          setFile(null);
        } else if (response.status === 400) {
          toast.error("User Already Registered");
        } else {
          toast.error(response.statusText);
        }
      } catch (error) {
        toast.error("An error occurred");
        console.error(error);
      }
    }
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
            <h5 className="card-title m-2 p-1">Sign Up</h5>
            <p className="card-text m-2 p-1">
              <form onSubmit={submitHandle} encType="multipart/form-data">
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
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingFile"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="floatingFile">Upload Image</label>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-outline-success m-3">
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
