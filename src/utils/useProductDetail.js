import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useProductDetail = (product) => {
	const [productDetail, setProductDetail] = useState(null)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL + product);
      const json = await data.json();
			setProductDetail(json)
    } catch (error) {
      console.error(error);
    }
  };
  return productDetail;
};

export default useProductDetail;
