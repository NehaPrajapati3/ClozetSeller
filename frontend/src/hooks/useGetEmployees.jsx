import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmployees } from "../redux/employeeSlice";

function useGetEmployees() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/employee/allEmployees`
        );
        console.log("Fetched response is", res);
        dispatch(setEmployees(res.data.Employees));
        console.log("Dispatched setEmployees with:", res.data.Employees);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();
  }, [dispatch]);
}

export default useGetEmployees;
