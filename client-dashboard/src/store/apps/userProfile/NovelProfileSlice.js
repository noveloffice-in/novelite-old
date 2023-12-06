import { createSlice } from "@reduxjs/toolkit";
// import useFetchUserDetails from "../../../views/dashboard/customHooks/useFetchUserDetails";

// const userData = useFetchUserDetails("name");

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