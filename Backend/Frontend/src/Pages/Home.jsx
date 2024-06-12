// import { Helmet } from "react-helmet";
// import { useAuthContext } from "../Context/AuthContext";

// export function Home({ title, description, keywords, author, Namee }) {
//   // const userData = JSON.parse(localStorage.getItem("userData")) || {};
//   const [auth]=useAuthContext();
//   const Name=auth.userData.name;
//   const email=auth.userData.email;
//   const mobile =auth.userData.mobile
  
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <meta name="description" content={description} />
//         <meta name="keywords" content={keywords} />
//         <meta name="author" content={author} />
//         <title>{title}</title>
//       </Helmet>
//       {Name ? (
//         <>
//           <h1>Hello {Name}</h1>
//           <h2>{email}</h2>
//           <h2>{mobile}</h2>
//         </>
//       ) : (
//         <h1>Hello {Namee} please login first</h1>
//       )}
//       <h1>{}</h1>      
//     </>
//   );
// }


import React from "react";
import { Helmet } from "react-helmet";
import { useAuthContext } from "../Context/AuthContext";

export function Home({ title, description, keywords, author, Namee }) {
  const [auth] = useAuthContext();

  // Safely access userData properties
  const Name = auth.userData?.name;
  const email = auth.userData?.email;
  const mobile = auth.userData?.mobile;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {Name ? (
        <>
          <h1>Hello {Name}</h1>
          <h2>Email id : {email}</h2>
          <h2>Mobile No.:{mobile}</h2>
        </>
      ) : (
        <h1>Hello {Namee}, please login first</h1>
      )}
      {/* <h2>{auth.token}</h2> */}
    </>
  );
}
