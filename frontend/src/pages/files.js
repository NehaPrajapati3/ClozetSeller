import useGetProducts from "../hooks/useGetProducts.jsx";
import useGetOrders from "../hooks/useGetOrders.jsx";
import {selectProducts, selectOrders} from "../redux/selectors.js";
import {deleteProduct} from "../redux/productSlice.js";

export {
  useGetProducts,
  useGetOrders,
  selectProducts,
  selectOrders,
  deleteProduct,
};