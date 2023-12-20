import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    userEmail: "",
    account_type: ""
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
      setAccountType: (state, action) => {
        state.account_type = action.payload;
      },
    },
  });
  
  export const { setUser, setUserEmail, setAccountType } = NovelProfileSlice.actions;

  export default NovelProfileSlice.reducer