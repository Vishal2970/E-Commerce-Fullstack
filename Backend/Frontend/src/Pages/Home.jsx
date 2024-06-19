import React from "react";
import { Helmet } from "react-helmet";
import { useAuthContext } from "../Context/AuthContext";
import Card from "../Components/Card";

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
      {/* Start */}

      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
