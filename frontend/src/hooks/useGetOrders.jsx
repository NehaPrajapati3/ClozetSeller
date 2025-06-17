import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOrders } from "../redux/orderSlice";

function useGetOrders() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/order/all`
        );
        console.log("Fetched order response is", res);
        dispatch(setOrders(res.data.items));
        console.log("Dispatched setOrders with:", res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [dispatch]);
}

export default useGetOrders;
