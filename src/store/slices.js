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
            state.username = action.payload.Username
            state.password = action.payload.Password
        },
    }
})

export const { getUserDetails} =  userSlice.actions
export default userSlice