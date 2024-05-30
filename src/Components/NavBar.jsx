import { useLocation } from "react-router-dom";

export function NavBar(props) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/Spotmarket-logo-profile.jpg"
            alt="Logo"
            width="100"
            height="60"
          />
        </a>
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
                <a
                  className="btn btn-outline-dark m-2"
                  aria-current="page"
                  href="/About"
                >
                  About
                </a>
              )}
            </li>
            <li className="nav-item">
              {currentPath !== "/contactus" && (
                <a className="btn btn-outline-dark m-2" href="/contactus">
                  Contact-US
                </a>
              )}
            </li>
          </ul>

              {/* for login mode button */}

          {/* {props.isVisible ? (
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {currentPath !== "/loginmode" && (
                  <li className="nav-item">
                    <a
                      className="btn btn-outline-primary m-2"
                      href="/loginmode"
                      role="button"
                    >
                      Login
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ) : null} */}

          {/* for cart */}

          <button type="button" class="btn btn-outline-primary m-2">
           <img src="/cart.svg" alt="Cart"
            width="40"
            height="40" />
          </button>

          
        </div>
      </div>
    </nav>
  );
}