import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../features/sign/signSlice"

const store = configureStore({
    reducer: {
        signUp: signUpSlice,
    },
});

export default store