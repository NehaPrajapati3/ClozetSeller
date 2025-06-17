// redux/selectors.js
import { createSelector } from "reselect";

// Basic selector to get product state
const selectProductState = (state) => state.product || { products: [] };

// Memoized selector to get products
export const selectProducts = createSelector(
  [selectProductState],
  (product) => product.products || [] // <-- Fallback to empty array
);

const selectOrderState = (state) => state.order || { orders: [] };

export const selectOrders = createSelector(
  [selectOrderState],
  (order) => order.orders || [] // <-- Fallback to empty array
);

const selectEmployeeState = (state) => state.employee || { employees: [] };

export const selectEmployees = createSelector(
  [selectEmployeeState],
  (employee) => employee.employees || [] 
);

const selectCouponState = (state) => state.coupon || { coupons: [] };

export const selectCoupons = createSelector(
  [selectCouponState],
  (coupon) => coupon.coupons || []
);

export const selectCouponToEdit = createSelector(
  [selectCouponState],
  (coupon) => coupon.couponToEdit || null
);

const selectCategoryState = (state) => state.category || { categories: [] };

export const selectCategories = createSelector(
  [selectCategoryState],
  (category) => category.categories || []
);

export const selectCategoryToEdit = createSelector(
  [selectCategoryState],
  (category) => category.categoryToEdit || null
);


const selectSubCategoryState = (state) => state.subCategory || { subCategories: [] };

export const selectSubCategories = createSelector(
  [selectSubCategoryState],
  (subCategory) => subCategory.subCategories || []
);

export const selectSubCategoryToEdit = createSelector(
  [selectSubCategoryState],
  (subCategory) => subCategory.subCategoryToEdit || null
);

const selectPlacedOrderState = (state) =>
  state.placedOrder || { placedOrders: [] };

export const selectPlacedOrders = createSelector(
  [selectPlacedOrderState],
  (placedOrder) => placedOrder.placedOrders || [] // <-- Fallback to empty array
);
