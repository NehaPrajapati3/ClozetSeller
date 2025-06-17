import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCoupons } from "../redux/couponSlice";

function useGetCoupons() {
  const dispatch = useDispatch();

  const fetchCoupons = useCallback(async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/coupon/all`
      );
      console.log("Fetched Coupon response is", res);
      dispatch(setCoupons(res.data.items));
      console.log("Dispatched setCoupons with:", res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  return { refetch: fetchCoupons };
}

export default useGetCoupons;
