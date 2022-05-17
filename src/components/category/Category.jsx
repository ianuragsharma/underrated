import React, { useState, useEffect } from "react";
import axios from "axios";
import "./category.css";
import { Link } from "react-router-dom";
const Category = () => {
  const [cateogory, setCateogory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("api/categories");
        setCateogory(data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const cateogoryList = cateogory.map((item) => (
    <div key={item._id} className="category-item">
      <img
        loading="lazy"
        className="image-responsive category-img"
        src={item.imgURL}
        alt="headphones"
      />
      <h4 className=" fw-300 cateogy-title text-center">{item.categoryName}</h4>
    </div>
  ));
  return <>{cateogoryList}</>;
};

export { Category };
