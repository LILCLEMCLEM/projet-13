import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LoginFormSubmit from "./apiService";

export const loginAsync = createAsyncThunk(
  "tokenLogin",
  async ({ email, password, remember }) => {
    const response = await LoginFormSubmit(email, password);
    console.log(remember);
    
    response.remember = remember
    return response;
  }
);

export const TokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,
    remember: false,
    isError: false,
    message: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRemember(state) {
      state.remember = true;
    },
    resetToken: (state) => {
      state.token = null;
    },

    setError: (state, action) => {
      state.isError = action.payload;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case 200:
            state.token = action.payload.body.token;
            state.isError = false;
            if (action.payload.remember) {
              sessionStorage.setItem("token", action.payload.body.token);
            }
            break;

          case 400:
            state.token = "";
            state.isError = true;
            state.message = "email ou mot de passe invalide";
            break;
          case 500:
          case 501:
            state.token = "";
            state.isError = true;
            state.message = "Erreur serveur";
            break;

          default:
            break;
        }
      })
      .addCase(loginAsync.rejected, (state) => {
        state.token = "";
      });
  },
});

export const { setToken, resetToken, setError, setRemember } =
  TokenSlice.actions;

export const selectToken = (state) => state.token.token;
export const selectError = (state) => state.token.isError;
export const selectMessage = (state) => state.token.message;

export default TokenSlice.reducer;
