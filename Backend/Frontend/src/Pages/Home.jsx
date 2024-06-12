import { Helmet } from "react-helmet";
import { useAuthContext } from "../Context/AuthContext";

export function Home({ title, description, keywords, author, Name }) {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const { name, email, mobile } = userData;
  const [auth]=useAuthContext();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {name ? (
        <>
          <h1>Hello {name}</h1>
          <h2>{email}</h2>
          <h2>{mobile}</h2>
        </>
      ) : (
        <h1>Hello {Name} please login first</h1>
      )}
      <h1>{JSON.stringify(auth,null,4)}</h1>      
    </>
  );
}
