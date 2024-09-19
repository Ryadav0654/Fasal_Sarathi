import { createSlice } from "@reduxjs/toolkit";
import {  login, register, logout } from "./authThunk";

const initialState = {
  userData: {},
  loading: false,
  accessToken: localStorage.getItem("accessToken") ||null,
 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        // console.log("register_payload", action.payload.data);

        state.loading = false;
        state.userData = action.payload.data;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("login payload", action.payload);

        const { accessToken} = action.payload.data;
       
        console.log("access", accessToken);
        
        state.loading = false;
        state.accessToken = accessToken;
        // state.refreshToken = refreshToken;
        state.userData = action.payload.data.user;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      // .addCase(getUserData.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getUserData.fulfilled, (state, action) => {
      //   console.log("getuserData_action", action.payload);
 
      //   console.log("userdata_user", action.payload.data);
        
      //   state.loading = false;
      //   state.userData = action.payload.data;
      //   // state.accessToken = accessToken;
      // })
      // .addCase(getUserData.rejected, (state) => {
      //   state.loading = false;
      // })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.userData = {};
        state.accessToken = null;
      });
  },
});

export default authSlice.reducer;
