import ProductCard, { withPromoteLabel } from "./ProductCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [ProductsOnScreen, setProductsOnScreen] = useState([]);
  const [listOfProduct, setListOfProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedProductCard = withPromoteLabel(ProductCard);
  const { name, setUserName } = useContext(UserContext);

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h2>
        looks like you are offline! please check your internet connection!
      </h2>
    );
  }

  return ProductsOnScreen.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-4 py-6 md:px-6 md:py-8 max-w-7xl mx-auto">
      <h1>{name}</h1>
      <div className="search mb-6 md:mb-8">
        <div className="keyword-search flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center mb-4">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-4 py-2.5 md:py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-base"
          />
          <button
            onClick={() => {
              const filteredProducts = listOfProduct.filter((e) =>
                e.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setProductsOnScreen(filteredProducts);
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 md:py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
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
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 md:py-2 rounded-lg font-medium transition-colors"
        >
          Top Rated (4.5+)
        </button>
        <div className="user-name-input">
          <label>User Name:</label>
          <input
            type="text"
            className="p-2 font-bold"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="product-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {ProductsOnScreen.map((pro) =>
          pro.rating > 4.5 ? (
            <PromotedProductCard key={pro.id} product={pro} />
          ) : (
            <ProductCard key={pro.id} product={pro} />
          )
        )}
      </div>
      {/* <div className="product-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {ProductsOnScreen.map((pro) => (
          <ProductCard key={pro.id} product={pro} />
        ))}
      </div> */}
    </div>
  );
};

export default Body;
