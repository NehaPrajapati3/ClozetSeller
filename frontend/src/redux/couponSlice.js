import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    coupons: null,
    couponToEdit: null,
  },
  reducers: {
    setCoupons: (state, action) => {
      console.log("✅ Inside setCoupons reducer!");
      console.log("🚀 Payload received:", action.payload);
      state.coupons = action.payload;
      console.log("✅ Updated Coupons:", state.coupons);
    },
    setCouponToEdit: (state, action) => {
      state.couponToEdit = action.payload;
    },
    clearCouponToEdit: (state) => {
      state.couponToEdit = null;
    },
    deleteCoupon: (state, action) => {
      state.coupons = state.coupons.filter(
        (coupon) => coupon._id !== action.payload
      );
    },
  },
});

export const { setCoupons, setCouponToEdit, clearCouponToEdit, deleteCoupon } =
  couponSlice.actions;
export default couponSlice.reducer;
