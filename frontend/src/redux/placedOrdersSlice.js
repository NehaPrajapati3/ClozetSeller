import { createSlice } from "@reduxjs/toolkit";

const placedOrderSlice = createSlice({
  name: "placedOrder",
  initialState: {
  placedOrders: null,
  },
  reducers: {
    setPlacedOrders: (state, action) => {
      console.log("✅ Inside setOrders reducer!");
      console.log("🚀 Payload received:", action.payload);
      state.placedOrders = action.payload;
      console.log("✅ Updated Orders:", state.placedOrders);
    },
    deletePlacedOrder: (state, action) => {
      state.placedOrders = state.placedOrders.filter(
        (order) => order._id !== action.payload
      );
    },
  },
});

export const { setPlacedOrders, deletePlacedOrder } = placedOrderSlice.actions;
export default placedOrderSlice.reducer;
