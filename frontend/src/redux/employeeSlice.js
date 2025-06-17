import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: null,
  },
  reducers: {
    setEmployees: (state, action) => {
      console.log("✅ Inside setEmployees reducer!");
      console.log("🚀 Payload received:", action.payload);
      state.employees = action.payload;
      console.log("✅ Updated Employees:", state.employees);
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee._id !== action.payload
      );
    },
  },
});

export const { setEmployees, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
