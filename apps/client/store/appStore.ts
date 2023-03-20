import { Problem, ProblemDetail } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { HYDRATE } from "next-redux-wrapper";

const slice = createSlice({
    name: "app",
    initialState: {
        showLoginModal: <boolean>false,
    },
    reducers: {
        setShowLoginModalAction: (state, action: PayloadAction<boolean>) => {
            state.showLoginModal = action.payload;
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.app,
            };
        },
    },
})

export const { setShowLoginModalAction } = slice.actions

export default slice.reducer