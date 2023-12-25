import { configureStore } from "@reduxjs/toolkit";
import { TokenSlice } from "../utils/TokenSlice";
import { ProfileSlice } from "../utils/ProfilSlice";

export default configureStore({
  reducer: {
    token: TokenSlice.reducer,
    user: ProfileSlice.reducer,
  },
});
