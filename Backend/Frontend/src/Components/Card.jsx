import React from "react";

const Card = ({imge,title,descr}) => {
  return (
    <div>
      <div className="card">
        <img src={imge} className="card-img-top" alt="Photo" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descr}</p>
          <a href="/" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
