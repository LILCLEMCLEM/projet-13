import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProfile, SetProfile } from "./apiService";

export const GetUser = createAsyncThunk("getUser", async (token) => {
  const response = await GetProfile({ token });

  return response;
});

export const SetUser = createAsyncThunk(
  "setUser",
  async ({ firstName, lastName, token }) => {
    const response = await SetProfile({ firstName, lastName, token });
    console.log(response);
    return response;
  }
);

export const ProfileSlice = createSlice({
  name: "user",
  initialState: {
    firstname: "",
    lastname: "",
    edit: false,
    error: false,
    message: "",
  },
  reducers: {
    setErrorUser: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetUser.fulfilled, (state, action) => {
        switch (action.payload.status) {
          default:
            break;

          case 200:
            state.firstname = action.payload.body.firstName;
            state.lastname = action.payload.body.lastName;
            state.error = false;

            break;

          case 401:
            state.firstname = "";
            state.lastname = "";
            state.error = true;
            state.message = "Utilisateur déconnecté";
        }
      })
      .addCase(GetUser.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(SetUser.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case 200:
            state.firstname = action.payload.body.firstName;
            state.lastname = action.payload.body.lastName;
            state.error = false;
            break;
          default:
            break;
        }
      });
  },
});

export const { setErrorUser, setEdit } = ProfileSlice.actions;

export const selectUserFirstname = (state) => state.user.firstname;
export const selectUserLastname = (state) => state.user.lastname;
export const selectErrorUser = (state) => state.user.error;
export const SelectErrorMessage = (state) => state.user.message;
export const SelectEdit = (state) => state.user.edit;
export default ProfileSlice.reducer;
