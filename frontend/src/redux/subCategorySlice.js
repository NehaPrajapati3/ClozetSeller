import { createSlice } from "@reduxjs/toolkit";

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState: {
    subCategories: null,
    subCategoryToEdit: null,
  },
  reducers: {
    setSubCategories: (state, action) => {
      console.log("✅ Inside setSubCategories reducer!");
      console.log("🚀 Payload received:", action.payload);
      state.subCategories = action.payload;
      console.log("✅ Updated Categories:", state.subCategories);
    },
    setSubCategoryToEdit: (state, action) => {
      state.subCategoryToEdit = action.payload;
    },
    clearSubCategoryToEdit: (state) => {
      state.subCategoryToEdit = null;
    },
    deleteSubCategory: (state, action) => {
      state.subCategories = state.subCategories.filter(
        (subCategory) => subCategory._id !== action.payload
      );
    },
  },
});

export const {
  setSubCategories,
  setSubCategoryToEdit,
  clearSubCategoryToEdit,
  deleteSubCategory,
} = subCategorySlice.actions;

export default subCategorySlice.reducer;
