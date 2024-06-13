import React from "react";
import Helmet from "react-helmet";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";


const Profile = ({ description, keywords, author, title }) => {
  const { auth, setAuth } = useAuthContext();
  // Safely access userData properties
  const Name = auth.user?.name;
  const email = auth.user?.email;
  const mobile = auth.user?.mobile;
  const navigate=useNavigate();
  const handleLogout = () => {
    setAuth({
      user: null,
      token: null,
    });
    localStorage.removeItem("auth");
    navigate("/")
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <h1>Hello {Name}</h1>
      <h2>Email id : {email}</h2>
      <h2>Mobile No.:{mobile}</h2>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default Profile;
