const ProductCard = ({ product }) => {
  const { name, price, ingredients, rating } = product;
  return (
    <div className="product-card bg-blue-50 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-bold mb-2 text-gray-800 truncate">{name}</h3>
      <h4 className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-10">
        {ingredients?.join(", ")}
      </h4>
      <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-orange-600">NT${price}</h4>
        <h4 className="text-sm font-medium text-gray-700 flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          {rating}
        </h4>
      </div>
    </div>
  );
};

export default ProductCard;
