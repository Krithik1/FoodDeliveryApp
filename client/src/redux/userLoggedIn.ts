import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userLoggedIn",
    initialState: {
        user: "",
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = "";
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;