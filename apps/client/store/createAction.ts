import { PayloadAction } from "@reduxjs/toolkit";

export default function createAction<T>(key: string) {
    return (state: any, action: PayloadAction<T>) => {
        state[key] = action.payload;
    }
}