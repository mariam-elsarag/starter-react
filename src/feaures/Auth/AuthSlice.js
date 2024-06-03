import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("authenticationToken"),
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { updateAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
