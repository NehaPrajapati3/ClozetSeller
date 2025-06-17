import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import authReducer from "./authSlice";
import orderReducer from "./orderSlice";
import employeeReducer from "./employeeSlice";
import couponReducer from "./couponSlice";
import placedOrderReducer from "./placedOrdersSlice";
import categoryReducer from "./categorySlice";
import subCategoryReducer from "./subCategorySlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  order: orderReducer,
  employee: employeeReducer,
  coupon: couponReducer,
  placedOrder: placedOrderReducer,
  category: categoryReducer,
  subCategory: subCategoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
