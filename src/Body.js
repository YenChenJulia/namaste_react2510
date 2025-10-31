import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [ProductsOnScreen, setProductsOnScreen] = useState([]);
  const [listOfProduct, setListOfProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      setProductsOnScreen(json);
    } catch (error) {
      console.error(error);
    }
  };

  return ProductsOnScreen.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="keyword-search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const filteredProducts = listOfProduct.filter((e) =>
                e.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setProductsOnScreen(filteredProducts);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filterList = listOfProduct.filter(
              (product) => product.rating > 4.5
            );
            setProductsOnScreen(filterList);
          }}
        >
          top rating products
        </button>
      </div>
      <div className="product-container">
        {ProductsOnScreen.map((pro) => (
          <ProductCard key={pro.id} product={pro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
