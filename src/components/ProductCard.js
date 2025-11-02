const ProductCard = ({ product }) => {
  const { name, price, ingredients, rating } = product;
  return (
    <div className="product-card" style={{ backgroundColor: "aliceblue" }}>
      <h3>{name}</h3>
      <h4>{ingredients?.join(",")}</h4>
      <h4>NT${price}</h4>
      <h4>rating:{rating}</h4>
    </div>
  );
};

export default ProductCard;
