import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    userEmail: ""
  };

  export const NovelProfileSlice = createSlice({
    name: 'UserProfile',
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.userName = action.payload;
      },
      setUserEmail: (state, action) => {
        state.userEmail = action.payload;
      },
    },
  });
  
  export const { setUser, setUserEmail } = NovelProfileSlice.actions;

  export default NovelProfileSlice.reducer