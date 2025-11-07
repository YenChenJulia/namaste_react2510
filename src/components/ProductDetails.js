import Shimmer from "./Shimmer";
import useProductDetail from "../utils/useProductDetail";
import { useParams } from "react-router";

const ProductDetails = () => {
  const productName = useParams();
  const productInfo = useProductDetail(productName.product);

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
