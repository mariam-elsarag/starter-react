import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./src/feaures/Auth/AuthSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
});

export default Store;
