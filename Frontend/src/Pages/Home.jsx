import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { useAuthContext } from "../Context/AuthContext";
import Card from "../Components/Card";
import axios from "axios";

export function Home({ title, description, keywords, author, Namee }) {
  // const { auth } = useAuthContext();
  const [data, setData] = useState([]);
  const URI = "http://localhost:5000/api/product/getAllProduct";

  const getData = async () => {
    try {
      const response = await axios.get(URI);
      setData(response.data.product); // Assuming response.data contains the array of products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {/* {data.map((item, index) => (
            <div className="col" key={index}>
              <div className="p-3">
                <Card
                  imge={item.imageUrl}
                  title={item.title}
                  descr={item.description}
                />
              </div>
            </div>
          ))} */}
          {data.map((item, index) => (
            <div className="col" key={index}>
              <div className="p-3">
                <Card
                  imge={item.imgSrc}
                  id={item.productId}
                  title={item.title}
                  descr={item.descr}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="col">
  <div className="p-3">
    <Card imge="/profile.jpg" title="Vishal" descr="Hello I am Vishal" />
  </div>
</div>; */
}

// {auth.user ? (
//   <>
//     <h1>Hello {auth.user.name}</h1>
//   </>
// ) : (
//   <>
//     <h1>Hello {Namee}, please login first</h1>
//   </>
// )}
