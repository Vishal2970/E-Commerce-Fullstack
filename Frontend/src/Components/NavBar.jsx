import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const { auth } = useAuthContext();
  const imgPath = auth.user?.imagePath;
  console.log(imgPath);
  const gotoPage = () => {
    const close = document.getElementById("closeit");
    if (close) close.click();
    navigate("/loginmode");
  };

  const isAuthenticated = Boolean(auth.token);

  const handlePath = () => {
    if (isAuthenticated) {
      navigate("/cart");
    } else {
      const modal = new window.bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      modal.show();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/Spotmarket-logo-profile.jpg" alt="Logo" width="100" height="60" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              {currentPath !== "/About" && (
                <Link className="btn btn-outline-dark m-2" aria-current="page" to="/About">
                  About
                </Link>
              )}
            </li>
            <li className="nav-item">
              {currentPath !== "/contactus" && (
                <Link className="btn btn-outline-dark m-2" to="/contactus">
                  Contact-US
                </Link>
              )}
            </li>
          </ul>

          {currentPath !== "/loginmode" && !/^\/login/.test(currentPath) && !/^\/signup/.test(currentPath) && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePath}
            >
              <img src="/cart.png" alt="Cart" width="40" height="40" />
            </button>
          )}
          {isAuthenticated && (
            <Link className="navbar-brand m-3" to="/profile">
              <img src={"http://localhost:5000/uploads/"+imgPath} alt="Profile" width="55" height="55" />
            </Link>
          )}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Please Login First</h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    id="closeit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={gotoPage}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}