// import { NavBar } from "../Components/NavBar";
import { Helmet } from "react-helmet";
export function About({description,keywords,author,title}) {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
    {/* <NavBar/> */}
      <h1>Hello i am about</h1>
    </>
  );
}
