export function NavBar() {
    var sectionStyle = {
        width: "100%",
        height: "400px",
      };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a 
          className="navbar-brand"
           href="/">
            <img src="/Spotmarket-logo-profile.jpg" alt="Bootstrap" width="100" height="60"></img>
            {/* <img src="/Spotmarket-logo-profile.jpg" style={sectionStyle} alt="Spot Market" /> */}
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
                <a
                class="btn btn-outline-dark m-2"
                //   className="nav-link active"
                  aria-current="page"
                  href="/About"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                class="btn btn-outline-dark m-2"
                // className="nav-link"
                 href="/Contactus">
                  Contact-US
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <a
                  className="nav-link active"
                  aria-current="page"
                  href="/login"
                >
                  Login
                </a> */}
                <a class="btn btn-outline-primary m-2" href="/login" role="button">
                  Login
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
