import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [],
};

export const site = createSlice({
  name: "site",
  initialState,
  reducers: {
    setMembers: (state, action) => {
      state.members = action.payload;
    },
  },
});

export const { setMembers } =
  site.actions;
export default site.reducer;