import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productSlice";

function useGetProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/products/all`
        );
        console.log("Fetched response is", res);
        dispatch(setProducts(res.data.items));
        console.log("Dispatched setProducts with:", res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [dispatch]);
}

export default useGetProducts;
