import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../lib/api-client";
import { setToken, removeToken } from "../../utils/HelperFuncton";
import { LOGIN_ROUTE, REGISTER_ROUTE,  LOGOUT_ROUTE, GOOGLE_LOGIN_ROUTE } from "../../utils/constrants";

export const register = createAsyncThunk("auth/register", async (payload) => {
    try {
        const response = await apiClient.post(
            REGISTER_ROUTE,
            payload,
            { withCredentials: true }
          );

          return response.data;
    } catch (error) {
        console.log("register error", error);
        
    }
})


export const login = createAsyncThunk("auth/login", async (payload) => {
  try {
    const response = await apiClient.post(LOGIN_ROUTE, payload, {
      withCredentials: true,
    });

    console.log({ response });
    const { accessToken} = response.data;
    setToken(accessToken);

    if (response) {
      return response;
    }

  } catch (error) {
    console.log("login error", error.message);
  }
});

// export const getUserData = createAsyncThunk("auth/getUserData", async () => {
//     try {
       
//         const response = await apiClient.get(
//             CURRENT_USER_ROUTES,
            
//             { withCredentials: true }
//           );
//           if(response.data){
//             return response.data;
//           }
//     } catch (error) {
//         removeToken();
//         console.log("getUserdata error", error);
        
//     }
// })

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        const response = await apiClient.post(LOGOUT_ROUTE, {}, {
            withCredentials: true
          });
          console.log({ response });
          removeToken();
          return response;
    } catch (error) {
        console.log("logout error", error);
        
    }
})
