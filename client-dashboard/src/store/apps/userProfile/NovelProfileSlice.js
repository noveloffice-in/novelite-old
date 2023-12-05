import { createSlice } from "@reduxjs/toolkit";

let userData = localStorage.getItem('user');
userData = JSON.parse(userData);
if( userData ){
  userData = userData.name;
    console.log(userData.email);
}

const initialState = {
    userName: userData
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