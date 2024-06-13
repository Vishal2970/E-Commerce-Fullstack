import React from "react";
import { Helmet } from "react-helmet";
import { useAuthContext } from "../Context/AuthContext";

export function Home({ title, description, keywords, author, Namee }) {
  const { auth } = useAuthContext();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {auth.user ? (
        <>
          <h1>Hello {auth.user.name}</h1>
        </>
      ) : (
        <>
          <h1>Hello {Namee}, please login first</h1>
        </>
      )}
    </>
  );
}
