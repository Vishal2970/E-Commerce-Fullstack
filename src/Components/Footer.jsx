// export function Footer() {
//   return (
//     <>
//       <div className="footer">
//         <nav class="footer bg-dark border-bottom border-body" data-bs-theme="dark">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               <img
//               src="/Vishal.png"
//               alt="Logo"
//               width={200}
//               height={60}
//               className="d-inline-block align-text-top"
//             />

//             </a>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }



import React from 'react';
import "./css/Footer.css"

export function Footer() {
  return (
    <>
      <div className="footer">
        <nav className="footer bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="/Vishal.png"
                alt="Logo"
                width={200}
                height={60}
                className="d-inline-block align-text-top"
              />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
