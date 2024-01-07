import { configureStore } from "@reduxjs/toolkit";
import { vehicleReducer } from "./Redux/vehicleSlice";

const store = configureStore({
    reducer:{
        vehicleStore : vehicleReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store