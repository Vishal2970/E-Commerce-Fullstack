import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";




// Working



const Card = ({ imge, title, descr, id }) => {
  const [auth] = useAuthContext();
  const [item, setItem] = useState({
    email: auth.email,
    productId: "",
  });
  const URI = "Google.com";
  const addCart = async () => {
    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      if (data.success) {
        alert("Added in cart");
      } else {
        alert("working " + item);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleCartAdd = (e) => {
    e.preventDefault();
    const authorized = sessionStorage.getItem("auth");
    if (authorized) {
      // saving in db if login
      setItem({
        ...item,
        productId: id,
      });
      addCart();
    } else {
      // saving in cart if not login
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
          <button href="/" className="btn btn-primary" onClick={handleCartAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
