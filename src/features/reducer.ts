import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogPost: null,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setBlogPost: (state, action) => {
      state.blogPost = action.payload;
    },
  },
});

export const { setBlogPost } = appReducer.actions;

export default appReducer.reducer;
