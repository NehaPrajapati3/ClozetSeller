import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../redux/categorySlice.js";

function useGetCategories() {
  const dispatch = useDispatch();

  const fetchCategories = useCallback(async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/category/all`
      );
      console.log("Fetched Category response is", res);
      dispatch(setCategories(res.data.items));
      console.log("Dispatched setCategories with:", res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { refetchCategories: fetchCategories };
}

export default useGetCategories;
