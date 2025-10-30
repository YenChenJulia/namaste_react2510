import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfProduct, setListOfProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //  試shimmerUI用
  // const fetchData = () => {
  //   setTimeout(async () => {
  //     const data = await fetch("http://localhost:8000/api/products");
  //     const json = await data.json();
  //     setListOfProduct(json);
  //   }, 3000);
  // };

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:8000/api/products");
      const json = await data.json();
      setListOfProduct(json);
    } catch (error) {
      console.error(error);
    }
  };

  if (listOfProduct.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filterList = productList.filter(
              (product) => product.rating > 4.5
            );
            setListOfProduct(filterList);
          }}
        >
          top rating products
        </button>
      </div>
      <div className="product-container">
        {listOfProduct.map((pro) => (
          <ProductCard key={pro.id} product={pro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
