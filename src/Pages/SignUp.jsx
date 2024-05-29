import Helmet from "react-helmet";
// import { NavBar } from "../Components/NavBar";

export function SignUp() {
  return (
    <>
      {/* <NavBar/> */}
      <Helmet bodyAttributes={{ style: "background-color :#FADCAB" }} />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card w-100 mx-3" style={{ maxWidth: "28rem" }}>
          <div className="card-body">
            <h5 className="card-title m-2 p-1">Sign Up</h5>
            <p className="card-text m-2 p-1">
              <form action="">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingFullName"
                    placeholder="Vishal Agrahari"
                  />
                  <label htmlFor="floatingFullName">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingNumber"
                    placeholder="75708xxxxx"
                  />
                  <label htmlFor="floatingNumber">Mobile Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingEmail">Email address</label>
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
                <button type="button" className="btn btn-outline-success m-3">
                  Register
                </button>
              </form>
            </p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <a className="btn btn-outline-primary" href="/login" role="button">
                Login
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
