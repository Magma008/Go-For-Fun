import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
    name: "signUp",
    initialState: {
        data: [],
    },
    reducers: {
        signUp: (state, action) => {
            // console.log(state.data);
            // console.log(action.payload);
            localStorage.setItem("userData", JSON.stringify(action.payload))
        },
        login: (state, action) => {
            
        }
    }
})

export const { signUp, login } = signUpSlice.actions;
export default signUpSlice.reducer;