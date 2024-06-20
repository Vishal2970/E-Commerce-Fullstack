import React, { useState } from "react";
import axios from "axios";

const AddItems = () => {
  const [items, setItems] = useState({
    productId: "",
    title: "",
    descr: "",
    imgSrc: "",
  });
  const URI = "http://localhost:5000/api/product/addProduct";
  const handleAddItems = async (e) => {
    e.preventDefault();
    console.log(items);
    try {
      const response = await axios.post(URI, items);
      console.log(response);
      if (response.data.success) {
        alert(response.data.msg);
      }else if(!response.data.success){
        alert(response.data.msg)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItems({
      ...items,
      [name]: value,
    });
  };

  return (
    <div className="d-flex justify-content-center m-5">
      <form onSubmit={handleAddItems}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="productId"
            value={items.productId}
            onChange={handleOnchange}
            placeholder="Abc12#@"
          />
          <label htmlFor="floatingInput">Product ID</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            value={items.title}
            onChange={handleOnchange}
            placeholder="Abc12#@"
          />
          <label htmlFor="floatingInput">Product title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="descr"
            value={items.descr}
            onChange={handleOnchange}
            placeholder="Abc12#@"
          />
          <label htmlFor="floatingInput">Product Description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="imgSrc"
            value={items.imgSrc}
            onChange={handleOnchange}
            placeholder="Abc12#@"
          />
          <label htmlFor="floatingInput">Image Source Link</label>
        </div>
        <button type="submit" className="btn btn-outline-success m-3">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItems;

// {
//     "productId":"12345",
//     "title":"Shree Ram Chandra Photo",
//     "descr":"Shree Ram Ji ka photo",
//     "imgSrc":"https://images.herzindagi.info/image/2023/Aug/slokas-and-mantras-for-Lord-Rama.jpg"
// }
