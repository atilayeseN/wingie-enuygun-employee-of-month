import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const site = createSlice({
  name: "site",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } =
  site.actions;
export default site.reducer;