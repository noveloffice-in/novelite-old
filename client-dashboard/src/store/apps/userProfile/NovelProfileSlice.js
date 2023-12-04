import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: ""
  };

  export const NovelProfileSlice = createSlice({
    name: 'UserProfile',
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.userName = action.payload;
      },
    },
  });
  
  export const { setUser } = NovelProfileSlice.actions;

  export default NovelProfileSlice.reducer