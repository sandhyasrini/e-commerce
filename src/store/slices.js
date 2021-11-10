import { createSlice } from "@reduxjs/toolkit";


const userState = {
    username: "",
    password: ""
}

const userSlice = createSlice({
    name: "users",
    initialState: userState,
    reducers: {
        getUserDetails: (state, action) => {
            console.log(action.payload);
        },
    }
})

export const { loginAction} =  userSlice.actions
export const { loginReducer } = userSlice.reducer