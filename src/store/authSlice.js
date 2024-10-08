import { createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../appwrite/auth";


const initialState = {
  userData: null,
  status: false
};

const authSlice = createSlice({
    name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
        state.status = true;
        state.userData = action.payload.userData;
    },
    logout: (state) => {
        state.status = false;
        state.userData = null;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;