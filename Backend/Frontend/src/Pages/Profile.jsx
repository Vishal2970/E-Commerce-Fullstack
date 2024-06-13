import React from "react";
import Helmet from "react-helmet";

const Profile = ({ description, keywords, author, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div>
        <h1>Hello Vishal From profile</h1>
      </div>
    </>
  );
};

export default Profile;
