import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  companyName: "",
  userEmail: "",
  account_type: "",
  location: "",
  userImage: "",
  leads:[],
  cr: "",
  mr: "",
  mr_and_cr: "",
  showComplementary:false
};

export const NovelProfileSlice = createSlice({
  name: 'UserProfile',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.fullName = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setAccountType: (state, action) => {
      state.account_type = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setUserImage: (state, action) => {
      state.userImage = action.payload;
    },
    setCR: (state, action) => {
      state.cr = action.payload;
    },
    setMR: (state, action) => {
      state.mr = action.payload;
    },
    setMRandCR: (state, action) => {
      state.mr_and_cr = action.payload;
    },
    setLeads: (state, action) => {
      state.leads = action.payload;
    },
    setShowComplementary: (state, action) => {
      state.showComplementary = action.payload;
    },
  },
});

export const { setUser, setUserEmail, setAccountType, setLocation, setCompanyName, setUserImage, setCR, setMR, setMRandCR, setLeads, setShowComplementary } = NovelProfileSlice.actions;

export default NovelProfileSlice.reducer