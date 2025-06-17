import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: null,
    categoryToEdit: null,
  },
  reducers: {
    setCategories: (state, action) => {
      console.log("✅ Inside setCategories reducer!");
      console.log("🚀 Payload received:", action.payload);
      state.categories = action.payload;
      console.log("✅ Updated Categories:", state.categories);
    },
    setCategoryToEdit: (state, action) => {
      state.categoryToEdit = action.payload;
    },
    clearCategoryToEdit: (state) => {
      state.categoryToEdit = null;
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category._id !== action.payload
      );
    },
  },
});

export const { setCategories, setCategoryToEdit, clearCategoryToEdit, deleteCategory } =
  categorySlice.actions;
  
export default categorySlice.reducer;
