import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";


const Card = ({ imge, title, descr, id }) => {
  // Ensure useAuthContext returns an iterable, like an array
  const [auth] = useAuthContext();
  
  const [item, setItem] = useState({
    email: auth.email,
    productId: "",
  });

  const URI = "http://localhost:5000/api/cart/addingcart";

  const addCart = async () => {
    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure headers are set correctly
          "Authorization": auth.token,
        },
        body: JSON.stringify(item),
      });

      const data = await response.json();
      if (data.success) {
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCartAdd = (e) => {
    e.preventDefault();
    const authorized = sessionStorage.getItem("auth");
    if (authorized) {
      // Saving in db if logged in
      setItem((prevItem) => ({
        ...prevItem,
        productId: id,
      }));
      addCart();
    } else {
      // Saving in cart if not logged in
      sessionStorage.setItem("cart", id);
    }
  };

  return (
    <div>
      <div className="card">
        <img src={imge} className="card-img-top" alt="Photo" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descr}</p>
          <button href="/" className="btn btn-primary" >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
