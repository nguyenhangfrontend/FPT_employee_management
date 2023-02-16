import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employeeList: [],
  isCreated: false,
  isDeleted: false,
  employeeInfo: {}
  };
const employee = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeList: (state, action) => {
      state.employeeList = action.payload;
    },
    setCreateSuccess: (state, action) => {
      state.isCreated = action.payload;
    },
    setDeleteSuccess: (state, action) => {
      state.isDeleted = action.payload;
    },
    setDetail: (state, action) => {
      state.employeeInfo = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export default employee;
