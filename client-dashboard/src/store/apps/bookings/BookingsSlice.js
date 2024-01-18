import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookingLocation: "",
    roomCategory:"",
    roomName: "",
  };

  export const BookingsSlice = createSlice({
    name: 'Bookings',
    initialState,
    reducers: {
      setBookingLocation: (state, action) => {
        state.bookingLocation = action.payload;
      },
      setRoomCategory: (state, action) => {
        state.roomCategory = action.payload;
      },
      setRoomName: (state, action) => {
        state.roomName = action.payload;
      }
    },
  });

  export const {setBookingLocation, setRoomCategory, setRoomName} = BookingsSlice.actions;

  export default BookingsSlice.reducer