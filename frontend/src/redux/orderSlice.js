import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
  orders: null,
  },
  reducers: {
    setOrders: (state, action) => {
      console.log("✅ Inside setOrders reducer!");
      console.log("🚀 Payload received:", action.payload);
      state.orders = action.payload;
      console.log("✅ Updated Orders:", state.orders);
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload
      );
    },
  },
});

export const { setOrders, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
