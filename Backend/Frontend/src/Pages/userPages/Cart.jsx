import React from "react";
import Helmet from "react-helmet";

const Cart = ({ description, keywords, author, title }) => {
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
        <h1>Hello Vishal From Cart</h1>
      </div>
    </>
  );
};

export default Cart;
