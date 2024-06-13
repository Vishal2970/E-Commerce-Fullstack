import React from "react";
import { Helmet } from "react-helmet";
import { useAuthContext } from "../Context/AuthContext";

export function Home({ title, description, keywords, author, Namee }) {
  const { auth, setAuth } = useAuthContext();
  // Safely access userData properties
  const Name = auth.user?.name;
  const email = auth.user?.email;
  const mobile = auth.user?.mobile;

  const handleLogout = () => {
    setAuth({
      user: null,
      token: null,
    });
    localStorage.removeItem("auth");
  };

  const isAuthenticated = Boolean(auth.token);
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
      {isAuthenticated && <button onClick={handleLogout}>Log Out</button>}
    </>
  );
}
