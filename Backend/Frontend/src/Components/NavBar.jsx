import { useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function NavBar(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate=useNavigate();
  const gotoPage = () => {
    // alert("Clicked");
    const close=document.getElementById("closeit");
    close.click();
    navigate("/loginmode");
  };

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
          {currentPath !== "/loginmode" && !/^\/login/.test(currentPath) && !/^\/signup/.test(currentPath) &&(
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img src="/cart.png" alt="Cart" width="40" height="40" />
          </button>
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
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Please Login First
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                {/* <div className="modal-body"></div> here write some messages */}
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



//for opening in next page



// import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { useLocation, useNavigate } from "react-router-dom";

// export function NavBar(props) {
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const navigate = useNavigate();

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const gotoPage = () => {
//     window.open("/loginmode", "_blank");
//     handleClose();
//   };

//   return (
//     <Navbar bg="light" expand="lg">
//       <div className="container-fluid">
//         <Navbar.Brand href="/">
//           <img
//             src="/Spotmarket-logo-profile.jpg"
//             alt="Logo"
//             width="100"
//             height="60"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto">
//             {currentPath !== "/About" && (
//               <Nav.Link href="/About">About</Nav.Link>
//             )}
//             {currentPath !== "/contactus" && (
//               <Nav.Link href="/contactus">Contact-US</Nav.Link>
//             )}
//           </Nav>
//           {props.isVisible && (
//             <Nav>
//               {currentPath !== "/loginmode" && (
//                 <Button variant="outline-primary" href="/loginmode">
//                   Login
//                 </Button>
//               )}
//             </Nav>
//           )}
//           <Button variant="primary" onClick={handleShow}>
//             <img src="/cart.svg" alt="Cart" width="40" height="40" />
//           </Button>
//         </Navbar.Collapse>
//       </div>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Please Login First</Modal.Title>
//         </Modal.Header>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={gotoPage}>
//             Login
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Navbar>
//   );
// }
