import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
  },
  reducers: {
    setProducts: (state, action) => {
      console.log("✅ Inside setProducts reducer!");
      console.log("🚀 Payload received:", action.payload);
      state.products = action.payload;
      console.log("✅ Updated products:", state.products);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    toggleVisibility: (state, action) => {
      const { productId, field, value } = action.payload;
      // Find the product and toggle the visibility field
      const product = state.products.find((p) => p._id === productId);
      if (product) {
        product.visibility = {
          ...product.visibility,
          [field]: value,
        };
      }
    },
  },
});

export const { setProducts, deleteProduct, toggleVisibility } =
  productSlice.actions;
export default productSlice.reducer;
