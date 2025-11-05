import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const ProductDetails = () => {
	const productName = useParams()
	
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL+productName.product);
      const json = await data.json();
      setProductInfo(json);
    } catch (error) {
      console.error(error);
    }
  };

  if (productInfo === null) {
    return <Shimmer />;
  }

  const { name, nutritions } = productInfo;
  const { protein, fat } = nutritions;

  return (
    <div>
      <h1>Products: {name}</h1>
      <h2>protein: {protein}</h2>
      <h4>fat: {fat}</h4>
    </div>
  );
};

export default ProductDetails;
