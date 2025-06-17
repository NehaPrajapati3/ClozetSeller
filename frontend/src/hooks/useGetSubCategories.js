import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSubCategories } from "../redux/subCategorySlice";

function useGetSubCategories() {
  const dispatch = useDispatch();

  const fetchSubCategories = useCallback(async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/subCategory/all`
      );
      console.log("Fetched subCategory response is", res);
      dispatch(setSubCategories(res.data.subCategories));
      console.log("Dispatched setSubCategories with:", res.data.subCategories);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchSubCategories();
  }, [fetchSubCategories]);

  return { refetchSubCategories: fetchSubCategories };
}

export default useGetSubCategories;
