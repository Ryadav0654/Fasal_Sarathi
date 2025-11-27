import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios, { isAxiosError } from "axios";

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (token, thunkAPI) => {
    try {
      console.log("VERIFY TOKEN START");

      // Send token to backend for verification
      const { data, status } = await axios.get(
        "http://localhost:8080/api/v1/auth/validate",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // console.log("Response:", res.status);

      // If response is not OK, treat it as invalid token
      if (!(data.success && status === 200)) {
        console.error("Invalid token:", res.status);
        throw new Error("Invalid token");
      }

      // ✅ If valid, return true (or any other useful data if needed)
      return data.success;
    } catch (err) {
      console.error("verifyToken failed:", err.message);
      if(isAxiosError(err)){
        console.error(err.response.data.message)
      }

      // Send error message to rejected reducer
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  loading: false,
  token: localStorage.getItem("accessToken") || null,
  hasCheckedAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state,action) {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", action.payload)
    },
    logout(state){
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
    }
  },
  extraReducers: (builder) => {
    builder
      // 🔄 While token is being verified
      .addCase(verifyToken.pending, (state) => {
        state.loading = true; // Show loading state
      })

      // ✅ If token is valid
      .addCase(verifyToken.fulfilled, (state) => {
        state.isAuthenticated = true;   // Mark as authenticated
        state.loading = false;          // Done loading
        state.hasCheckedAuth = true;    // Mark check complete
      })

      // ❌ If token is invalid or request fails
      .addCase(verifyToken.rejected, (state) => {
        state.token = null;                     // Clear token
        state.isAuthenticated = false;          // Mark as not authenticated
        state.loading = false;                  // Done loading
        state.hasCheckedAuth = true;            // Mark check complete
        localStorage.removeItem("accessToken"); // Remove token from localStorage
      });
  }
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
