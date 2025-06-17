import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPlacedOrders } from "../redux/placedOrdersSlice";

function useGetPlacedOrders() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/seller-dashboard/all`
        );
        console.log("Fetched placed order response is", res);
        dispatch(setPlacedOrders(res.data.items));
        console.log("Dispatched setPlacedOrders with:", res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [dispatch]);
}

export default useGetPlacedOrders;
