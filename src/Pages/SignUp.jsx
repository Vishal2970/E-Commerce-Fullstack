import Helmet from "react-helmet";
// import { NavBar } from "../Components/NavBar";

export function SignUp() {
  return (
    <>
    {/* <NavBar/> */}
      <Helmet bodyAttributes={{ style: "background-color :#FADCAB" }} />
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card" style={{ width: "28rem", height: "32rem" }}>
          <div className="card-body">
            <h5 className="card-title m-2 p-1">Login</h5>
            <p className="card-text m-2 p-1">
              <form action="">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Vishal Agrahari"
                  />
                  <label htmlFor="floatingInput">Full Name</label>
                </div>
                <div className="form-floating  mb-3">
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
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating  mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="button" class="btn btn-outline-success m-3">
                  Register
                </button>
              </form>
            </p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <a class="btn btn-outline-primary" href="/login" role="button">
                Login
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
