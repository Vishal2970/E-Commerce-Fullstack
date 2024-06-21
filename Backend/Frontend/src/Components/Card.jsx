import React from "react";

const Card = ({ imge, title, descr,id }) => {
  const handleCartAdd = (e) => {
    e.preventDefault();
    alert(id);
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
